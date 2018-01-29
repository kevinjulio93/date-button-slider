import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'square-button',
  templateUrl: 'square-button.html'
})
export class SquareButtonComponent {

    @Input() badge: string;
    @Input() selected: boolean;
    @Output() selectedChange: EventEmitter<boolean>;

    constructor() {
        this.selectedChange = new EventEmitter<boolean>();
    }

    toggle() {
        this.selected = !this.selected;
        this.selectedChange.emit(this.selected);
    }

}
