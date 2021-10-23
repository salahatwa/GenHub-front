import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../auth/login/user.service";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"],
})
export class AdminComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void { }

  logout() {
    this.userService.logout();
  }
}
