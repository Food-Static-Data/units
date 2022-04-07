function define(name, value) {
    Object.defineProperty(exports, name, {
        value:      value,
        enumerable: true
    });
}

define("PI", 3.14);






let constants = {
    key1: "value1",
    key2: "value2",
    key3: {
        subkey1: "subvalue1",
        subkey2: "subvalue2"
    }
};

export default Object.freeze(constants);
        
//---
    //https://github.com/platy/cooking-converter/blob/master/src/units.ts
    //https://github.com/platy/cooking-converter/blob/master/src/measurement.ts
    
export const CONST_TEASPOON = 0.005;
export const CONST_DESSERTSPOON = 0.010;
export const CONST_TABLESPOON = 0.015; // except Australia
export const CONST_FLOZ_US = 0.030;
export const CONST_FLOZ = 0.02841;
export const CONST_CUP = 0.250;
export const CONST_CUPUK = 0.2841;
export const CONST_CUPUS = 0.240;
export const CONST_PINT = 0.56826;
export const CONST_PINT_AUS = 0.570;
export const CONST_PINT_US = 0.47318;
export const CONST_QUART = 1.13652;
export const CONST_QUART_US = 0.94635;
export const CONST_GALLON = 4.54609;
export const CONST_GALLON_US = 3.78541;




// for US measurements, those specified by the FDA are used
// many more US measurements available at https://en.wikipedia.org/wiki/Cooking_weights_and_measures
export const CustomaryVolumes = { // for english speaking nations
    Teaspoon: VolumeMeasure(0.005),
    Dessertspoon: VolumeMeasure(0.010),
    Tablespoon: VolumeMeasure(0.015), // except Australia
    FlOzUS: VolumeMeasure(0.030),
    FlOz: VolumeMeasure(0.02841),
    Cup: VolumeMeasure(0.250),
    CupUk: VolumeMeasure(0.2841),
    CupUs: VolumeMeasure(0.240),
    Pint: VolumeMeasure(0.56826),
    PintAus: VolumeMeasure(0.570),
    PintUs: VolumeMeasure(0.47318),
    Quart: VolumeMeasure(1.13652),
    QuartUs: VolumeMeasure(0.94635),
    Gallon: VolumeMeasure(4.54609),
    GallonUs: VolumeMeasure(3.78541),
}

export const MetricMasses = {
    Grams: MassMeasure(1),
    Kilograms: MassMeasure(1000),
}

export const CustomaryMasses = {
    OzInternational: MassMeasure(28.349523125),
    OzUs: MassMeasure(28),
}

export const All = Object.assign({}, MetricVolumes, CustomaryVolumes, MetricMasses, CustomaryMasses)

export const TopInputs = {
    FlOz: CustomaryVolumes.FlOz, 
    CupUs: CustomaryVolumes.CupUs, 
    Grams: MetricMasses.Grams, 
    OzInternational: CustomaryMasses.OzInternational,
}

export const TopOutputs = {
    Millilitres: MetricVolumes.Millilitres,
    Decilitres: MetricVolumes.Decilitres,
}
