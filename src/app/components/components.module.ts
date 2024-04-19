import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablasComponent } from "./tablas/tablas.component"
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [TablasComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    TablasComponent
  ]
})
export class ComponentsModule { }
