import { AppPath } from 'src/app/enums/routing-path-enum';
import { PostsService } from './../../../services/posts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPost } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  public id!: string;

  public isLoading: boolean = true;

  public post!: IPost;

  public errorMessage: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.postsService.getSinglePost(this.id)
    .subscribe({
      next: (post) => {
        this.isLoading = false;
        this.post = post;
      },
      error: () => {
        this.isLoading = false;
        this.errorMessage = true;
      }
    })
  }

  public navigateToMain(): void {
    this.router.navigate([AppPath.MainFullPath]);
  }
}
