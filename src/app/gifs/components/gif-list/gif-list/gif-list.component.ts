import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GifListItemComponent } from "../gif-list-item/gif-list-item/gif-list-item.component";
import { Gif } from 'src/app/gifs/interfaces/gif.interface';

@Component({
  selector: 'app-gif-list',
  imports: [GifListItemComponent],
  templateUrl: './gif-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifListComponent { 
  imageUrls = input.required<Gif[]>();
}
