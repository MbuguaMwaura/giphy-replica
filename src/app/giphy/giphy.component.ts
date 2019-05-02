import { Component, OnInit } from '@angular/core';
import { Giphy } from '../giphy';
import { GiphyService } from '../giphy.service';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css'],
  providers:[GiphyService]
})
export class GiphyComponent implements OnInit {

  giphy:Giphy;  
  constructor(private giphyService:GiphyService) { }

  ngOnInit() {
    this.giphyService.giphyRequest();
    this.giphy = this.giphyService.giphy;
  }


}
