import { Component, Label, Sprite, SpriteFrame, _decorator } from "cc";
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
    @property({ type: Label })
    public amountLabel: Label;
    
    private _type: PrizeType;
    private _amount: number;
    private _sprite: Sprite;

    onLoad() {
        this._sprite = this.node.getComponent(Sprite);
    }

    public SetType(type: PrizeType) {
        this._type = type;
    }

    public SetAmount(amount: number) {
        this._amount = amount;
        this.amountLabel.string = "x" + amount.toString();
    }

    public SetSprite(spriteFrame: SpriteFrame) {
        this._sprite.spriteFrame = spriteFrame;
    }
}

