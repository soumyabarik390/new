import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { CareerComponent } from 'src/app/components/career/career.component';
import { ApplicantsComponent } from 'src/app/components/applicants/applicants.component';
import { FreelancerComponent } from 'src/app/components/freelancer/freelancer.component';
import { HomepageComponent } from 'src/app/components/homepage/homepage.component';
import { AboutPageComponent } from 'src/app/components/about-page/about-page.component';
import { ServicePageComponent } from 'src/app/components/service-page/service-page.component';
import { ClientPageComponent } from 'src/app/components/client-page/client-page.component';
import { BlankPageComponent } from 'src/app/components/blank-page/blank-page.component';
import { InvestorPageComponent } from 'src/app/components/investor-page/investor-page.component';
import { PortfolioPageComponent } from 'src/app/components/portfolio-page/portfolio-page.component';
import { PrivacyPageComponent } from 'src/app/components/privacy-page/privacy-page.component';
import { TeamPageComponent } from 'src/app/components/team-page/team-page.component';
import { AllProjectComponent } from 'src/app/components/all-project/all-project.component';
import { AllBlogComponent } from 'src/app/components/all-blog/all-blog.component';
import { NewBlogComponent } from 'src/app/components/new-blog/new-blog.component';
import { BlogCategoryComponent } from 'src/app/components/blog-category/blog-category.component';
import { FinancialTeamComponent } from 'src/app/components/financial-team/financial-team.component';
import { TechnicalTeamComponent } from 'src/app/components/technical-team/technical-team.component';
import { HrTeamComponent } from 'src/app/components/hr-team/hr-team.component';
import { BusinessTeamComponent } from 'src/app/components/business-team/business-team.component';
import { ProfileComponent } from '../profile/profile.component';
import { AllClientsComponent } from 'src/app/components/all-clients/all-clients.component';
import { FreelancerProfileComponent } from 'src/app/components/freelancer-profile/freelancer-profile.component';
const routes: Routes = [

  { path: '',
    children:[
      { path: 'dashboard',component: DashboardComponent },
      { path: 'profile', component:ProfileComponent},
      { path: 'website/homepage', component: HomepageComponent},
      { path: 'website/aboutpage', component:AboutPageComponent},
      { path: 'website/clientpage', component:ClientPageComponent},
      { path: 'website/servicepage',component:ServicePageComponent},
      { path: 'website/blankpage', component:BlankPageComponent},
      { path: 'website/investorpage', component:InvestorPageComponent},
      { path: 'website/portfoliopage', component:PortfolioPageComponent},
      { path: 'website/privacypage', component:PrivacyPageComponent},
      { path: 'website/teampage', component: TeamPageComponent},
      { path: 'blog/all', component:AllBlogComponent},
      { path: 'blog/new', component:NewBlogComponent},
      { path: 'blog/category', component:BlogCategoryComponent},
      { path: 'career/job-details', component:CareerComponent},
      { path: 'career/applicant-details', component:ApplicantsComponent},
      { path: 'team/freelancer', component:FreelancerComponent},
      { path: 'team/freelancer/profile', component:FreelancerProfileComponent},
      { path: 'team/technical', component:TechnicalTeamComponent},
      { path:'team/financial', component:FinancialTeamComponent},
      { path: 'team/business', component:BusinessTeamComponent},
      { path: 'team/hr', component:HrTeamComponent},
      { path: 'client/all', component:AllClientsComponent},
      { path: 'project/all', component:AllProjectComponent}
    ]      
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }