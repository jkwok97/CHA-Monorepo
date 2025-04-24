import {
  animate,
  AnimationTriggerMetadata,
  style,
  transition,
  trigger
} from '@angular/animations';

export const bladeSlideInLeftAnimation: {
  readonly slideInLeft: AnimationTriggerMetadata;
} = {
  slideInLeft: trigger('slideInLeft', [
    transition(':enter', [
      style({ transform: 'translateX(-100%)' }),
      animate('500ms ease-out', style({ transform: 'translateX(0)' }))
    ]),
    transition(':leave', [
      animate('300ms ease-out', style({ transform: 'translateX(-100%)' }))
    ])
  ])
};
