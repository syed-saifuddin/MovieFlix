import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class CommentService {
    constructor(private http: Http) {
    }

    getCommentById(id: string): Observable<any[]> {
        return this.http.get(`http://localhost:8080/spring-api/api/comments/movies/${id}`)
            .map(response => response.json())
            .catch(error => Observable.throw(error.statusText));
    }

   createComment(body: Object): Observable<any[]> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        return this.http.post('http://localhost:8080/spring-api/api/comments', body, options)
            .map(response => response.json())
            .catch(error => Observable.throw(error.statusText));
    }

    editComment(id: string, user: any): Observable<any[]> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        return this.http.post(`http://mocker.egen.io/users/${id}`, user, options)
            .map(response => response.json())
            .catch(error => Observable.throw(error.statusText));
    }
}

