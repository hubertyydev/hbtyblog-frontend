import { Component, NgZone, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/core/services/fireAuth/auth";

@Component({
  template: ` <!-- container section height 90vh, width responsive 100vw or 88vw  -->
    <div class="responsive-post-section">
      <mat-grid-list
        [attrGridCols]="{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }"
        rowHeight="10vh">
        <mat-grid-tile
          [attrGridColSpan]="{
            xs: {
              colspan: 1,
              rowspan: 5
            },
            sm: {
              colspan: 1,
              rowspan: 5
            },
            md: {
              colspan: 1,
              rowspan: 5
            },
            lg: {
              colspan: 1,
              rowspan: 5
            },
            xl: {
              colspan: 1,
              rowspan: 5
            }
          }">
          <email-login-controller></email-login-controller>
        </mat-grid-tile>
        <mat-grid-tile
          [attrGridColSpan]="{
            xs: {
              colspan: 1,
              rowspan: 2
            },
            sm: {
              colspan: 1,
              rowspan: 2
            },
            md: {
              colspan: 1,
              rowspan: 2
            },
            lg: {
              colspan: 1,
              rowspan: 2
            },
            xl: {
              colspan: 1,
              rowspan: 2
            }
          }">
          <oauth-login-controller></oauth-login-controller>
        </mat-grid-tile>
        <mat-grid-tile
          [attrGridColSpan]="{
            xs: {
              colspan: 1,
              rowspan: 1
            },
            sm: {
              colspan: 1,
              rowspan: 1
            },
            md: {
              colspan: 1,
              rowspan: 2
            },
            lg: {
              colspan: 1,
              rowspan: 2
            },
            xl: {
              colspan: 1,
              rowspan: 2
            }
          }">
          <h3>
            No account?
            <a
              mat-tab-link
              routerLink="../signup">
              Register</a
            >
          </h3>
        </mat-grid-tile>
      </mat-grid-list>
    </div>`,
  styleUrls: ["../auth.style.css"],
})
export class LoginView implements OnInit, OnDestroy {
  authSubscription: Subscription = new Subscription();
  constructor(
    private authService: AuthService,
    private _router: Router,
    private zone: NgZone
  ) {}
  ngOnInit(): void {
    this.authSubscription = this.authService.userAuthObserver$.subscribe(
      (user) => {
        if (user) {
          this.zone.run(() => {
            this._router.navigate(["account", "me"]);
          });
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }
}
