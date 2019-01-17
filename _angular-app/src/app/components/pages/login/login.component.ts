import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {
    email: 'admin@user.com',
    password: 'secret'
  }

  showMessagesError = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  submit() {
    /*
    this.http.post<any>('http://localhost:8000/api/login', this.credentials)
      .subscribe((data) => {
          const token = data.token;
          window.localStorage.setItem('token', token);
          this.router.navigate(['categories/list']);
      }, () => this.showMessagesError = true);
    return false;
    */
    this.authService.login(this.credentials)
        .subscribe((data) => {
            //  const token = data.token;
            //  window.localStorage.setItem('token', token);
              this.router.navigate(['categories/list']);
          }, () => this.showMessagesError = true);
        return false;
  }

}
