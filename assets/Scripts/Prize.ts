import { Component, Sprite, SpriteFrame, _decorator } from "cc";
const { ccclass, property } = _decorator;

export enum PrizeType {
    Life,
    Coin,
    Brush,
    Gem,
    Hammer
}

@ccclass('Prize')
export class Prize extends Component {
    private _type: PrizeType;
    private _amount: number;
    private _sprite: Sprite;

    onLoad() {
        this._sprite = this.node.getComponent(Sprite);
    }

    public SetSprite(spriteFrame: SpriteFrame) {
        this._sprite.spriteFrame = spriteFrame;
    }
}

