import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ex5i';
  posts!: Post[];

    constructor() {
        this.getPosts().then((posts) => {
            this.posts = posts; 
            for brandAuto
        });
    }

    async getPosts() {
        let response = await fetch('../../assets/dbex5i.json');
        let data = await response.json();
        return data;
}

