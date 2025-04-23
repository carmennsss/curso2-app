import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
interface MenuOption {
  label: string;
  sublabel: string;
  router: string;
  icon: string;
}
@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './gifs-side-menu-options.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuOptionsComponent {
  menuOptions: MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      sublabel: 'Most popular gifs',
      router: '/dashboard/trending',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Search',
      sublabel: 'Search gifs',
      router: '/dashboard/search',
    },
  ];
}
