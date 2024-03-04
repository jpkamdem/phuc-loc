import { Routes } from '@angular/router';
import { CarteComponent } from './views/carte/carte.component';
import { InfosComponent } from './views/infos/infos.component';
import { PanierComponent } from './views/panier/panier.component';
import { AccueilComponent } from './views/accueil/accueil.component';

export const routes: Routes = [
    {path: 'carte', component: CarteComponent},
    {path: 'infos', component: InfosComponent},
    {path: 'panier' , component: PanierComponent},
    {path: 'accueil', component: AccueilComponent}
];
