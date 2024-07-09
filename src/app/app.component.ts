import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PalindromoComponent } from "./palindromo/palindromo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PalindromoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'palindromo-app';
}
