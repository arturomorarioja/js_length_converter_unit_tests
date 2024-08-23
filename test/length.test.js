'use strict';

const { Length } = require('../classes/length');

describe('Length tests', () => {

    const lengthPassesProvider = [
        {'measure': 0, 'system': Length.IMPERIAL, 'expected': 0},
        {'measure': 1, 'system': Length.IMPERIAL, 'expected': 2.54},
        {'measure': 0.5, 'system': Length.IMPERIAL, 'expected': 1.27},
        {'measure': 0.25, 'system': Length.IMPERIAL, 'expected': 0.64},
        {'measure': 3546141438874406, 'system': Length.IMPERIAL, 'expected': Number.MAX_SAFE_INTEGER},
        {'measure': 0, 'system': Length.METRIC, 'expected': 0},
        {'measure': 2.54, 'system': Length.METRIC, 'expected': 1},
        {'measure': 1.27, 'system': Length.METRIC, 'expected': 0.5},
        {'measure': 0.635, 'system': Length.METRIC, 'expected': 0.25},
        {'measure': -1, 'system': Length.IMPERIAL, 'expected': 2.54}, // AMR: This test caught a bug, as I forgot to return the absolute value of the calculation
        {'measure': -2.54, 'system': Length.METRIC, 'expected': 1},
    ];
    describe.each(lengthPassesProvider)('Length conversion passes', (lengthData) => {
        it(`${lengthData.measure} ${lengthData.system} is ${lengthData.expected}`, () => {
            const length = new Length(lengthData.measure, lengthData.system);
            expect(length.convert()).toBeCloseTo(lengthData.expected);
        });
    });

    describe('Length conversion fails', () => {
        const lengthFailsProvider = [
            {'measure': -1, 'system': Length.IMPERIAL, 'expected': -2.54},
            {'measure': 3546141438874407, 'system': Length.IMPERIAL, 'expected': Number.MAX_SAFE_INTEGER}
        ];
        describe.each(lengthFailsProvider)('Length conversion returns incorrect value', (lengthData) => {
            it(`${lengthData.measure} ${lengthData.system} is not ${lengthData.expected}`, () => {
                const length = new Length(lengthData.measure, lengthData.system);
                expect(length.convert()).not.toBeCloseTo(lengthData.expected);
            });
        });

        it('Length conversion throws exception', () => {
            let length;
            expect(() => length = new Length(1, 'K')).toThrow('Invalid length system');
        });
    });
    
});