import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Question } from '../question';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  question: Question;
  votingAllowed = true;

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private location: Location
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log('getting id', id);
    this.questionService.getQuestion(id)
                        .subscribe(question => this.question = question);
  }

  vote(choice: string): void {
    console.log('vote', choice);
    let i = this.question.choices.findIndex( el => {
      return el.choice === choice;
    });
    this.question.choices[i].votes += 1;
    this.votingAllowed = false;
  }

  goBack() {
    this.location.back();
  }
}
