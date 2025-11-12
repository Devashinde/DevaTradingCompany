import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInfoComponent } from '../user-info/user-info.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { DashboardComponent } from '../dashboard/dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' }, // default route

  // Admin Section
 { path: 'dashboard', component: DashboardComponent },
//   { path: 'settings', component: SettingsComponent },

  // User Section
  { path: 'users', component: UserInfoComponent },

 // About Us Section
 { path: 'about-company', component: AboutUsComponent },
//{ path: 'contact-us', component: ContactUsComponent },

  // Wildcard route
  { path: '**', redirectTo: 'users' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
