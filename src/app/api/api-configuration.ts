/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration for Api services
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string =
    'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch';
}

export interface ApiConfigurationInterface {
  rootUrl?: string;
}
