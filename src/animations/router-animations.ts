import {
    trigger,
    transition,
    style,
    query,
    group,
    // animateChild,
    animate,
} from '@angular/animations';

const optional = { optional: true };

export const slider =
    trigger('routeAnimations', [
        transition('* => isLeft', slideTo('left')),
        transition('* => isRight', slideTo('right')),
        transition('isRight => *', slideTo('left')),
        transition('isLeft => *', slideTo('right')),
        transition('* => fade', fade())
    ]);

function fade() {
    return [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                left: 0,
                width: '100%',
                opacity: 0,
                transform: 'scale(0) translateY(100%)',
            }),
        ], optional),

        query(':enter', [
            animate('0.5s ease', style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
        ], optional),

        // if we gonna use children in routes we need this
        // query(':leave', animateChild()),
        // query(':enter', animateChild())
    ]
}

function slideTo(direction) {
    return [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                [direction]: 0,
                width: '100%'
            })
        ], optional),
        query(':enter', [
            style({ [direction]: '-100%' })
        ]),
        group([
            query(':leave', [
                animate('0.5s ease', style({ [direction]: '100%' }))
            ], optional),
            query(':enter', [
                animate('0.5s ease', style({ [direction]: '0%' }))
            ])
        ]),

        // if we gonna use children in routes we need this
        // query(':leave', animateChild()),
        // query(':enter', animateChild()),
    ];
}