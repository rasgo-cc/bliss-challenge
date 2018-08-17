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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private questionService: QuestionService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log('params', params);

      if('question_filter' in params) {
        console.log('search!');
      }
      else if('question_id' in params) {

      }
      else {
        this.getQuestions();
      }
    });

    this.searchTerms.pipe(
      debounceTime(100),
      distinctUntilChanged(),
      switchMap((term: string) => this.questionService.search(term)),
    ).subscribe(questions => {
      console.log('searched', questions);
      this.questions = questions;
    });
  }

  search(term: string): void {
    console.log('search', term);
    this.questions = new Array<Question>();
    this.searchTerms.next(term);
  }

  getQuestions(): void {
    this.questionService.getQuestions().subscribe(questions => {
      this.questions = questions;
      console.log('questions', questions);
    });
  }

}
