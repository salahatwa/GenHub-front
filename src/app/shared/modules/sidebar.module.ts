import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LazyLoadImageModule } from "ng-lazyload-image";

@NgModule({
  declarations: [
  ],
  exports: [
  ],
  imports: [CommonModule, RouterModule, LazyLoadImageModule],
})
export class SidebarModule { }
