import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppPath } from './enums/routing-path-enum';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: AppPath.Core,
    redirectTo: AppPath.Main,
    pathMatch: 'full',
  },
  {
    path: AppPath.LogIn,
    loadChildren: () => import('./pages/login-page/login-page.module').then(m => m.LoginPageModule)
  },
  {
    path: AppPath.Main,
    loadChildren: () => import('./pages/main-page/main-page.module').then(m => m.MainPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: AppPath.PostPage,
    redirectTo: AppPath.Main,
    pathMatch: 'full',
  },
  {
    path: AppPath.SinglePostPage,
    loadChildren: () => import('./pages/post-page/post-page.module').then(m => m.PostPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found-page/not-found-page.module').then(m => m.NotFoundPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
