import { Component, OnInit } from '@angular/core'
import { AuthService } from '../auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  message: string = 'You are logged out'
  name: string
  password: string
  auth: AuthService

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.auth = this.authService
  }

  setMessage() {
    if (this.authService.isLoggedIn) {
      this.message = 'You are logged in'
    } else {
      this.message = 'Invalid credentials'
    }
  }

  login() {
    this.message = 'Trying to log in ...'
    this.authService.login(this.name, this.password).subscribe((isLoggedIn: boolean) => {
      this.setMessage()
      if (isLoggedIn) {
        const redirectUrl = this.authService.redirectUrl ? this.authService.redirectUrl : '/entities'
        this.router.navigate([redirectUrl])
      } else {
        this.password = ''
        this.router.navigate(['/login'])
      }
    })
  }

  logout() {
    this.authService.logout()
    this.message = 'You are logged out'
  }

}
