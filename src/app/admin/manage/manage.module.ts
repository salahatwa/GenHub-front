import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { EditorModule } from "@tinymce/tinymce-angular";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from "ngx-bootstrap/modal";
import { TagInputModule } from "ngx-chips";
import { NgxPaginationModule } from "ngx-pagination";
import { UiSwitchModule } from "ngx-toggle-switch";
import { AlertModule } from "src/app/shared/modules/alert/alert.module";
import { CategoryListDialogComponent } from "src/app/shared/modules/category-list-dialog/category-list-dialog.component";
import { ConfirmDialogComponent } from "src/app/shared/modules/confirmation-dialog/confirm-dialog.component";
import { PaginationModule } from "src/app/shared/modules/paging-lib/pagination.module";
import { EditableModule } from "../../shared/modules/editable/editable.module";
import { ImageUploadModule } from "../../shared/modules/image-upload/image-upload.module";
import { CategoriesComponent } from "./categories/categories.component";
import { CategoryAddUpdateComponent } from "./categories/category-add-update/category-add-update.component";
import { CategoryResolver } from "./categories/category-add-update/category-resolver";
import { CategoryListingComponent } from "./categories/category-listing/category-listing.component";
import { AddDealComponent } from "./deals/add-deal/add-deal.component";
import { AllDealComponent } from "./deals/all-deal/all-deal.component";
import { UpdateDealComponent } from "./deals/update-deal/update-deal.component";
import { ManageComponent } from "./manage.component";
import { MediaComponent } from "./media/media.component";
import { AddPageComponent } from "./pages/add-page/add-page.component";
import { AllPageComponent } from "./pages/all-page/all-page.component";
import { UpdatePageComponent } from "./pages/update-page/update-page.component";
import { AddPostComponent } from "./posts/add-post/add-post.component";
import { AllPostsComponent } from "./posts/all-posts/all-posts.component";
import { UpdatePostComponent } from "./posts/update-post/update-post.component";
import { AddQuestionComponent } from "./questions/add-question/add-question.component";
import { AllQuestionComponent } from "./questions/all-question/all-question.component";
import { UpdateQuestionComponent } from "./questions/update-question/update-question.component";
import { AddSnippetComponent } from "./snippets/add-snippet/add-snippet.component";
import { AllSnippetComponent } from "./snippets/all-snippet/all-snippet.component";
import { UpdateSnippetComponent } from "./snippets/update-snippet/update-snippet.component";
import { CategoryTreeViewComponent } from './categories/category-tree-view/category-tree-view.component';
import { ConverterPipe } from "./categories/category-tree-view/converter.pipe";



const routes: Routes = [
  {
    path: "",
    component: ManageComponent,
    children: [
      {
        path: "snippets",
        component: AllSnippetComponent,
      },
      {
        path: "add-snippet",
        component: AddSnippetComponent,
      },
      {
        path: "update-snippet/:slug",
        component: UpdateSnippetComponent,
      },
      {
        path: "questions",
        component: AllQuestionComponent,
      },
      {
        path: "add-question",
        component: AddQuestionComponent,
      },
      {
        path: "update-question/:slug",
        component: UpdateQuestionComponent,
      },
      { path: "posts", component: AllPostsComponent },
      {
        path: "add-post",
        component: AddPostComponent,
      },
      {
        path: "update-post/:id",
        component: UpdatePostComponent,
      },
      {
        path: "media",
        component: MediaComponent,
      },
      {
        path: "pages",
        component: AllPageComponent,
      },
      {
        path: "add-page",
        component: AddPageComponent,
      },
      {
        path: "update-page/:id",
        component: UpdatePageComponent,
      },
      {
        path: "deals",
        component: AllDealComponent,
      },
      {
        path: "add-deal",
        component: AddDealComponent,
      },
      {
        path: "update-deal/:id",
        component: UpdateDealComponent,
      },
      {
        path: "categories",
        component: CategoriesComponent,
        children: [
          {
            path: "list",
            component: CategoryListingComponent
          },
          {
            path: "opt",
            component: CategoryAddUpdateComponent,
            resolve: { category: CategoryResolver }
          },
          {
            path: "tree",
            component: CategoryTreeViewComponent
          }
        ]
      },
    ],
  },
];

@NgModule({
  declarations: [
    ManageComponent,
    AddPostComponent,
    AllPostsComponent,
    UpdatePostComponent,
    MediaComponent,
    AllSnippetComponent,
    AddSnippetComponent,
    UpdateSnippetComponent,
    AllQuestionComponent,
    AddQuestionComponent,
    UpdateQuestionComponent,
    AddPageComponent,
    UpdatePageComponent,
    AllPageComponent,
    AllDealComponent,
    AddDealComponent,
    UpdateDealComponent,
    CategoriesComponent, CategoryAddUpdateComponent, CategoryListingComponent, ConfirmDialogComponent, CategoryListDialogComponent, CategoryTreeViewComponent,ConverterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ImageUploadModule,
    EditableModule,
    UiSwitchModule,
    EditorModule,
    TagInputModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forChild(routes),
    AlertModule,
    NgxPaginationModule,
    PaginationModule,
    NgbModalModule
  ],
})
export class ManageModule { }
