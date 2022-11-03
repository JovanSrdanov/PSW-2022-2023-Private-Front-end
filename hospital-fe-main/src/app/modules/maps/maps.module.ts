import { NgModule, Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditItemComponent } from './containers/edit-item/edit-item.component';
import { MapItemInformationComponent } from './components/map-item-information/map-item-information.component';
import { MapsRoutingModule } from './maps-routing.module';
import { MaterialModule } from './../../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BuildingsComponent } from './mapDisplay/buildings/buildings.component';
import { FloorsComponent } from './mapDisplay/floors/floors.component';
import { RoomsComponent } from './mapDisplay/rooms/rooms.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    EditItemComponent,
    MapItemInformationComponent,
    BuildingsComponent,
    RoomsComponent,
    FloorsComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule

  ]
})
export class MapsModule { }
