import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomPaginationComponent } from './components/custom-pagination/custom-pagination.component';
import { CustomPaginationService } from './services/custom-pagination.service';

@NgModule({
  declarations: [CustomPaginationComponent],
  imports: [
    CommonModule,
    // BrowserModule,
    RouterModule
  ],
  exports: [
    CustomPaginationComponent
  ],
  providers: [
    CustomPaginationService
  ]
})
export class PaginationModule { }
