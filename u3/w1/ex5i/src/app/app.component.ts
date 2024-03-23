import { Component } from '@angular/core';
import { ModelJson } from 'src/models/model-json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ex5i';
  dati!: ModelJson[];

    constructor() {
        this.getPosts().then((dati) => {
            this.dati = dati; 
        });
    }

    async getPosts() {
        let response = await fetch('../../assets/dbex5i.json');
        let data = await response.json();
        return data;
}}
