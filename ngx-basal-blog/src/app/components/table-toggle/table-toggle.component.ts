import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-toggle',
  templateUrl: './table-toggle.component.html',
  styleUrls: ['./table-toggle.component.css']
})

export class TableToggleComponent implements OnInit {
  tableHeader: Array<string>;
  dataSource: any;
  constructor() {
    this.tableHeader = ['position', 'name', 'weight', 'symbol', 'Action'];
    this.dataSource = ELEMENT_DATA;
  }
  watch(item){
    console.log(item);
    item.visible = !item.visible;
  }
  ngOnInit() {
  }

}


export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  visible: boolean;
}

const ELEMENT_DATA: Element[] = [
  { position: 0, name: 'cyan', weight: 1.0079, symbol: 'c', visible: false },
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', visible: false },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', visible: true },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', visible: true },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', visible: false },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', visible: true },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', visible: false },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', visible: false },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', visible: true },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', visible: true },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', visible: false },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na', visible: true },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg', visible: false },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al', visible: false },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si', visible: false },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P', visible: false },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S', visible: false },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl', visible: false },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar', visible: false },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K', visible: false },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca', visible: true  },
];
