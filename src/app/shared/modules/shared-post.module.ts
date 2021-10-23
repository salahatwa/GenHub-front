import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { LazyLoadImageModule } from "ng-lazyload-image";

@NgModule({
  declarations: [
  ],
  exports: [],
  imports: [CommonModule, RouterModule, LazyLoadImageModule],
})
export class SharedPostModule {}
