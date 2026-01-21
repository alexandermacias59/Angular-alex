import { Component, inject, signal, WritableSignal } from '@angular/core';
import { DataService } from '../../services/data-service';
import { Card } from "../card/card";
@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  imports: [Card],
})
export class Home {
  private yugiDataService = inject(DataService);

  // stato "reactive"
  cards: WritableSignal<any[]> = signal([]);

  // (facoltativo) stato loading / error
  loading = signal(true);
  error = signal<string | null>(null);

  constructor() {
    this.yugiDataService.fetchData()
      .then((data) => {
        this.cards.set(data);
        this.loading.set(false);
      })
      .catch((err) => {
        console.error(err);
        this.error.set('Errore nel caricamento dei dati');
        this.loading.set(false);
      });
  }
}
