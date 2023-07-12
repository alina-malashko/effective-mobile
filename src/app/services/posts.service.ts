import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPost } from './../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private postsUrl = environment.postsUrl;

  constructor(private http: HttpClient) { }

  public getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.postsUrl);
  }

  public getSinglePost(id: string): Observable<IPost> {
    return this.http.get<IPost>(this.postsUrl + id);
  }
}
