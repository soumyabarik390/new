import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule} from 'angular-datatables';
import { ApplicantsComponent } from './applicants.component';
@NgModule({
  declarations: [
    ApplicantsComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule 
  ],
  providers: [],
  bootstrap: [ApplicantsComponent]
})
export class AppModule { }
