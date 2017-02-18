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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
require('rxjs/add/observable/throw');
var MovieService = (function () {
    function MovieService(http) {
        this.http = http;
    }
    MovieService.prototype.getMovies = function () {
        return this.http.get('http://localhost:8080/spring-api/api/movies')
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.statusText); });
    };
    MovieService.prototype.getMovieById = function (id) {
        return this.http.get("http://localhost:8080/spring-api/api/movies?id=" + id)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.statusText); });
    };
    MovieService.prototype.getTitleOfMoviesType = function () {
        return this.http.get("http://localhost:8080/spring-api/api/movies?type=movie")
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.statusText); });
    };
    MovieService.prototype.getTitleOfSeriesType = function () {
        return this.http.get("http://localhost:8080/spring-api/api/movies?type=series")
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.statusText); });
    };
    MovieService.prototype.searchByYear = function (year) {
        return this.http.get("http://localhost:8080/spring-api/api/movies?year=" + year)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.statusText); });
    };
    MovieService.prototype.searchByGenre = function (genre) {
        return this.http.get("http://localhost:8080/spring-api/api/movies?genre=" + genre)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.statusText); });
    };
    MovieService.prototype.createMovie = function (movie) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('http://localhost:8080/spring-api/api/movies', movie, options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.statusText); });
    };
    MovieService.prototype.updateMovie = function (id, movie) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put("http://localhost:8080/spring-api/api/movies/" + id, movie, options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.statusText); });
    };
    MovieService.prototype.deleteMovie = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.delete("http://localhost:8080/spring-api/api/movies/" + id)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.statusText); });
    };
    MovieService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MovieService);
    return MovieService;
}());
exports.MovieService = MovieService;
//# sourceMappingURL=movie.service.js.map