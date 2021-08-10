import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ClientComponent } from './client/client.component';
import { StudentComponent } from './student/student.component';
import { HttpClientModule } from '@angular/common/http';


// Permite interactuar la vista con el componente y el modelo
import { FormsModule } from '@angular/forms';


// Decorador
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ClientComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
