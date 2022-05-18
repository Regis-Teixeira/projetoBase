import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  codigoRMA: number = 0;
  nome: string = '';
  nota1: number = 0;
  nota2: number = 0;
  nota3: number = 0;
  nota4: number = 0;
  media: number = 0;

  constructor() {
    this.media = this.nota1 + this.nota2 + this.nota3 + this.nota4 /4
   }

  ngOnInit(): void {
  }

}
