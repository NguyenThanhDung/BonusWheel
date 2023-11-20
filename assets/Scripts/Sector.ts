import { _decorator, Component, Label, Node } from 'cc';
import { Prize } from './Prize';
const { ccclass, property } = _decorator;

@ccclass('Sector')
export class Sector extends Component {
    @property({ type: Prize })
    public prize: Prize;

    @property({ type: Label })
    public amountLabel: Label;

    public SetAmount(amount: number) {
        this.amountLabel.string = "x" + amount.toString();
    }
}

