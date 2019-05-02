import { Injectable } from '@angular/core';
import { Giphy } from './giphy';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../src/environments/environment';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';
import { resolve, reject } from 'q';

@Injectable({
	providedIn: 'root'
})
export class GiphyService {
  giphy: Giphy;
  
  
  

	constructor(private http: HttpClient) {
    this.giphy = new Giphy('', '', '');
    //instance
	}

	giphyRequest() {
		interface ApiResponse {
			title: string;
			url: string;
      id: string;
      content_url: string;
      data: any
		}
		const promise = new Promise((resolve, reject) => {
			this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(
				(response) => {
					this.giphy.title = response.data.title;
					this.giphy.url = response.data.images.fixed_width.url;
          this.giphy.id = response.data.id;
          console.log(response);
					resolve();
				},
				(error) => {
					alert('error');
					reject(error);
				}
			);
    });

      
		return promise;
	}
}
