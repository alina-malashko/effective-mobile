import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostPageRoutingModule } from './post-page-routing.module';
import { PostPageComponent } from './page/post-page.component';
import { LogoutComponent } from './../../components/logout/logout.component';
import { LinkComponent } from './../../components/link/link.component';
import { LinkBackComponent } from './components/link-back/link-back.component';
import { PostComponent } from './components/post/post.component';
import { LoaderComponent } from './../../components/loader/loader.component';

@NgModule({
  declarations: [
    PostPageComponent,
    LinkBackComponent
  ],
  imports: [
    CommonModule,
    PostPageRoutingModule,
    LinkComponent,
    LogoutComponent,
    PostComponent,
    LoaderComponent
  ],
  exports: [
    PostPageComponent
  ]
})
export class PostPageModule { }
