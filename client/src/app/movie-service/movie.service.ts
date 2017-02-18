import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class MovieService {
    constructor(private http: Http) {
    }

    getMovies(): Observable<any[]> {
        return this.http.get('http://localhost:8080/spring-api/api/movies')
            .map(response => response.json())
            .catch(error => Observable.throw(error.statusText));
    }

    getMovieById(id: string): Observable<any[]> {
        return this.http.get(`http://localhost:8080/spring-api/api/movies?id=${id}`)
            .map(response => response.json())
            .catch(error => Observable.throw(error.statusText));
    }

    getTitleOfMoviesType(): Observable<any[]> {
        return this.http.get(`http://localhost:8080/spring-api/api/movies?type=movie`)
            .map(response => response.json())
            .catch(error => Observable.throw(error.statusText));
    }

    getTitleOfSeriesType(): Observable<any[]> {
        return this.http.get(`http://localhost:8080/spring-api/api/movies?type=series`)
            .map(response => response.json())
            .catch(error => Observable.throw(error.statusText));
    }

    searchByYear(year: string): Observable<any[]> {
        return this.http.get(`http://localhost:8080/spring-api/api/movies?year=${year}`)
            .map(response => response.json())
            .catch(error => Observable.throw(error.statusText));
    }

    searchByGenre(genre: string): Observable<any[]> {
        return this.http.get(`http://localhost:8080/spring-api/api/movies?genre=${genre}`)
            .map(response => response.json())
            .catch(error => Observable.throw(error.statusText));
    }

    createMovie(movie: any): Observable<any[]> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        return this.http.post('http://localhost:8080/spring-api/api/movies', movie, options)
            .map(response => response.json())
            .catch(error => Observable.throw(error.statusText));
    }

    updateMovie(id: string, movie: any): Observable<any[]> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        return this.http.put(`http://localhost:8080/spring-api/api/movies/${id}`, movie, options)
            .map(response => response.json())
            .catch(error => Observable.throw(error.statusText));
    }

    deleteMovie(id: string): Observable<any[]> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        return this.http.delete(`http://localhost:8080/spring-api/api/movies/${id}`)
            .map(response => response.json())
            .catch(error => Observable.throw(error.statusText));
    }
}

