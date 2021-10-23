import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth-guard.service';
import { HttpTokenInterceptor } from './http.token.interceptor';
import { JwtService } from './jwt.service';
import { LoginComponent } from './login.component';
import { NoAuthGuard } from './no-auth-guard.service';
import { UserService } from './user.service';



@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    NoAuthGuard,
    AuthGuard,
    UserService,
    JwtService
  ]
})
export class AuthModule { }
