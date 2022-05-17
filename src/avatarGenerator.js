import { colorPalette, componentFiles } from './config';

export class AvatarGenerator {
    #hash;

    #generatedBgColor;
    #generatedBodyColor;

    static bodyScaleRange = [0.9, 1.1];

    static eyesScaleRange = [0.6, 0.8];
    static eyesDistanceRange = [48, 96];

    static nousemouthScaleRange = [0.8, 1.2];

    static earsScaleRange = [0.6, 0.8];
    static earsRotation = [15, 45];
    static earsTranslateDegRange = [225, 250]; // Left ear

    constructor(hash) {
        this.#hash = hash;
    }

    getBackgroundColor() {
        this.#generatedBgColor = this.#getColor();

        return this.#generatedBgColor;
    }

    getBodyConfig() {
        const salt = 3;

        const color = this.#getColor(salt, [this.#generatedBgColor, '#030504']);

        this.#generatedBodyColor = color;

        const scale = this.#getValueInRangeFloat(AvatarGenerator.bodyScaleRange, salt);

        const bodyConfig = {
            color,
            scale,
        };

        return bodyConfig;
    }

    getEyesConfig() {
        const salt = 5;

        const color = this.#getColor(salt, [this.#generatedBodyColor]);
        const variant = this.#getVariant('eye', salt);

        const scale = this.#getValueInRangeFloat(AvatarGenerator.eyesScaleRange, salt);
        const distance = this.#getValueInRangeInt(AvatarGenerator.eyesDistanceRange, salt);

        const eyesConfig = {
            color,
            scale,
            distance,
            variant,
        };

        return eyesConfig;
    }

    getNosemouthConfig() {
        const salt = 7;

        const color = this.#getColor(salt, [this.#generatedBodyColor]);
        const variant = this.#getVariant('nosemouth', salt);

        const scale = this.#getValueInRangeFloat(AvatarGenerator.nousemouthScaleRange, salt);

        const nosemouthConfig = {
            color,
            scale,
            variant,
        };

        return nosemouthConfig;
    }

    getEarsConfig() {
        const salt = 11;

        const color = this.#getColor(salt, [this.#generatedBodyColor, this.#generatedBgColor]);
        const variant = this.#getVariant('ear', salt);

        const scale = this.#getValueInRangeFloat(AvatarGenerator.earsScaleRange, salt);

        const rotation = this.#getValueInRangeInt(AvatarGenerator.earsRotation, salt);
        const translateDeg = this.#getValueInRangeInt(AvatarGenerator.earsTranslateDegRange, salt);

        const earsConfig = {
            color,
            scale,
            translateDeg,
            variant,
            rotation,
        };

        return earsConfig;
    }

    #getColor(salt = 1, excludeColors = undefined) {
        const colors = excludeColors ? colorPalette.filter((c) => !excludeColors.includes(c)) : colorPalette;

        return colors[this.#getSaltyHash(salt) % colors.length];
    }

    #getVariant(componentName, salt = 1) {
        const variant = this.#getSaltyHash(salt) % componentFiles[componentName];

        return variant;
    }

    #getValueInRangeFloat(range, salt = 1) {
        const min = range[0] * 100;
        const max = range[1] * 100;

        const value = min + (this.#getSaltyHash(salt) % (max - min));

        return value / 100;
    }

    #getValueInRangeInt(range, salt = 1) {
        const min = range[0];
        const max = range[1];

        const value = min + (this.#getSaltyHash(salt) % (max - min));

        return value;
    }

    #getSaltyHash(salt) {
        const saltyHash = Math.abs(Math.round(this.#hash / salt));

        return saltyHash;
    }
}
