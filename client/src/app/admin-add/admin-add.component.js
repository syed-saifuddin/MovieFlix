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
 * Created by syed_ on 2/16/2017.
 */
var core_1 = require('@angular/core');
var movie_service_1 = require('../movie-service/movie.service');
var AdminAddComponent = (function () {
    function AdminAddComponent(movieService) {
        this.movieService = movieService;
        this.movie = {};
    }
    AdminAddComponent.prototype.showForm = function () {
    };
    AdminAddComponent.prototype.addMovie = function () {
        var _this = this;
        this.movieService.createMovie(this.movie)
            .subscribe(function (comment) { return _this.movie = comment; }, function (error) { return console.log(error); });
        location.reload();
    };
    AdminAddComponent = __decorate([
        core_1.Component({
            templateUrl: 'admin-add.component.html'
        }), 
        __metadata('design:paramtypes', [movie_service_1.MovieService])
    ], AdminAddComponent);
    return AdminAddComponent;
}());
exports.AdminAddComponent = AdminAddComponent;
//# sourceMappingURL=admin-add.component.js.map