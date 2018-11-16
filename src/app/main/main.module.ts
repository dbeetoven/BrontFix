import { RouterModule, Routes} from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SharedModule } from "./shared/shared.module";
import { MainComponent } from "./main.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";


const routes: Routes = [
  {
    path: "",
    loadChildren: "./core/core.module#CoreModule",
    pathMatch: "full"
  },
  { path: "detalle", loadChildren: "./layout/layout.module#LayoutModule" },
  {
    path: "cliente",
    loadChildren: "./customer/customer.module#CustomerModule"
  },
  { path: "login", loadChildren: "./security/security.module#SecurityModule" },
  {
    path: "error",
    loadChildren: "./not-found/not-found.module#NotFoundModule"
  },
  { path: "**", redirectTo: "not-found" }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  exports: [MainComponent],
  declarations: [MainComponent]
})
export class MainModule {}
