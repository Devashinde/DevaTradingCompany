import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserInfoComponent } from './Pages/user-info/user-info.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SideNavBarComponent } from './Pages/SideBar/side-nav-bar/side-nav-bar.component';
import { TopNavBarComponent } from './Pages/SideBar/top-nav-bar/top-nav-bar.component';
import { MainComponent } from './Pages/main/main.component';
import { MainModule } from './Pages/main/main.module';
import { MainRoutingModule } from './Pages/main/main-routing.module';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { UserComponent } from './Pages/user/user.component';
import { AdminComponent } from './Pages/admin/admin.component';
//import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
        SideNavBarComponent,
    TopNavBarComponent,
    DashboardComponent,
    AboutUsComponent,
    UserComponent,
    AdminComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MainModule,
//    NgChartsModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
