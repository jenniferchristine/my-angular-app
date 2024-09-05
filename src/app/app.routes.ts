import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ConvertComponent } from './convert/convert.component';
import { InfoComponent } from './info/info.component';

export const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "convert", component: ConvertComponent },
    { path: "info", component: InfoComponent },
    { path: "", redirectTo: '/home', pathMatch: 'full' },
    { path: "404", component: NotFoundComponent }, 
    { path: "**", component: NotFoundComponent }
];
