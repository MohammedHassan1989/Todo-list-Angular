import {
    trigger,
    state,
    style,
    animate,
    transition,
} from '@angular/animations';


export const ScaleRotate = trigger('ScaleRotate',
    [
        state('ZoomIn', style({
            transform: 'scale(1.2) rotate(90deg) ',

        })),
        transition('* => *', [
            animate(200)
        ])
    ]);

