import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.scss',
})
export class ServicosComponent implements OnInit {
  #route = inject(ActivatedRoute);

  public getId = signal<string | null>(null);

  @Input() set id(id: string) {
    this.getId.set(id);
  }

  ngOnInit(): void {
    console.log(this.#route.snapshot.params['id']);
    this.#route.params.subscribe((res) => {
      console.log(res['id']);
    });
  }
}
