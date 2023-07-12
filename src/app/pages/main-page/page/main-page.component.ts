import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PostsService } from './../../../services/posts.service';
import { IPost } from './../../../interfaces/post.interface';
import { AppPath } from 'src/app/enums/routing-path-enum';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public isLoading: boolean = true;

  public posts!: IPost[];

  public errorMessage: boolean = false;

  constructor(private postsService: PostsService, private router: Router) {}

  ngOnInit(): void {
    this.postsService.getPosts()
    .subscribe({
      next: (posts) => {
        this.isLoading = false;
        this.posts = posts;
      },
      error: () => {
        this.isLoading = false;
        this.errorMessage = true;
      }
    })
  }

  public navigateToPostPage(id: number): void {
    this.router.navigate([AppPath.PostPageFullPath + id]);
  }
}
