import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { GifListComponent } from "../../components/gif-list/gif-list/gif-list.component";
import { GifListItemComponent } from "../../components/gif-list/gif-list-item/gif-list-item/gif-list-item.component";
import { GifsService } from '../../services/gifs.service';


@Component({
  selector: 'app-trending-page',
  imports: [GifListComponent],
  templateUrl: './trending-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TrendingPageComponent { 
  gifService = inject(GifsService);
}
