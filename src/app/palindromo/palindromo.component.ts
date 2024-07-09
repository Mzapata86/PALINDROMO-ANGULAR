import { Component } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-palindromo',
  standalone: true,
  imports: [MaterialModule,FormsModule],
  templateUrl: './palindromo.component.html',
  styleUrl: './palindromo.component.scss'
})
export class PalindromoComponent {
  inputText: string = '';
  isPalindromo: boolean | null = null;

  checkPalindromo() {
    const cleanedText = this.inputText.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedText = cleanedText.split('').reverse().join('');
    this.isPalindromo = cleanedText === reversedText && cleanedText.length > 0;
    setTimeout(() => {
      this.inputText = '';
      this.isPalindromo = null;
    
    }, 3000);
  }
}

