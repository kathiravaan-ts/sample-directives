import { CommonModule, NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, Input, input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgClass, NgStyle, FormsModule, NgIf, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  implements OnInit{

  @Input() messsage: string = "";
  isDanger: boolean = true;
  currentClasses : Record<string, boolean> = {};
  currentStyles : Record<string, string> = {};

  items: string[] = ['kathir','nivetha','athiyan']
  animals: string[] = ['dog','cat','lion'];
  selectedAnimal: string = "";
  constructor(){
  }

  ngOnInit(): void {
    this.setCurrentStyles();
    this.setCurrentClasses();
  }

  setUppercaseName(name: string) {
    this.messsage = name.toUpperCase();
  }
  setCurrentClasses(): void{
    this.currentClasses = {
      danger: this.isDanger,
      border: this.isDanger
    }
  }

  setCurrentStyles(): void {
    this.currentStyles = {
      'width': '200px',
      'height': '100px',
      'margin-top': '20px'
    }
  }

  addAnimalToListItems(e: any):void{
    this.animals.push(this.selectedAnimal);
    this.selectedAnimal = "";
  }

  trackByItems(index : number, item: string){
    return item;
  }
}
