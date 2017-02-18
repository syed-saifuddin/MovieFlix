/**
 * Created by syed_ on 2/15/2017.
 */
import {Component, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from '../movie-service/movie.service';

@Component({
    templateUrl: 'genre-search.component.html'
})
export class GenreSearchComponent {

    genre: any = 'thriller';
    movieList: any = [];
    /*updateYear(){
        console.log(this.genre);
    }*/
    //@Input() year;
    constructor( private movieService: MovieService) { }

    updateYear(){
    this.movieService.searchByGenre(this.genre)
                    .subscribe(
                        movie => this.movieList = movie,
                        error => console.log(error)
                    );
    }

}