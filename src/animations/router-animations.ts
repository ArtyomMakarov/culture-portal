import {
    trigger,
    transition,
    style,
    query,
    group,
    animateChild,
    animate,
} from '@angular/animations';

const optional = { optional: true };

export const slider =
    trigger('routeAnimations', [
        transition('left => right', slideTo('right')),
        transition('right => left', slideTo('left')),
        transition('left => center', slideTo('right')),
        transition('right => center', slideTo('left')),
        transition('center => left', slideTo('left')),
        transition('center => right', slideTo('right')),
        transition('* <=> fade', fade())
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
            animate('0.4s ease-out', style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
        ], optional),

        // if we gonna use children in routes we need this
        query(':leave', animateChild(), optional),
        query(':enter', animateChild(), optional)
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
                animate('0.4s ease-out', style({ [direction]: '100%' }))
            ], optional),
            query(':enter', [
                animate('0.4s ease-out', style({ [direction]: '0%' }))
            ])
        ]),

        // if we gonna use children in routes we need this
        query(':leave', animateChild(), optional),
        query(':enter', animateChild(), optional),
    ];
}