import { Component } from '@angular/core';
import { TesteComponent } from '../teste/teste.component';

@Component({
  selector: 'app-new-component',
  standalone: true,
  imports: [TesteComponent],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.scss'
})
export class NewComponentComponent {
  public name = 'Heitor Casella New Component';
}
