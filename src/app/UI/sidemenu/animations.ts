import { trigger, state, style, transition, animate } from '@angular/core';

export let animations = [
  trigger('heroState', [
    state('inactive', style({
      display: 'none',
      transform: 'rotateX(-90deg)',
    })),
    state('active', style({
      display: 'block',
      transform: 'none',
    })),
    transition('inactive => active', animate('200ms ease-in')),
    transition('active => inactive', animate('200ms ease-in'))
  ])
];
