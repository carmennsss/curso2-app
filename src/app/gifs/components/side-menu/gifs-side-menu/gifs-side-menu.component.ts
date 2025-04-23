import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SideMenuOptionsComponent } from '../side-menu-options/gifs-side-menu-options.component';
import { GifsSideMenuHeaderComponent } from '../side-menu-header/gifs-side-menu-header.component';



@Component({
  selector: 'gifs-side-menu',
  imports: [GifsSideMenuHeaderComponent, SideMenuOptionsComponent],
  templateUrl: './gifs-side-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifsSideMenuComponent {}
