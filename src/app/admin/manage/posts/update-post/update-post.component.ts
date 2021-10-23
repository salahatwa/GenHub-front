import { Component, OnInit, TemplateRef } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { CategoryService } from "src/app/shared/services/category.service";
import { PostService } from "src/app/shared/services/post.service";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { MediaService } from "../../../shared/media.service";
declare var tinymce: any;

@Component({
  selector: "app-update-post",
  templateUrl: "./update-post.component.html",
  styleUrls: ["./update-post.component.scss"],
})
export class UpdatePostComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private categoryService: CategoryService,
    private mediaService: MediaService,
    private modalService: BsModalService
  ) {}
  newPost: any = {
    featureImage: {
      _id: "",
    },
    categories: [],
    tags: [],
  };
  post: any;
  tinyConfig: any = {
    height: 500,
    plugins: ["image imagetools codesample code link toc table"],
    imagetools_cors_hosts: ["res.cloudinary.com"],
    // imagetools_proxy: "proxy.php",
    menubar: "insert edit format table",
    toolbar:
      "undo redo | fontselect fontsizeselect formatselect | bold italic backcolor | \
      alignleft aligncenter alignright alignjustify | \
      bullist numlist outdent indent | link | forecolor backcolor removeformat | image | codesample | toc",
    image_list: [
      { title: "My image 1", value: "https://www.tinymce.com/my1.gif" },
      { title: "My image 2", value: "http://www.moxiecode.com/my2.gif" },
    ],
    default_link_target: "_blank",
    toolbar_sticky: true,
  };
  categoriesList: any = [];
  tagsList: any = [];
  postId: any;
  images: any = [];
  ngOnInit() {
    this.newPost.featureImage["_id"] = "";
    this.route.params.subscribe((params) => {
      this.postId = params["id"];
      this.getAllCateogry();
      this.getAllTags();
      this.getAllImages();
    });
  }

  updatePost(postForm: NgForm, data) {
    let reqData = JSON.parse(JSON.stringify(data));

    reqData.categories = reqData.categories.reduce(function (r, e) {
      r[e.name] = e.slug;
      return r;
    }, {});

    reqData.tags = reqData.tags.reduce(function (r, e) {
      r[e.name] = e.slug;
      return r;
    }, {});

    this.postService.updatePost(this.newPost._id, reqData).subscribe(
      (updatedPost) => {
        
        alert("Post Updated");
      },
      (error) => {
        alert("Update Error!");
      }
    );
  }

  attachImageToPost(postEvent: any) {
    delete this.newPost["featureImage"];
    this.newPost.featureImage = {};
    this.newPost["featureImage"]["_id"] = postEvent.data.featureImage;
  }

  private getAllCateogry() {
    this.categoryService.getAllCateogry().subscribe((data) => {
      this.categoriesList = data;
      this.postService.getPostById(this.postId).subscribe((post) => {
        this.newPost = post;
      });
      //this.newPost.category = this.categoriesList[0].name;
    });
  }

  private getAllTags() {
    this.categoryService.getAllTags().subscribe((response) => {
      this.tagsList = response["data"]["tags"];
    });
  }
  transformImage = (image: any): string => {
    return image.url;
  };

  private getAllImages() {
    this.mediaService.getImages().subscribe((response) => {
      this.images = response["data"]["images"];
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: "modal-lg" })
    );
  }
  selected: any;
  selecteImage(item) {
    this.selected = item;
  }
  isActive(item) {
    return this.selected === item;
  }
  addSelectedImage() {
    tinymce.activeEditor.execCommand(
      "mceInsertContent",
      false,
      `<p><img src="${this.selected.url}" alt=""/></p>`
    );
    this.modalRef.hide();
  }
}
