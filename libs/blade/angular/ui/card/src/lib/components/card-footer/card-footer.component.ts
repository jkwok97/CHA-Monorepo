import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'blade-card-footer',
  templateUrl: './card-footer.component.html',
  styleUrls: ['../../scss/card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CardFooterComponent {
  @HostBinding('class') class = 'blade-card-footer';
}
