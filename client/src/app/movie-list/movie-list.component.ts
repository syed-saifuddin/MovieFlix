import {Component} from '@angular/core';
import {MovieService} from '../movie-service/movie.service';

@Component({
    templateUrl: 'movie-list.component.html'
})
export class MovieListComponent {

    movieList: any = [];

    constructor(private movieService: MovieService) {

        movieService.getMovies()
            .subscribe(
                movies => this.movieList = movies,
                error => console.log(error)
            );
    }
}