import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Question } from '../question';
import { QuestionService } from '../question.service';
import { environment as env } from '../../environments/environment';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  question: Question;
  votingAllowed = true;
  shareableUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private questionService: QuestionService,
    private location: Location
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.questionService.getQuestion(id)
                        .subscribe(question => this.question = question);
    this.shareableUrl = env.domain + '/questions?question_id=' + id;
  }

  vote(choice: string, event: any): void {
    let i = this.question.choices.findIndex( el => {
      return el.choice === choice;
    });
    this.question.choices[i].votes += 1;
    this.votingAllowed = false;

    event.target.textContent = 'Voting...';

    this.questionService.updateQuestion(this.question)
                        .subscribe(question => {
                          event.target.classList.add('voted');
                          event.target.textContent = 'Voted';
                        });

  }

  goBack() {
    console.log('ref', document.referrer);
    if(document.referrer != env.domain + this.router.url) {
      this.location.back();
    }
    else {
      this.router.navigate(['questions']);
    }
  }
}
