import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonComponent } from './pages/pokemon/list/list.component';
import { DetailPokemonComponent } from './pages/pokemon/detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: ListPokemonComponent
  },
  {
    path: ':id',
    component: DetailPokemonComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
