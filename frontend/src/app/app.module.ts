import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule }    from '@angular/common/http';

import { MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule,MatTableModule, MatSortModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatPaginatorModule, MatDialogModule, MatCardModule} from '@angular/material';
import { ListDataComponent } from './list-data/list-data.component';
import { UploadDataComponent } from './upload-data/upload-data.component';
import {RecordDetailsComponent} from './record-details/record-details.component';
import { AppService } from './app.service';
import { FormsModule } from '@angular/forms';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    ListDataComponent,
    UploadDataComponent,
    RecordDetailsComponent,
    ConfirmDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatDialogModule,
    MatCardModule
  ],
  providers: [
    AppService
  ],
  entryComponents:[
    RecordDetailsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
