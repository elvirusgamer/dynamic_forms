import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1 } from './pages/component1/component1.component';
import { Component2 } from './pages/component2/component2.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';

export const routes: Routes = [
    { path: "", component: DynamicFormComponent},
    { path: 'component1', component: Component1 },
    { path: 'component2', component: Component2 },
  // Otras rutas
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}