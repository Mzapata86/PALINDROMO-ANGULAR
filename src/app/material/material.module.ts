import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from "../app.component";
import { PalindromoComponent } from "../palindromo/palindromo.component";


@NgModule({
    declarations: [

    ],
    imports: [
      CommonModule,
      MatCardModule,
      MatButtonModule,
    
    ],
    exports: [
      CommonModule,
      MatCardModule,
      MatButtonModule
  
    ]
  })
  export class MaterialModule { }