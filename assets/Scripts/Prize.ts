import { Sprite } from "cc";

enum PrizeType {
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

