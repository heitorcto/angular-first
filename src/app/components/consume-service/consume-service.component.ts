import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { concatMap } from 'rxjs';

@Component({
  selector: 'app-consume-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consume-service.component.html',
  styleUrl: './consume-service.component.scss',
})
export class ConsumeServiceComponent implements OnInit {
  #apiService = inject(ApiService);

  public getListTask = this.#apiService.getListTask;
  public getTaskid = this.#apiService.getTaskid;
  public getTaskIdError = this.#apiService.getTaskIdError;
  public getTaskCreateError = this.#apiService.getTaskCreateError;

  ngOnInit(): void {
    this.#apiService.httpListTask$().subscribe();
    this.#apiService.httpTaskId$('SE8XdbntnjRQySUBk6Vl').subscribe();
  }

  public httpTaskCreate(title: string) {
    return this.#apiService
      .httpTaskCreate$(title)
      .pipe(concatMap(() => this.#apiService.httpListTask$()))
      .subscribe();
  }

  public httpTaskUpdate(title: string, id: string) {
    return this.#apiService
      .httpTaskUpdate$(title, id)
      .pipe(concatMap(() => this.#apiService.httpListTask$()))
      .subscribe();
  }

  public httpTaskDelete(id: string) {
    return this.#apiService
      .httpTaskDelete$(id)
      .pipe(concatMap(() => this.#apiService.httpListTask$()))
      .subscribe();
  }
}
