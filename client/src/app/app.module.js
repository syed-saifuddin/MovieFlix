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
var router_1 = require('@angular/router');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var movie_list_component_1 = require('./movie-list/movie-list.component');
var movie_detail_component_1 = require('./movie-detail/movie-detail.component');
var not_found_component_1 = require('./not-found/not-found.component');
var type_movie_component_1 = require('./type-movie/type-movie.component');
var type_series_component_1 = require('./type-series/type-series.component');
var search_component_1 = require('./search/search.component');
var genre_search_component_1 = require('./genre-search/genre-search.component');
var admin_add_component_1 = require('./admin-add/admin-add.component');
var admin_update_component_1 = require('./admin-update/admin-update.component');
var movie_service_1 = require('./movie-service/movie.service');
var comment_service_1 = require('./comment-service/comment.service');
var appRoutes = [
    { path: '', redirectTo: 'movies', pathMatch: 'full' },
    { path: 'movies', component: movie_list_component_1.MovieListComponent },
    { path: 'movies/:id', component: movie_detail_component_1.MovieDetailComponent },
    { path: 'mtype', component: type_movie_component_1.TypeMovieComponent },
    { path: 'stype', component: type_series_component_1.TypeSeriesComponent },
    { path: 'searchyr', component: search_component_1.SearchComponent },
    { path: 'searchgnr', component: genre_search_component_1.GenreSearchComponent },
    { path: 'adminadd', component: admin_add_component_1.AdminAddComponent },
    { path: 'movies/update/:id', component: admin_update_component_1.AdminUpdateComponent },
    { path: '**', component: not_found_component_1.NotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, router_1.RouterModule.forRoot(appRoutes), forms_1.FormsModule],
            declarations: [app_component_1.AppComponent, movie_list_component_1.MovieListComponent, movie_detail_component_1.MovieDetailComponent, not_found_component_1.NotFoundComponent, type_movie_component_1.TypeMovieComponent, type_series_component_1.TypeSeriesComponent, search_component_1.SearchComponent, genre_search_component_1.GenreSearchComponent, admin_add_component_1.AdminAddComponent, admin_update_component_1.AdminUpdateComponent],
            providers: [movie_service_1.MovieService, comment_service_1.CommentService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
console.log('Running');
//# sourceMappingURL=app.module.js.map