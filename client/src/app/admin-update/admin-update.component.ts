/**
 * Created by syed_ on 2/17/2017.
 */
/**
 * Created by syed_ on 2/16/2017.
 */
import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MovieService} from '../movie-service/movie.service';
import {CommentService} from "../comment-service/comment.service";
import {error} from "util";

@Component({
    templateUrl: 'admin-update.component.html'
})
export class AdminUpdateComponent {

    movie: any = {};

    constructor(private route: ActivatedRoute, private router: Router,private movieService: MovieService) {
        this.route.params.subscribe(
            params => {
                movieService.getMovieById(params['id'])
                    .subscribe(
                        movie => this.movie = movie,
                        error => console.log(error)
                    );
            });
    }


    updateMovie() {
        this.movieService.updateMovie(this.movie.id, this.movie)
            .subscribe(
                response => this.router.navigate(['movies',this.movie.id]),
                error => console.log(error)
            );
        location.reload();
    }
}