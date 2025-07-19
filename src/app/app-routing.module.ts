import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserTableComponent } from './components/user-table/user-table.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

const routes: Routes = [
  { path: '', component: UserTableComponent },
  { path: 'user/:id', component: UserDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]  // ✅ Make sure RouterModule is exported
})
export class AppRoutingModule { }
