import {Component} from 'angular2/core';
import {CardComponent} from "../card/card.component";

@Component({
    selector: 'about',
    moduleId: module.id,
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    directives: [CardComponent]
})
export class AboutComponent {
}