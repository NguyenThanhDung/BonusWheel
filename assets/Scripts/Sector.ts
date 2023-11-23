import { _decorator, Component, Label, Node, SpriteFrame } from 'cc';
import { Prize, PrizeType } from './Prize';
const { ccclass, property } = _decorator;

@ccclass('Sector')
export class Sector extends Component {
    @property({ type: Prize })
    public prize: Prize;

    private _angle: number;
    private _dropChance: number;

    public get angle(): number {
        return this._angle;
    }
    public set angle(value: number) {
        this._angle = value;
    }

    public get dropChance(): number {
        return this._dropChance;
    }
    public set dropChance(value: number) {
        this._dropChance = value;
    }

    public SetPrize(type: PrizeType, amount: number, spriteFrame: SpriteFrame) {
        this.prize.SetType(type);
        this.prize.SetAmount(amount);
        this.prize.SetSprite(spriteFrame);
    }
}

