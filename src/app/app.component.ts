import { Component } from '@angular/core';
import { lorem } from 'faker';

// lorem.sentence();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomText = lorem.sentences();
  enteredText: string = '';

  onInput(value: string) {
    this.enteredText = value;
  }
  compare(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }
    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }
}
