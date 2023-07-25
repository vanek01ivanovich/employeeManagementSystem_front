import { Component } from '@angular/core';
import {TokenStorageService} from "../../service/token-storage.service";

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent {

  constructor(private token: TokenStorageService) { }

  ngOnInit(): void {
      this.token.signOut();
      window.location.reload();
  }

}
