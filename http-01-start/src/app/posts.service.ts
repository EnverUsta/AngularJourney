import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(private http: HttpClient) {}

  createAndStorePosts(title: string, content: string) {
    const postData: Post = { title, content };
    return this.http.post<{ name: string }>(
      'https://ng-complete-guide-aa87d-default-rtdb.firebaseio.com/posts.json',
      postData,
      {
        // default ones
        observe: 'body',
        responseType: 'json'
      }
    );
  }

  fetchPosts(): Observable<Post[]> {
    return this.http
      .get<{ [key: string]: Post }>(
        'https://ng-complete-guide-aa87d-default-rtdb.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({
            'Custom-Header': 'Hello',
          }),
          params: new HttpParams().set('print', 'pretty'),
        }
      )
      .pipe(
        map(
          (responseData) => {
            const poststArray: Post[] = [];
            for (const key in responseData) {
              if (responseData.hasOwnProperty(key)) {
                poststArray.push({ ...responseData[key], id: key });
              }
            }
            return poststArray;
          },
          catchError((errorResponse) => {
            // Send to analytics server
            return throwError(errorResponse);
          })
        )
      );
  }

  deletePosts(): Observable<any> {
    return this.http.delete(
      'https://ng-complete-guide-aa87d-default-rtdb.firebaseio.com/posts.json'
    );
  }
}
