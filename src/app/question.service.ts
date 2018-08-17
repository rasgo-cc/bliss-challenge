import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questionsUrl = 'https://private-bbbe9-blissrecruitmentapi.apiary-mock.com/questions';

  constructor(
    private http: HttpClient
  ) { }

  search(term: string): Observable<Question[]> {
    console.log('service search');
    return this.http.get<Question[]>(this.questionsUrl + '?filter=' + term);
  }

  getQuestion(id: number): Observable<Question> {
    return this.http.get<Question>(this.questionsUrl + '/' + id);
  }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.questionsUrl);
  }
}
