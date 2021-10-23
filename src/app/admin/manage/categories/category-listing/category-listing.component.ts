import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { finalize } from 'rxjs/operators';
import { AppConstants } from 'src/app/shared/helpers/constants';
import { UtilsService } from 'src/app/shared/helpers/utils.service';
import { Category } from 'src/app/shared/models/models';
import { AlertType } from 'src/app/shared/modules/alert/alert.model';
import { AlertService } from 'src/app/shared/modules/alert/alert.service';
import { ConfirmDialogComponent } from 'src/app/shared/modules/confirmation-dialog/confirm-dialog.component';
import { CategoryControllerService } from './../../../../shared/services/categoryController.service';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-listing.component.html',
  styleUrls: ['./category-listing.component.scss']
})
export class CategoryListingComponent implements OnInit, OnDestroy {

  alert = { id: 'category-list-alert', alertType: AlertType.ALINMA };
  loading: boolean;
  page = { id: 'category-list', itemsPerPage: AppConstants.PAGE_SIZE, currentPage: 1, totalItems: 0 };

  categoryList: Category[] = [];

  @Input() isDialog: boolean;

  @Input() set selectedCategory(selectedCategory: Category) {
    if (selectedCategory && selectedCategory.parent && selectedCategory?.parent.id)
      this.selectedParent = selectedCategory?.parent.id;
      console.log( this.selectedParent+":"+ selectedCategory?.parent?.name);
  }

  @Output() selectedParentCategory = new EventEmitter<Category>();

  selectedParent: number;

  constructor(private alertService: AlertService, private utilService: UtilsService, private modalService: NgbModal, private categoryService: CategoryControllerService) { }

  ngOnInit() {
    this.getPage(1);
  }

  ngOnDestroy() {
  }

  getPage(page: number) {
    this.loading = true;
    this.page.currentPage = page;
    this.categoryService.getAllCategories(this.utilService.getRequestParams(page, AppConstants.PAGE_SIZE)).pipe(finalize(() => {
      this.loading = false;
    })).subscribe(item => {
      console.log(item);
      this.categoryList = item?.content;
      this.page.totalItems = item?.totalElements;
    }, err => {

    });
  }


  onEdit(category: Category, index: number) {
    // this.categoryService.getValueBtn(2);
    // this.categoryService.selectedCategory = Object.assign({}, category);
    // this.categoryService.selectedCategory.index = index;
  }

  onDelete(category: Category, index: number) {

    const dialogRef = this.modalService.open(ConfirmDialogComponent);

    dialogRef.result.then(result => {

      if (result) {
        this.loading = true;
        this.categoryService.deleteCategory(category?.id).pipe(finalize(() => {
          this.loading = false;
        })).subscribe(data => {
          this.categoryList.splice(index, 1);
          this.alertService.success("Deleted Successfully", this.alert);
        }, err => {
          this.alertService.success(err.message, this.alert);
        });

      }
    }).catch((res) => {

    });
  }

  onSelectParent(event) {
    let cat = this.categoryList.filter(x => x.id == this.selectedParent)[0];
    this.selectedParentCategory.emit(cat);
  }

}
