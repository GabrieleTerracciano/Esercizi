import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ex3';
  data: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('assets/db ex3.json').subscribe(data => {
      this.data = data;
      console.log(this.data);
    });
  }
}