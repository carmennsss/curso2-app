import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment ';
import { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';

@Injectable({providedIn: 'root'})
export class GifsService {
  private http = inject(HttpClient);
  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(false);

  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs() {
    this.http.get<GiphyResponse>(`${environment.giphyApiUrl}/gifs/trending`, {
        params: {
            api_key: environment.giphyApiKey,
            limit: '20',
        }
    }).subscribe((response) => {

        const gifs = GifMapper.mapGiphyItemsToGifArray(response.data);
        console.log(gifs);
        this.trendingGifs.set(gifs);
        this.trendingGifsLoading.set(false);
    });
  }
}
