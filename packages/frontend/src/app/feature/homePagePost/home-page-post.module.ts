import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomePagePostController } from "./controller/home-page-post.controller";
import { MatIconModule } from "@angular/material/icon";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatPaginatorModule } from "@angular/material/paginator";
import { ChatTopicPostController } from "./controller/chat-topic-post.controller";
import { MatListModule } from "@angular/material/list";
import { HomePageMainPictureController } from "./controller/main-picture.controller";
import { TopToolMenuController } from "./controller/top-toolbar.controller";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { JobsHorizonalScrollController } from "./controller/jobs-horizonal-scroll.controller";
import { QuillModule } from "ngx-quill";
import { ArticlePostControllerComponent } from "./controller/article-post.controller";

@NgModule({
  declarations: [
    HomePagePostController,
    ChatTopicPostController,
    HomePageMainPictureController,
    TopToolMenuController,
    JobsHorizonalScrollController,
    ArticlePostControllerComponent,
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatPaginatorModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    QuillModule,
  ],
  exports: [
    HomePagePostController,
    ChatTopicPostController,
    HomePageMainPictureController,
    TopToolMenuController,
    JobsHorizonalScrollController,
    ArticlePostControllerComponent,
  ],
})
export class HomePagePostModule {
  static forChatTopic(): ModuleWithProviders<CommonModule> {
    return {
      ngModule: HomePagePostModule,
      providers: [],
    };
  }
}
