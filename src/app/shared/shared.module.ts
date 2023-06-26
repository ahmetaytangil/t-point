import { NgModule } from '@angular/core';
import { ComponentsModule } from "./components/components.module";
import { MaterialModule } from "./material/material.module";
import { PipesModule } from "./pipes/pipes.module";
import { TemplatesModule } from "./templates/templates.module";
@NgModule({
    declarations: [
    ],
    exports     : [
      TemplatesModule,
      PipesModule,
      ComponentsModule,
      MaterialModule
    ],
    imports     : [
        TemplatesModule,
        PipesModule,
        ComponentsModule,
        MaterialModule
    ]
})
export class SharedModule { }
