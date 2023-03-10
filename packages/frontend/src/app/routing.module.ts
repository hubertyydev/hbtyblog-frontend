import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "posts", pathMatch: "full" },
  {
    path: "posts",
    loadChildren: () =>
      import("./pages/post/post.module").then((module) => module.PostModule),
  },
  {
    path: "edit",
    loadChildren: () =>
      import("./pages/edit/edit.module").then((module) => module.EditModule),
  },
  {
    path: "search",
    loadChildren: () =>
      import("./pages/search/search.module").then(
        (module) => module.SearchModule
      ),
  },
  {
    path: "payment",
    loadChildren: () =>
      import("./pages/payment/payment.module").then(
        (module) => module.PaymentModule
      ),
  },
  {
    path: "account",
    loadChildren: () =>
      import("./pages/auth/auth.module").then((module) => module.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
