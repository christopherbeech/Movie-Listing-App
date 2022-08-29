import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private movieUrl: string = 'https://api.themoviedb.org/3/movie/upcoming?api_key=5dea9fa88d45eb9d20e371a88ce8c1ca';

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get(this.movieUrl);
  }
}
