import { colorPalette, componentFiles } from './config';

export class AvatarGenerator {
    #hash;

    #generatedBgColor;
    #generatedBodyColor;

    static bodyScaleRange = [-0.1, 0.1];

    static eyesScaleRange = [-0.1, 0.1];
    static eyesDistanceRange = [32, 48];

    static nousemouthScaleRange = [-0.1, 0.1];

    static earsScaleRange = [-0.4, -0.2];
    static earsDistanceRange = [48, 64];
    static earsRotation = [20, 30];

    constructor(hash) {
        this.#hash = hash;
    }

    getBackgroundColor() {
        this.#generatedBgColor = this.#getColor();

        return this.#generatedBgColor;
    }

    getBodyConfig() {
        const color = this.#getColor(2, [this.#generatedBgColor, '#030504']);

        this.#generatedBodyColor = color;

        const size = this.#getValueInRange(AvatarGenerator.bodyScaleRange) + 1;

        const bodyConfig = {
            color,
            size,
        };

        return bodyConfig;
    }

    getEyesConfig() {
        const color = this.#getColor(3, [this.#generatedBodyColor]);
        const variant = this.#hash % componentFiles['eye'];

        const size = this.#getValueInRange(AvatarGenerator.eyesScaleRange) + 1;
        const distance = this.#getValueInRange(AvatarGenerator.eyesDistanceRange);

        const eyesConfig = {
            color,
            size,
            distance,
            variant,
        };

        return eyesConfig;
    }

    getNosemouthConfig() {
        const color = this.#getColor(4, [this.#generatedBodyColor]);
        const variant = this.#hash % componentFiles['nosemouth'];

        const size = this.#getValueInRange(AvatarGenerator.nousemouthScaleRange) + 1;

        const nosemouthConfig = {
            color,
            size,
            variant,
        };

        return nosemouthConfig;
    }

    getEarsConfig() {
        const color = this.#getColor(5, [this.#generatedBodyColor, this.#generatedBgColor]);
        const variant = this.#hash % componentFiles['ear'];

        const size = this.#getValueInRange(AvatarGenerator.earsScaleRange) + 1;
        const distance = this.#getValueInRange(AvatarGenerator.earsDistanceRange);
        const rotation = this.#getValueInRange(AvatarGenerator.earsRotation);

        const earsConfig = {
            color,
            size,
            distance,
            variant,
            rotation
        };

        return earsConfig;
    }

    #getColor(modifier = 1, excludeColors = undefined) {
        const colors = excludeColors ? colorPalette.filter((c) => !excludeColors.includes(c)) : colorPalette;

        return colors[(this.#hash * modifier) % colors.length];
    }

    #getValueInRange(range) {
        const size = range[0] + (this.#hash % (range[1] - range[0]));

        return size;
    }
}
