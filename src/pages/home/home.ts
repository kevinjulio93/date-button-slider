import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    segment: string;

    constructor() {
        this.segment = moment().format('YYYY-MM-DD');
    }

}
