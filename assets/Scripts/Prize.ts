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

    public GetTypeString() {
        return PrizeType[this._type];
    }

    public SetType(type: PrizeType) {
        this._type = type;
    }

    public GetAmount() {
        return this._amount;
    }

    public SetAmount(amount: number) {
        this._amount = amount;
        this.amountLabel.string = "x" + amount.toString();
    }

    public GetSpriteFrame() {
        return this._sprite.spriteFrame;
    }

    public SetSprite(spriteFrame: SpriteFrame) {
        this._sprite.spriteFrame = spriteFrame;
    }
}

