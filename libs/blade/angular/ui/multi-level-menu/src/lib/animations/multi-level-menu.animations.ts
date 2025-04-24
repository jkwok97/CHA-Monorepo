import {
  animate,
  AnimationTriggerMetadata,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

export const bladeMultiLevelMenuAnimations: {
  readonly fadeInOut: AnimationTriggerMetadata;
  readonly fadeIn: AnimationTriggerMetadata;
  readonly openCloseSideNav: AnimationTriggerMetadata;
} = {
  fadeInOut: trigger('fadeInOut', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate(750, style({ opacity: 1 }))
    ]),
    transition(':leave', [
      // :leave is alias to '* => void'
      animate(250, style({ opacity: 0 }))
    ])
  ]),
  fadeIn: trigger('fadeIn', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate(1250, style({ opacity: 1 }))
    ])
  ]),
  openCloseSideNav: trigger('openCloseSideNav', [
    state(
      'close',
      style({
        width: '58px'
      })
    ),
    state(
      'open',
      style({
        width: '290px'
      })
    ),
    transition('close => open', animate('250ms ease-in-out')),
    transition('open => close', animate('250ms ease-in-out'))
  ])
};
