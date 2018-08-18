import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../question.service';
import { Question } from '../question';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  questions: Question[];
  private searchTerms = new Subject<string>();
  resultsInfo = {
    offset: 0,
    lastTerm: "",
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private questionService: QuestionService
  ) { }

  ngOnInit() {

    this.searchTerms.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap((term: string) => {
        return this.questionService.search(term)
      }),
    ).subscribe(questions => {
      this.questions = questions;
    });

    this.route.queryParams.subscribe(params => {
      console.log('params', params);

      let firstTermToSearch = "";

      if('question_filter' in params) {
        firstTermToSearch = params['question_filter'];
      }
      else if('question_id' in params) {
        // goto details
      }

      this.search(firstTermToSearch);
    });
  }

  search(term = ""): void {
    // Because the mock API always retrieves the same questions, let's
    // clear all the current ones first for a better UX
    this.questions = new Array<Question>();
    this.resultsInfo.lastTerm = term;
    this.resultsInfo.offset = 0;
    this.searchTerms.next(term);
  }

  loadMore(): void {
    this.resultsInfo.offset += this.questionService.defaultLimit;
    this.questionService.search(this.resultsInfo.lastTerm,
                                this.resultsInfo.offset)
                        .subscribe(questions => {
                          this.questions = this.questions.concat(questions);
                        });
  }

}
