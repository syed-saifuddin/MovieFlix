import {Component, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from '../movie-service/movie.service';
import {CommentService} from "../comment-service/comment.service";
import {error} from "util";

@Component({
    templateUrl: 'movie-detail.component.html'
})
export class MovieDetailComponent {

    movie: any = {};
    comments: any =[];
    newComment: any ={"comment": '', "rating":''};

    /*@Input() comment: Comment;
    @Input() listId: string;
    @Input() editId:string;*/

    constructor(private route: ActivatedRoute, private movieService: MovieService, private commentService: CommentService) {
        this.route.params.subscribe(
            params => {
                movieService.getMovieById(params['id'])
                    .subscribe(
                        movie => this.movie = movie,
                        error => console.log(error)
                    );
                commentService.getCommentById(params['id'])
                    .subscribe(
                        comment => this.comments=comment,
                        error   => console.log(error)
                    );
            });
    }

    addComment(){
        this.newComment.movie = this.movie;
        this.commentService.createComment(this.newComment)
            .subscribe(
                comment=> this.comments=comment,
                error=> console.log(error)
            );
        location.reload();
    }

    deleteMovie(){
        this.movieService.deleteMovie(this.movie.id)
            .subscribe(
                data => this.movie= data,
                error => console.log(error)
            );

    }

}