import { Component, Input, OnChanges } from '@angular/core';
import get from 'lodash-es/get';
import isString from 'lodash-es/isString';

@Component({
    selector: 'lib-utask-error-message',
    template: `
        <div class="alert alert-danger" role="alert">{{text}}</div>
    `,
})
export class ErrorMessageComponent implements OnChanges {
    @Input()
    data: any;
    text = '';

    constructor() { }

    ngOnChanges() {
        if (isString(this.data)) {
            this.text = this.data;
        } else {
            this.text = get(this.data, 'error.error', (get(this.data, 'error', 'An error just occured, please retry')));
        }
    }
}