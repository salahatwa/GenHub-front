import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/login/auth-guard.service";
import { AdminComponent } from "./admin.component";
import { MediaService } from "./shared/media.service";


const routes: Routes = [
  {
    path: "admin",
    component: AdminComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: "manage",
        loadChildren: () =>
          import("./manage/manage.module").then((m) => m.ManageModule),
      },
    ],
  },
];

@NgModule({
  declarations: [AdminComponent],
  providers: [MediaService],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
})
export class AdminModule { }
