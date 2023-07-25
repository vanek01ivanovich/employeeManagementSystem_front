import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {AuthLoginInfo} from "../../service/login-info";
import {AuthService} from "../../service/auth.service";
import {TokenStorageService} from "../../service/token-storage.service";
import {CreateEmployeeRequestDto} from "../../authorization/data/CreateEmployeeRequestDto";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  roles: string[] = [];
  private requestDto!: CreateEmployeeRequestDto;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) {
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
  }

  onSubmit() {
    this.requestDto = new CreateEmployeeRequestDto(
      this.form.username,
      this.form.firstName,
      this.form.lastName,
      btoa(this.form.password),
      this.form.email,
      this.form.departmentName,
      this.form.roleName
    );
    console.log(this.requestDto);

    this.authService.createUser(this.requestDto).subscribe(
      data => {
        console.log("data ", data);
      },
      error => {
        console.log(error);
      }
    );


  }

}
