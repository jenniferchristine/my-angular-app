import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ger tillgång till ngmodel för tvåvägs databindning i formulär

@Component({
  selector: 'app-convert',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './convert.component.html',
  styleUrl: './convert.component.scss'
})

export class ConvertComponent {
  value: number | null = null; // håller värdet som ska konverteras
  fromUnit: string = "meter"; // variabel för enhet
  toUnit: string = "feet";
  convertedValue: string = ""; // lagrar resultat

  /* metod för konvertering baserad på enheter och värde */
  convert() {
    if (this.value === null) return; // avbryter om värdet är noll
    let result: number; // lagra resultat

    if (this.fromUnit === "meter" && this.toUnit === "feet") {
      result = this.value * 3.28084; // konverterar till fot
    } else if (this.fromUnit === 'feet' && this.toUnit === 'meter') {
      result = this.value / 3.28084; // konverterar till meter
    } else if (this.fromUnit === 'celsius' && this.toUnit === 'fahrenheit') {
      result = (this.value * 9/5) + 32; // konverterar till fahrenheit
    } else if (this.fromUnit === 'fahrenheit' && this.toUnit === 'celsius') {
      result = (this.value - 32) * 5/9; // konverterar till celsius
    } else {
      result = this.value;
    }

    this.convertedValue = `${result} ${ this.toUnit}`;
  }

  ngOnChanges() { // metod som anropas när datakomponent ändrats
    this.convert(); // uppdaterar konverteringen
  }
}
