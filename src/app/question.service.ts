import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  defaultLimit = 10;
  questionsUrl = 'https://private-bbbe9-blissrecruitmentapi.apiary-mock.com/questions';

  constructor(
    private http: HttpClient
  ) { }

  search(term = "", offset = 0, limit = this.defaultLimit): Observable<Question[]> {
    let url = this.questionsUrl;
    url += '?offset=' + offset + '&limit=' + limit;
    if(term != "") {
      url += '&filter=' + term;
    }
    return this.http.get<Question[]>(url);
  }

  getQuestion(id: number): Observable<Question> {
    return this.http.get<Question>(this.questionsUrl + '/' + id);
  }
}
