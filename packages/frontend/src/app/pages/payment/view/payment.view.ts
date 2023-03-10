import { Component } from "@angular/core";
import { IPostList } from "src/app/core/models/view.types";
import { postList } from "src/app/core/static/post.static";

@Component({
  selector: "post-view",
  template: ` <div>payment</div> `,
  styleUrls: ["./payment.view.css"],
})
export class PaymentViewComponent {
  postList: IPostList[];

  constructor() {
    this.postList = postList;
  }
}
