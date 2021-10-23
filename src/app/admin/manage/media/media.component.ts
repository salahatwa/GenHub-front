import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { finalize } from "rxjs/operators";
import { AppConstants } from "src/app/shared/helpers/constants";
import { UtilsService } from "src/app/shared/helpers/utils.service";
import { AttachmentDTO } from "src/app/shared/models/models";
import { AlertType } from "src/app/shared/modules/alert/alert.model";
import { AlertService } from "src/app/shared/modules/alert/alert.service";
import { ConfirmDialogComponent } from "src/app/shared/modules/confirmation-dialog/confirm-dialog.component";
import { AttachmentControllerService } from "src/app/shared/services/attachmentControlle.service";

@Component({
  selector: "app-media",
  templateUrl: "./media.component.html",
  styleUrls: ["./media.component.scss"],
})
export class MediaComponent implements OnInit {
  constructor(private attachmentService: AttachmentControllerService, private utilService: UtilsService,private modalService:NgbModal,private alertService:AlertService) { }

  images: AttachmentDTO[] = [];

  alert = { id: 'category-list-alert', alertType: AlertType.ALINMA };
  loading: boolean;
  page = { id: 'category-list', itemsPerPage: AppConstants.PAGE_SIZE, currentPage: 1, totalItems: 0 };

  ngOnInit() {
    this.getPage(1);
  }

  getPage(page) {
    this.loading = true;
    this.page.currentPage = page;
    this.attachmentService.pageBy(null, null, null, this.utilService.getRequestParams(page, AppConstants.PAGE_SIZE))
      .pipe(finalize(() => {
        this.loading = false;
      })).subscribe(item => {
        console.log(item);
        this.images = item?.content;
        this.page.totalItems = item?.totalElements;
      }, err => {

      });
  }


  deleteImage(id,index) {
    const dialogRef = this.modalService.open(ConfirmDialogComponent);

    dialogRef.result.then(result => {

      if (result) {
        this.loading = true;
        this.attachmentService.deletePermanently(id).pipe(finalize(() => {
          this.loading = false;
        })).subscribe(data => {
          this.images.splice(index, 1);
          this.alertService.success("Deleted Successfully", this.alert);
        }, err => {
          this.alertService.success(err.message, this.alert);
        });

      }
    }).catch((res) => {

    });

  }

  attachImageToPost(event) {
    console.log(event)
  }
}
