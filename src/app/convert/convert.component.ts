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

  /* tillgängliga för konvertering */
  units = {
    length: ["meter", "foot"],
    temperature: ["celsius", "fahrenheit"]
  };

  availableToUnits: string[] = this.units.length; // initialt tillgängliga enheter för konvertering

  /* metod för konvertering baserad på enheter och värde */
  convert() {
    if (this.value === null) {
      this.convertedValue = "Ange ett värde"; // felmeddelande
      return;
    }
  
    let result: number = 0; // initialt värde
  
    // Utför konvertering baserat på enhetsval
    if (this.fromUnit === "meter" && this.toUnit === "feet") {
      result = this.value * 3.28084; // konvertera till fot
    } else if (this.fromUnit === 'feet' && this.toUnit === 'meter') {
      result = this.value / 3.28084; // konvertera till meter
    } else if (this.fromUnit === 'celsius' && this.toUnit === 'fahrenheit') {
      result = (this.value * 9 / 5) + 32; // konvertera till fahrenheit
    } else if (this.fromUnit === 'fahrenheit' && this.toUnit === 'celsius') {
      result = (this.value - 32) * 5 / 9; // konvertera till celsius
    } else {
      this.convertedValue = "Du kan endast konvertera längdenheter och temperaturer för sig"; // felmeddelande för ogiltig konvertering
      return;
    }
  
    this.convertedValue = `${result} ${this.toUnit}`; // visa det konverterade resultatet
  }

  /* metod som anropas när fromUnit ändras */
  updateAvailableToUnits() {
    if (this.fromUnit === "meter" || this.fromUnit === "feet") {
      this.availableToUnits = this.units.length; // bara längdenheter
      if (!this.availableToUnits.includes(this.toUnit)) {
        this.toUnit = this.availableToUnits[0]; // återställ till första tillgängliga enhet
      }
    } else if (this.fromUnit === "celsius" || this.fromUnit === "fahrenheit") {
      this.availableToUnits = this.units.temperature; // bara temperaturenheter
      if (!this.availableToUnits.includes(this.toUnit)) {
        this.toUnit = this.availableToUnits[0];
      }
    }
    this.convert(); // uppdatera konverteringen när enheter ändras
  }

  ngOnChanges() { // metod som anropas när datakomponent ändrats
    this.convert(); // uppdaterar konverteringen
  }
}
