/**
 * Created by syed_ on 2/16/2017.
 */
import {Component, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from '../movie-service/movie.service';
import {CommentService} from "../comment-service/comment.service";
import {error} from "util";

@Component({
    templateUrl: 'admin-add.component.html'
})
export class AdminAddComponent {

    movie: any = {};

    constructor(private movieService: MovieService) {}

    showForm(){

    }
    addMovie() {
        this.movieService.createMovie(this.movie)
            .subscribe(
                comment => this.movie = comment,
                error => console.log(error)
            );
        location.reload();
    }
}