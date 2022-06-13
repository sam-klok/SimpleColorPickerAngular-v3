import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {
  @Input() colorOptions: string[];
  @Input() initialColor: string;
  selectedColor : string;


  constructor() { }

  ngOnInit(): void {
    this.selectedColor = this.initialColor;

  }

  public onColorChangeClick(value: any) {

    if(value){
      this.selectedColor = value;
    }

    //console.log(value);
  }

}
