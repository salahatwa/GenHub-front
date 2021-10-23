import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { UserService } from "./auth/login/user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(private userService: UserService,public router : Router) {
    this.userService.populate();
  }

  ngOnInit() {   
    
    // if(this.auth.checkAuthentication()){
    //   this.router.navigate(['/admin/manage']);
    // }else{
    //   this.router.navigate(['/login']);
    // }
  }

  title = "nodeblog";
}
