import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizCardComponent } from '../quiz-card/quiz-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, QuizCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}
