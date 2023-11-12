import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardEditorComponent } from './card-editor/card-editor.component';
import { CardViewerComponent } from './card-viewer/card-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    CardEditorComponent,
    CardViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
