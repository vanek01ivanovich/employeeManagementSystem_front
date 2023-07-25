import {Component} from '@angular/core';
import {AuthLoginInfo} from "../../service/login-info";
import {TokenStorageService} from "../../service/token-storage.service";
import {AuthService} from "../../service/auth.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo!: AuthLoginInfo;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) {
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
  }

  onSubmit() {
    this.loginInfo = new AuthLoginInfo(
      this.form.username,
      btoa(this.form.password));

    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {
        console.log("data ", data);
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
        this.reloadPage();
      },
      error => {
        console.log("HERE " , error);
        this.errorMessage = error.error;
        this.isLoginFailed = true;
        Swal.fire(this.errorMessage)
      }
    );
  }

  reloadPage() {
    window.location.href = 'dashboard';
  }
}
