import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Category } from '../../models/models';

@Component({
  selector: 'app-category-list-dialog',
  templateUrl: './category-list-dialog.component.html',
  styleUrls: ['./category-list-dialog.component.scss']
})
export class CategoryListDialogComponent implements OnInit {

  @Input() selectedCategory: Category;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    console.log(this.selectedCategory);
  }

  onSelectParent(parentCategory: Category) {
    this.selectedCategory.parent = parentCategory;
  }

}
