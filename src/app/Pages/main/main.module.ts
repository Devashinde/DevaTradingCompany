import { NgModule } from "@angular/core";
import { UserInfoComponent } from "../user-info/user-info.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "src/app/app-routing.module";
import { AppComponent } from "src/app/app.component";
import { SideNavBarComponent } from "../SideBar/side-nav-bar/side-nav-bar.component";
import { TopNavBarComponent } from "../SideBar/top-nav-bar/top-nav-bar.component";
import { MainComponent } from "./main.component";
import { MainRoutingModule } from "./main-routing.module";

@NgModule({
  declarations: [
    UserInfoComponent,
    // SideNavBarComponent,
    // TopNavBarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MainRoutingModule
     
  ],
})
export class MainModule { }
