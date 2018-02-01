import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';

@Component({
    selector: 'date-button-slider',
    templateUrl: 'date-button-slider.html'
})

export class DateButtonSliderComponent {
    
    public test : string;
    @Input() days: number = 7;
    @Input() late: number = 0;
    @Input() selected: string;
    @Output() selectedChange: EventEmitter<string>;

    constructor() {
        this.selectedChange = new EventEmitter<string>();
        this.test = "";
    }

    get buttons(): Array<Moment> {
        let buttons = [];

        for (let i = 0; i < this.days; i++) {
            buttons.push(moment().add(i, 'days'));
        }

        return buttons;
    }

    selectButton(text: string) {
        console.log("Select " + text);
        this.selected = text;
        this.selectedChange.emit(text);
    }

}
