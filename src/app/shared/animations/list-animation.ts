import { trigger, transition, style, query, animateChild, animate, group, state, keyframes, stagger } from '@angular/animations';


export const hoverItem = trigger('hoverItem',
[
    state('moveUp',style({
        transform:'translateY(-10px)',
    })),
    transition('* => *', [
      animate(200)
    ])
])


export const AddRemoveListItem = trigger('AddRemoveListItem',
[
    state('fadeIn',style({
        opacity:'1'
    })),
    transition(':enter', [
      animate('400ms 0s ease-in',keyframes([
        style({  opacity:1, transform:'translateY(-30px)', offset:0}),
        style({  opacity:1, transform:'translateY(5px)', offset:0.5}),
        style({  opacity:1, transform:'translateY(0px)', offset:1}),
      ]))
    ])
])


export let listOfDivsInOut = trigger('listOfDivsInOut', [
  transition('* <=> *', [




    query(':enter', style({ opacity: 0 }), { optional: true }),

    query(':enter', stagger('300ms', [
      animate('1s ease-in', keyframes([
        style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
        style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
        style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
      ]))]), { optional: true }),


    // query(':leave', stagger('300ms', [
    //   animate('500ms ease-in', keyframes([
    //     style({ opacity: 1, transform: 'translateY(0)', offset: 0, }),
    //     style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3, }),
    //     style({ opacity: 0, transform: 'translateY(-75%)', offset: 1.0, }),
    //   ]))]), { optional: true })
  ])
])

export let removeListItem = trigger('removeListItem', [
  transition('* <=> *', [




    query(':leave', stagger('300ms', [
      animate('500ms ease-in', keyframes([
        style({ opacity: 1, transform: 'translateY(0)', offset: 0, }),
        style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3, }),
        style({ opacity: 0, transform: 'translateY(-75%)', offset: 1.0, }),
      ]))]), { optional: true })
  ])
])
