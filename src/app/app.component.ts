import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent } from './components/new-component/new-component.component';
import { TesteComponent } from './components/teste/teste.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
import { TemplateFlowComponent } from './components/template/template-flow/template-flow.component';
import { ConsumeServiceComponent } from './components/consume-service/consume-service.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ConsumeServiceComponent,
    TemplateFlowComponent,
    TemplateVariablesComponent,
    NewComponentComponent,
    TesteComponent,
    TemplateBindingComponent,
  ],
  template: `
    <h1>CURSO DE ANGULAR</h1>
    <app-consume-service />
    <hr>
    <app-template-flow />
    <app-template-variables />
    <h2>{{ title }}</h2>
    <app-new-component />
    <app-teste />
    <app-template-binding />
    <router-outlet />
  `,
})
export class AppComponent {
  title = 'primeiro-latest';
}
