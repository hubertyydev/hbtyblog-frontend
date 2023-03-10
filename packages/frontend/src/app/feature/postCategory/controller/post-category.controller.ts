import { Component, OnInit } from "@angular/core";
import { IPostCategoryList } from "src/app/core/models/view.types";

@Component({
  selector: "post-category-controller",
  template: `
    <mat-chip-listbox class="new-chip-list-wrapper">
      <mat-chip *ngFor="let category of postCategoryList">
        <mat-icon>{{ category.icon }}</mat-icon>
        {{ category.number }}
      </mat-chip>
    </mat-chip-listbox>
  `,
  styleUrls: [],
})
export class PostCategoryControllerComponent implements OnInit {
  postCategoryList: IPostCategoryList[];
  constructor() {
    this.postCategoryList = [];
  }

  ngOnInit() {
    this.postCategoryList = [
      {
        icon: "computer",
        number: 17,
        category: "technology",
      },
      {
        icon: "self_improvement",
        number: 2,
        category: "selfImprovement",
      },
      {
        icon: "sports_basketball",
        number: 24,
        category: "sport",
      },
      {
        icon: "sms",
        number: 24,
        category: "message",
      },
      {
        icon: "sms",
        number: 24,
        category: "message",
      },
      {
        icon: "sms",
        number: 24,
        category: "message",
      },
      {
        icon: "sms",
        number: 24,
        category: "message",
      },
      {
        icon: "sms",
        number: 24,
        category: "message",
      },
      {
        icon: "sms",
        number: 24,
        category: "message",
      },
      {
        icon: "sms",
        number: 24,
        category: "message",
      },
    ];
  }
}
