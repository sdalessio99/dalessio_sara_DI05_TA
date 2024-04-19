import { TablePipePipe } from '../pipes/table-pipe.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablasComponent } from "./tablas/tablas.component"
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [TablasComponent, TablePipePipe],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    TablasComponent
  ]
})
export class ComponentsModule { }