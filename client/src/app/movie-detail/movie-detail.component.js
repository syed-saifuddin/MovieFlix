"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var movie_service_1 = require('../movie-service/movie.service');
var comment_service_1 = require("../comment-service/comment.service");
var MovieDetailComponent = (function () {
    /*@Input() comment: Comment;
    @Input() listId: string;
    @Input() editId:string;*/
    function MovieDetailComponent(route, movieService, commentService) {
        var _this = this;
        this.route = route;
        this.movieService = movieService;
        this.commentService = commentService;
        this.movie = {};
        this.comments = [];
        this.newComment = { "comment": '', "rating": '' };
        this.route.params.subscribe(function (params) {
            movieService.getMovieById(params['id'])
                .subscribe(function (movie) { return _this.movie = movie; }, function (error) { return console.log(error); });
            commentService.getCommentById(params['id'])
                .subscribe(function (comment) { return _this.comments = comment; }, function (error) { return console.log(error); });
        });
    }
    MovieDetailComponent.prototype.addComment = function () {
        var _this = this;
        this.newComment.movie = this.movie;
        this.commentService.createComment(this.newComment)
            .subscribe(function (comment) { return _this.comments = comment; }, function (error) { return console.log(error); });
        location.reload();
    };
    MovieDetailComponent.prototype.deleteMovie = function () {
        var _this = this;
        this.movieService.deleteMovie(this.movie.id)
            .subscribe(function (data) { return _this.movie = data; }, function (error) { return console.log(error); });
    };
    MovieDetailComponent = __decorate([
        core_1.Component({
            templateUrl: 'movie-detail.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, movie_service_1.MovieService, comment_service_1.CommentService])
    ], MovieDetailComponent);
    return MovieDetailComponent;
}());
exports.MovieDetailComponent = MovieDetailComponent;
//# sourceMappingURL=movie-detail.component.js.map