import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { DateButtonSliderComponent } from './date-button-slider/date-button-slider';
import { SquareButtonComponent } from './square-button/square-button';

@NgModule({
	declarations: [
        DateButtonSliderComponent,
        SquareButtonComponent
    ],
	imports: [
        IonicModule.forRoot(DateButtonSliderComponent),
        IonicModule.forRoot(SquareButtonComponent)
    ],
	exports: [
        DateButtonSliderComponent,
        SquareButtonComponent
    ]
})
export class ComponentsModule {}
