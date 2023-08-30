import { Component } from '@angular/core';
import { ApiService } from '../api/services/api.service';
import { Root2 } from '../interface/nutrition';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent {
  items: Root2[] | null = null;

  constructor(private apiService: ApiService) {}
  async ngOnInit(): Promise<void> {
    this.getRecipes();
  }

  getRecipes() {
    this.apiService.getRecipes().subscribe({
      next: (response) => {
        this.items = response.body.results;
        console.log(this.items);
      },
      error: (error) => {
        console.error('Erreur :', error);
      },
    });
  }
}
