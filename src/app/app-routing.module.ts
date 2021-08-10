import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { StudentComponent } from './student/student.component';
import { UserComponent } from './user/user.component';

// Arreglo para las rutas
const routes: Routes = [
  { path: 'client', component: ClientComponent },
  { path: 'user', component: UserComponent },
  { path: 'student', component: StudentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
