import { Component } from '@angular/core';


import '../../style/app.scss';

@Component({
    selector: 'my-intro', // <my-app></my-app>
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.scss'],
})
export class IntroComponent {
    title: string = "Praveen's Portfolio";

    constructor() {
    }
}
