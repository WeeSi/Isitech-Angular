/* tslint:disable */
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpResponse,
  HttpHeaders,
} from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';
import { Root, Root2 } from '../../interface/nutrition';

@Injectable({
  providedIn: 'root',
})
class ApiService extends __BaseService {
  static readonly getPath = '/';

  constructor(config: __Configuration, http: HttpClient) {
    super(config, http);
  }
  getRecipes(): __Observable<__StrictHttpResponse<Root>> {
    let __params = this.newParams()
      .set('query', 'pasta')
      .set('cuisine', 'italian')
      .set('excludeCuisine', 'greek')
      .set('diet', 'vegetarian')
      .set('intolerances', 'gluten')
      .set('equipment', 'pan')
      .set('includeIngredients', 'tomato,cheese')
      .set('excludeIngredients', 'eggs')
      .set('type', 'main course')
      .set('instructionsRequired', 'true')
      .set('fillIngredients', 'false')
      .set('addRecipeInformation', 'false')
      .set('titleMatch', 'Crock Pot')
      .set('maxReadyTime', '20')
      .set('ignorePantry', 'true')
      .set('sort', 'calories')
      .set('sortDirection', 'asc')
      .set('minCarbs', '10')
      .set('maxCarbs', '100')
      .set('minProtein', '10')
      .set('maxProtein', '100')
      .set('offset', '0')
      .set('number', '10')
      .set('limitLicense', 'false')
      .set('ranking', '2');

    let __headers = new HttpHeaders();
    __headers = __headers.append(
      'X-RapidAPI-Key',
      'dc72279f0bmshb11abb8f64b2e7ap12736cjsnf9b9e0c52cc5'
    );
    __headers = __headers.append(
      'X-RapidAPI-Host',
      'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    );
    let __body: any = null;
    let req = new HttpRequest<any>('GET', this.rootUrl + `/`, __body, {
      headers: __headers,
      params: __params,
      responseType: 'json',
    });

    return this.http.request<any>(req).pipe(
      __filter((_r) => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Root>;
      })
    );
  }
}

module ApiService {}

export { ApiService };
