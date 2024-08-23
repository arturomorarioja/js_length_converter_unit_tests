'use strict';

/**
 * Length class
 * 
 * @author  Arturo Mora-Rioja
 * @version 1.0, August 2024
 */
class Length {
    static METRIC = 'M';
    static IMPERIAL = 'I';
    #FACTOR = 2.54;

    constructor(measure, system) {
        if (![Length.METRIC, Length.IMPERIAL].includes(system)) {
            throw 'Invalid length system';
        } else {
            this.measure = measure;
            this.system = system;
        }
    }

    convert() {
        if (this.system === Length.METRIC) {
            return parseFloat(Math.abs((this.measure / this.#FACTOR).toFixed(2)));
        } else {
            return parseFloat(Math.abs((this.measure * this.#FACTOR).toFixed(2)));
        }
    }
}

exports.Length = Length;