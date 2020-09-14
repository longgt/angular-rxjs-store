import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { TodoComponent } from './shared/components/todo/todo.component';
import { TodosService } from './shared/services/todos.service';

@NgModule({
  imports:      [ BrowserModule, HttpClientModule],
  declarations: [ AppComponent, TodoComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ TodosService ]
})
export class AppModule { }
