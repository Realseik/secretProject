import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'listaLanzamientos',
        loadChildren: './pages/lanzamientos/listaLanzamientos.module#ListaLanzamientosModule'
    },
    {
        path: 'lanzamiento/:id',
        loadChildren: './pages/lanzamiento/lanzamiento.module#LanzamientoModule'
      },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true })], // <-- debugging purposes only)
    exports: [RouterModule]
})
export class AppRoutingModule { }
