import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  
  fetchData() {
    return fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
    .then(response => response.json())
    .then(result => result.data);
  }

}