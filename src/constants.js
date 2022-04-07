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

module.exports =
        Object.freeze(constants);
        




const CONST_xxx = ;
const CONST_xxx = ;
const CONST_xxx = ;
const CONST_xxx = ;
const CONST_xxx = ;
const CONST_xxx = ;
const CONST_xxx = ;
const CONST_xxx = ;
const CONST_xxx = ;
const CONST_xxx = ;
const CONST_xxx = ;
const CONST_xxx = ;
const CONST_xxx = ;


// for us measurements, those specified by the FDA are used
// many more us measurements available at https://en.wikipedia.org/wiki/Cooking_weights_and_measures
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
    FlOz: CustomaryVolumes.FlOz, CupUs: CustomaryVolumes.CupUs, Grams: MetricMasses.Grams, OzInternational: CustomaryMasses.OzInternational,
}

export const TopOutputs = {
    Millilitres: MetricVolumes.Millilitres, Decilitres: MetricVolumes.Decilitres,
}
