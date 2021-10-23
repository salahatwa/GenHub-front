import { Component, OnInit } from '@angular/core';
import { CategoryControllerService } from 'src/app/shared/services/categoryController.service';

@Component({
  selector: 'app-category-tree-view',
  templateUrl: './category-tree-view.component.html',
  styleUrls: ['./category-tree-view.component.scss']
})
export class CategoryTreeViewComponent implements OnInit {

  response: []=[];

  constructor(private categoryService: CategoryControllerService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategoriesList().subscribe(data => {
      this.response = data.map(category => ({ id: category.id, pid: (category.parent) ? category.parent?.id : null, name: category.name }));
    });
  }

}
