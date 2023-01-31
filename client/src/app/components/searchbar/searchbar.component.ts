import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, NonNullableFormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})

export class SearchbarComponent implements OnChanges{
  constructor() {}

  searchInput: string = '';
  testInputValue: string = '';

  isMouseOver: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if( changes['searchInput'] ) {
      // console.log('changes detected')
      // this.testInputValue = this.searchInput;
    }
  }

  updateInput(): void {
    this.testInputValue = this.searchInput;
  }
  test(): void {
    this.testInputValue = this.searchInput;
  }

  enter(): void {
    this.isMouseOver = true;
  }

  leave(): void {
    this.isMouseOver = false;
  }

  clear(): void {
    this.testInputValue = '';
    this.searchInput = '';
  }

}
