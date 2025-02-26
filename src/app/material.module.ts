import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatSlideToggle } from "@angular/material/slide-toggle";
import { MatSliderModule } from "@angular/material/slider";
import { MatTableModule } from "@angular/material/table";




const MATERIAL = [MatButtonModule,MatIconModule,MatSliderModule,
    MatSlideToggle,MatFormFieldModule,MatRadioModule,MatInputModule,MatTableModule];

@NgModule({
    imports:MATERIAL,
    exports: MATERIAL
})

export class MaterialModule{}