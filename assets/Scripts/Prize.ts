import { Sprite } from "cc";

export enum PrizeType {
    Life,
    Coin,
    Brush,
    Gem,
    Hammer
}

export class Prize {
    private type: PrizeType;
    private amount: number;
    private sprite: Sprite;
}

