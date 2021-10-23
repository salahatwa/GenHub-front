import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ServiceWorkerModule } from "@angular/service-worker";
import { TransferHttpCacheModule } from "@nguniversal/common";
import { AdsenseModule } from "ng2-adsense";
import { NgProgressModule } from "ngx-progressbar";
import { NgProgressHttpModule } from "ngx-progressbar/http";
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { environment } from "../environments/environment";
import { AdminModule } from "./admin/admin.module";
import { DealService } from "./admin/manage/deals/shared/deal.service";
import { ManageModule } from "./admin/manage/manage.module";
import { UserService } from "./admin/manage/users/shared/user.service";
import { AppRoutingModule, routedComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthModule } from "./auth/login/auth.module";
import { BrowserStateInterceptor } from "./browserstate.interceptor";
import { CommanService } from "./shared/services/comman.service";
import { HighlightService } from "./shared/services/highlight.service";
import { LocalStorageService } from "./shared/services/local-storage.service";
import { SeoService } from "./shared/services/seo.service";

@NgModule({
  declarations: [
    ...routedComponents,
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    TransferHttpCacheModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    FormsModule,
    AdsenseModule.forRoot(),
    NgProgressModule,
    NgProgressHttpModule,
    NgxUiLoaderModule,
    HttpClientModule,
    ManageModule,
    AdminModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
    }),
  ],
  providers: [
    HighlightService,
    LocalStorageService,
    SeoService,
    CommanService,
    DealService,
    UserService,
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
