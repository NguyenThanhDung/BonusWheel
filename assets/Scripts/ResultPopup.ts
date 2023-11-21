import { _decorator, Component, Label, Node, Sprite, SpriteFrame } from 'cc';
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

    public Show(prizeSpriteFrame: SpriteFrame, amount: number) {
        this.prizeSprite.spriteFrame = prizeSpriteFrame;
        this.amountLabel.string = "x" + amount.toString();
        this.display.active = true;
    }

    public Hide() {
        this.display.active = false;
        this.playButton.active = true;
    }
}

