import { TerrainDetailsComponent } from './components/pages/terrain-details/terrain-details.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { ListTerrainsComponent } from './components/pages/list-terrains/list-terrains.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { ServicesDetailsComponent } from './components/pages/services-details/services-details.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { SignInComponent } from './components/pages/sign-in/sign-in.component';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';
import { TeamComponent } from './components/pages/team/team.component';
import { TermsConditionsComponent } from './components/pages/terms-conditions/terms-conditions.component';
import { TerrainComponent } from './components/pages/terrain/terrain.component';
import { TestimonialsComponent } from './components/pages/testimonials/testimonials.component';

const routes: Routes = [
    {path: '', component: HomeOneComponent},
    {path: 'home-two', component: HomeTwoComponent},
    {path: 'home-three', component: HomeThreeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'team', component: TeamComponent},
    {path: 'testimonials', component: TestimonialsComponent},
    {path: 'gallery', component: GalleryComponent},
    {path: 'faq', component: FaqComponent},
    {path: 'sign-in', component: SignInComponent},
    {path: 'sign-up', component: SignUpComponent},
    {path: 'privacy-policy', component: PrivacyPolicyComponent},
    {path: 'terms-conditions', component: TermsConditionsComponent},
    {path: 'coming-soon', component: ComingSoonComponent},
    {path: 'error', component: ErrorComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'services-details', component: ServicesDetailsComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog-details', component: BlogDetailsComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'terrain', component: TerrainComponent},
    {path: 'list-terrain', component: ListTerrainsComponent},
    {path: 'terrain/:id', component: TerrainDetailsComponent },
    
    // Here add new component
    
    {path: '**', component: ErrorComponent} // This line will remain down from the whole component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }