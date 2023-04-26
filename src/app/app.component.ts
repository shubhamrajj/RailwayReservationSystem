import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { User } from './user';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgDotNetAuth.UI';
 user = new User();
  constructor(private authService: AuthService){}
 
  login(user: User) {
      this.authService.login(user).subscribe((token: string) => {
        localStorage.setItem('authToken', token)
      })
    }
}
