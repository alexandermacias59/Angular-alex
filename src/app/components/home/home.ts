// import { Component, inject } from '@angular/core';
// import { DataService } from '../../services/data-service';
// @Component({
//   selector: 'app-home',
//   imports: [],
//   templateUrl: './home.html',
//   styleUrl: './home.scss',
// })
// export class Home {

//   yugiDataService = inject(DataService);

//   cards : any[] = [];

//   constructor() {
//     this.yugiDataService.fetchData()
//     .then(data => {
//       console.log(data[0]);
//       this.cards = data;
//     });
//   }

// }
import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { DataService } from '../../services/data-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  yugiDataService = inject(DataService);
  cdr = inject(ChangeDetectorRef);

  cards: any[] = [];

  constructor() {
    this.yugiDataService.fetchData()
      .then(data => {
        console.log('ARRIVATI', data.length);
        this.cards = data;
        this.cdr.detectChanges(); // <-- QUESTO fa aggiornare il DOM
      })
      .catch(err => console.error(err));
  }
}
