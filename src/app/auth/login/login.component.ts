import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {

    if (localStorage.getItem('username') && localStorage.getItem('password')) {
      this.router.navigate(['/']);
    }
  }

  login(form: NgForm) {
    console.log(form.value);
    this.router.navigate(['/']);
    this.auth.login(form.value.username, form.value.password);
  }

}
