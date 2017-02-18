import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent}  from './app.component';
import {MovieListComponent} from './movie-list/movie-list.component';
import {MovieDetailComponent} from './movie-detail/movie-detail.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {TypeMovieComponent} from './type-movie/type-movie.component';
import {TypeSeriesComponent} from './type-series/type-series.component';
import {SearchComponent} from './search/search.component';
import {GenreSearchComponent} from './genre-search/genre-search.component';
import{AdminAddComponent} from './admin-add/admin-add.component'
import{AdminUpdateComponent} from './admin-update/admin-update.component'

import {MovieService} from './movie-service/movie.service';
import {CommentService} from './comment-service/comment.service';


const appRoutes: Routes = [
    {path: '', redirectTo: 'movies', pathMatch: 'full'},
    {path: 'movies', component: MovieListComponent},
    {path: 'movies/:id', component: MovieDetailComponent},
    {path: 'mtype', component: TypeMovieComponent},
    {path: 'stype', component: TypeSeriesComponent},
    {path: 'searchyr', component: SearchComponent},
    {path: 'searchgnr', component: GenreSearchComponent},
    {path: 'adminadd', component: AdminAddComponent},
    {path: 'movies/update/:id', component: AdminUpdateComponent},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [BrowserModule, HttpModule, RouterModule.forRoot(appRoutes), FormsModule],
    declarations: [AppComponent, MovieListComponent, MovieDetailComponent, NotFoundComponent, TypeMovieComponent,TypeSeriesComponent, SearchComponent, GenreSearchComponent, AdminAddComponent, AdminUpdateComponent],
    providers: [MovieService, CommentService],
    bootstrap: [AppComponent]
})
export class AppModule {

}

console.log('Running');
