/**
 * Created by syed_ on 2/15/2017.
 */
import {Component} from '@angular/core';
import {MovieService} from '../movie-service/movie.service';

@Component({
    templateUrl: 'type-series.component.html'
})
export class TypeSeriesComponent {

    movieList: any = [];

    constructor(private movieService: MovieService) {

        movieService.getTitleOfSeriesType()
            .subscribe(
                movies => this.movieList = movies,
                error => console.log(error)
            );
    }
}