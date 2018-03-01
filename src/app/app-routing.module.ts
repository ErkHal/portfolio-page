import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { AboutComponent } from './about/about.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'about' },
  { path:'resume', component: ResumeComponent },
  { path:'about', component: AboutComponent },
  { path:'contact', component: ContactInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
