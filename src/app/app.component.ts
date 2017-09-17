import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  lugares:any = [
  	{ active: false, nombre: 'Floreria Las Gardenias' },
  	{ active: true, nombre: 'Donas La Pasadita' },
  	{ active: true, nombre: 'Veterinaria Huellitas' },
  	{ active: true, nombre: 'Panaderia La Lucerna'},
  	{ active: true, nombre: 'Carnitas Mama Chuz' },
  	{ active: false, nombre: 'Panes el Chino' }
  ];

  constructor(){
  }

}
