
import { RouterModule, Routes } from '@angular/router';
import { Component1 } from './pages/component1/component1.component';
import { Component2 } from './pages/component2/component2.component';

export const routes: Routes = [
    { path: '', redirectTo: 'component1', pathMatch: 'full' },  // Ruta raíz
    { path: 'component1', component: Component1 },
    { path: 'component2', component: Component2 },
];