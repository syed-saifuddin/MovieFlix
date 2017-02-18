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
/**
 * Created by syed_ on 2/17/2017.
 */
/**
 * Created by syed_ on 2/16/2017.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var movie_service_1 = require('../movie-service/movie.service');
var AdminUpdateComponent = (function () {
    function AdminUpdateComponent(route, router, movieService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.movieService = movieService;
        this.movie = {};
        this.route.params.subscribe(function (params) {
            movieService.getMovieById(params['id'])
                .subscribe(function (movie) { return _this.movie = movie; }, function (error) { return console.log(error); });
        });
    }
    AdminUpdateComponent.prototype.updateMovie = function () {
        var _this = this;
        this.movieService.updateMovie(this.movie.id, this.movie)
            .subscribe(function (response) { return _this.router.navigate(['movies', _this.movie.id]); }, function (error) { return console.log(error); });
        location.reload();
    };
    AdminUpdateComponent = __decorate([
        core_1.Component({
            templateUrl: 'admin-update.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, movie_service_1.MovieService])
    ], AdminUpdateComponent);
    return AdminUpdateComponent;
}());
exports.AdminUpdateComponent = AdminUpdateComponent;
//# sourceMappingURL=admin-update.component.js.map