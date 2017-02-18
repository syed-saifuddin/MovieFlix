/**
 * Created by syed_ on 2/15/2017.
 */
import {Component, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from '../movie-service/movie.service';

@Component({
    templateUrl: 'search.component.html'
})
export class SearchComponent {

    year: any = '';
    movieList: any = [];

    //@Input() year;
    constructor( private movieService: MovieService) { }

    updateYear(){
        this.movieService.searchByYear(this.year)
            .subscribe(
                movie => this.movieList = movie,
                error => console.log(error)
            );
    }
}