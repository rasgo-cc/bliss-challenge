import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  shareUrl = 'https://private-anon-d2ac6f7f4f-blissrecruitmentapi.apiary-mock.com/share';

  constructor(
    private http: HttpClient
  ) { }

  share(destinationEmail: string, contentUrl: string): Observable<Object> {
    let url = this.shareUrl;
    url += '?destination_email=' + destinationEmail + '&content_url=' + contentUrl;
    return this.http.post(url, '');
  }
}
