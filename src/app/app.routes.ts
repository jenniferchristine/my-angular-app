import { NgModule } from '@angular/core'; // importerar ngmodule från angulars bibliotek (definerar modul)
import { RouterModule, Routes } from '@angular/router'; // importerar routes för att konfiguera dem
import { HomeComponent } from './home/home.component'; // importerar komponent
import { NotFoundComponent } from './not-found/not-found.component';
import { ConvertComponent } from './convert/convert.component';
import { InfoComponent } from './info/info.component';

/* lista över routsen */
export const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "convert", component: ConvertComponent },
    { path: "info", component: InfoComponent },
    { path: "", redirectTo: '/home', pathMatch: 'full' },
    { path: "404", component: NotFoundComponent }, 
    { path: "**", component: NotFoundComponent } // vid ingen match så omdiriges till NotFound
];

@NgModule({
    imports: [RouterModule.forRoot(routes)], // definerade routes
    exports: [RouterModule] // gör denna tillgänglig för andra
})
export class AppRoutingModule { } // exporterar modulen
