import { _decorator, Component, Label, Node, Sprite, SpriteFrame } from 'cc';
import { Prize } from './Prize';
const { ccclass, property } = _decorator;

@ccclass('ResultPopup')
export class ResultPopup extends Component {
    @property({ type: Node })
    public display: Node;

    @property({ type: Sprite })
    public prizeSprite: Sprite;

    @property({ type: Label })
    public amountLabel: Label;

    @property({ type: Node })
    public playButton: Node;

    public SetPrize(prize: Prize) {
        this.prizeSprite.spriteFrame = prize.GetSpriteFrame();
        this.amountLabel.string = "x" + prize.GetAmount();
    }

    public Show() {
        this.display.active = true;
    }

    public Hide() {
        this.display.active = false;
        this.playButton.active = true;
    }
}

