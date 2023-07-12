import { LinkComponent } from './../link/link.component';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  standalone: true,
  imports: [
    LinkComponent
  ]
})
export class LogoutComponent {

  constructor(private authService: AuthService) {}

  public signOut(): void {
    this.authService.logOut();
  }
}
