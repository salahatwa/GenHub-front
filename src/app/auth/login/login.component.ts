import { Component, OnDestroy, OnInit } from "@angular/core";
import {
  AbstractControl, FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "./user.service";


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit, OnDestroy {
  message: string;
  messageTimeout: number;
  loginForm: FormGroup;
  emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  error: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.initForm();
    this.checkLoginMessage();
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    return this.userService.attemptAuth(this.loginForm.value).subscribe(
      (token) => {
        this.router.navigate(['/admin/manage']);
      },
      (errors) => {
        this.error = errors;
      }
    );
  }

  checkLoginMessage() {
    this.route.queryParams.subscribe((params) => {
      this.message = params["message"] ? params["message"] : null;

      this.messageTimeout = window.setTimeout(() => {
        this.router.navigate([], {
          replaceUrl: true,
          queryParams: { message: null },
          queryParamsHandling: "merge",
        });

        this.message = "";
      }, 2000);
    });
  }

  ngOnDestroy() {
    this.messageTimeout && clearTimeout(this.messageTimeout);
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: [
        "",
        [
          Validators.required,
          Validators.pattern(this.emailPattern),
        ],
      ],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  get email(): AbstractControl {
    return this.loginForm.get("email");
  }
  get password(): AbstractControl {
    return this.loginForm.get("password");
  }

  get diagnostic(): string {
    return JSON.stringify(this.loginForm.value);
  }
}
