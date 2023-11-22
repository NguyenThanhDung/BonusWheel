import { _decorator, Component, Label, Node, SpriteFrame } from 'cc';
import { Prize, PrizeType } from './Prize';
const { ccclass, property } = _decorator;

@ccclass('Sector')
export class Sector extends Component {
    @property({ type: Prize })
    public prize: Prize;

    public SetPrize(type: PrizeType, amount: number, spriteFrame: SpriteFrame) {
        this.prize.SetType(type);
        this.prize.SetAmount(amount);
        this.prize.SetSprite(spriteFrame);
    }
}

