import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convert',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './convert.component.html',
  styleUrl: './convert.component.scss'
})

export class ConvertComponent {
  value: number | null = null;
  fromUnit: string = "meter";
  toUnit: string = "feet";
  convertedValue: string = "";

  convert() {
    if (this.value === null) return;
    let result: number;

    if (this.fromUnit === "meter" && this.toUnit === "feet") {
      result = this.value * 3.28084;
    } else if (this.fromUnit === 'feet' && this.toUnit === 'meter') {
      result = this.value / 3.28084;
    } else if (this.fromUnit === 'celsius' && this.toUnit === 'fahrenheit') {
      result = (this.value * 9/5) + 32;
    } else if (this.fromUnit === 'fahrenheit' && this.toUnit === 'celsius') {
      result = (this.value - 32) * 5/9;
    } else {
      result = this.value;
    }

    this.convertedValue = `${result} ${ this.toUnit}`;
  }

  ngOnChanges() {
    this.convert();
  }
}
