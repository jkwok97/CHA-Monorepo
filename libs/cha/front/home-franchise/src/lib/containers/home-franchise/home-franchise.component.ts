import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cha-front-home-franchise',
  templateUrl: './home-franchise.component.html',
  styleUrls: ['./home-franchise.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeFranchiseComponent {
  isMobile = false;

  panelStyleMobile = {
    width: '100%',
    height: '77vh',
  };

  panelStyleDesktop = {
    width: '100%',
    height: '83vh',
  };
}
