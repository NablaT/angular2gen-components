import {Component} from 'angular2/core';

@Component({
    selector: 'home',
    moduleId: module.id,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    public pathImage:string;

    constructor(){
        this.pathImage="../assets/picture.png";
    }
}