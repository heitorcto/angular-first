import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NewComponentComponent } from '../../new-component/new-component.component';

@Component({
  selector: 'app-template-variables',
  standalone: true,
  imports: [NewComponentComponent],
  templateUrl: './template-variables.component.html',
  styleUrl: './template-variables.component.scss',
})
export class TemplateVariablesComponent implements AfterViewInit {
  @ViewChild('name') public nameInput!: ElementRef;

  @ViewChild(NewComponentComponent) public childComponent!: NewComponentComponent;

  ngAfterViewInit(): void {
    console.log(this.nameInput.nativeElement.value);
    console.log(this.childComponent.name);
  }
}
