import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name: string = 'Heitor Casella';
  public age: number = 23;
  public isDisabled = true;
  public srcValue = 'https://avatars.githubusercontent.com/u/79364281?v=4';

  constructor()
  {
    setTimeout(() => {
      this.name = 'Legal!'
    }, 1000)
  }

  public sum()
  {
    return this.age++;
  }

  public sub()
  {
    return this.age--;
  }

  public onKeyDown(event: any)
  {
    return console.log(event);
  }

  public onMouseEvent(event: MouseEvent)
  {
    return console.log(event.clientX);
  }
}
