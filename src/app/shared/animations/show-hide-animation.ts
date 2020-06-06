import {
    trigger,
    state,
    style,
    animate,
    transition,
    keyframes,
} from '@angular/animations';


export const ShowHide = trigger('ShowHide',
    [
        // state('showItem', style({
        //     //opacity:1,
        // })),
        state('hideItem', style({
            opacity:0,

        })),
        transition('hideItem => showItem', [
            animate(700, keyframes([

                style({ opacity:.1, backgroundColor: "#ffc107" }) ,
                style({ opacity:.4,backgroundColor: "#696969" }),
                style({ opacity:.8,backgroundColor: "#ffc107" }),
                style({ opacity:1,backgroundColor: "#696969"  }) 
              ]))
        ]),
        transition('showItem => hideItem', [
            animate(700, keyframes([

                style({ opacity:1}) ,
                style({ opacity:.8 }),
                style({ opacity:.3 }),
                style({ opacity:0 }) 
              ]))
        ]),

        // transition(' showItem=> hideItem', [
        //     animate(500)
        // ])
    ]);

