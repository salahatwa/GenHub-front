import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { finalize } from 'rxjs/operators';
import { Category, CategoryDto } from 'src/app/shared/models/models';
import { AlertType } from 'src/app/shared/modules/alert/alert.model';
import { AlertService } from 'src/app/shared/modules/alert/alert.service';
import { CategoryListDialogComponent } from 'src/app/shared/modules/category-list-dialog/category-list-dialog.component';
import { CategoryControllerService } from 'src/app/shared/services/categoryController.service';

@Component({
  selector: 'app-category-add-update',
  templateUrl: './category-add-update.component.html',
  styleUrls: ['./category-add-update.component.css']
})
export class CategoryAddUpdateComponent implements OnInit {
  loading: boolean = false;
  alert = { id: 'category-opt-alert', alertType: AlertType.ALINMA };

  category: Category = {};

  constructor(private alertService: AlertService, public categoryService: CategoryControllerService, private activatedRoute: ActivatedRoute, private modalService: NgbModal) { }



  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {

      if (data.category && data.category != null)
        this.category = data.category;

      this.resetForm();
    });

  }

  onSubmit(categoryForm: NgForm) {
    this.loading = true;
    if (categoryForm.value.id == null)
      this.categoryService.addCategory(this.category).pipe(finalize(() => {
        this.loading = false;
      })).subscribe(data => {
        this.alertService.success("Added Successfuly", this.alert);
      }, err => {
        this.alertService.error(err.message, this.alert);
      });

    else {
      // let category = categoryForm.value;
      this.categoryService.updateCategory(this.category, this.category?.id).pipe(finalize(() => {
        this.loading = false;
      })).subscribe(data => {
        this.alertService.success("Updated Successfuly", this.alert);
      }, err => {
        this.alertService.error(err.message, this.alert);
      });
    }

    this.resetForm(categoryForm);
  }

  resetForm(categoryForm?: NgForm) {
    if (categoryForm != null)
      categoryForm.reset();
    // this.categoryService.getValueBtn(1);
    // this.categoryService.selectedCategory = new Category();
  }


  selectParent() {
    const dialogRef = this.modalService.open(CategoryListDialogComponent);
    dialogRef.componentInstance.selectedCategory = this.category;

    dialogRef.result.then(result => {

      if (result) {
        console.log(result);
        this.category = result;
        // this.loading = true;
        // this.categoryService.updateCategory(result, result?.id).pipe(finalize(() => {
        //   this.loading = false;
        // })).subscribe(data => {
        //   // this.categoryList.splice(index, 1);
        //   this.alertService.success("Selected Parent Successfully", this.alert);
        // }, err => {
        //   this.alertService.success(err.message, this.alert);
        // });

      }
    }).catch((res) => {

    });
  }
}
