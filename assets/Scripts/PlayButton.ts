import { _decorator, Button, Component, Node } from 'cc';
import { Wheel } from './Wheel';
const { ccclass, property } = _decorator;

@ccclass('PlayButton')
export class PlayButton extends Component {
    @property({ type: Wheel })
    public wheel: Wheel;

    public OnPress() {
        this.node.active = false;
        this.wheel.Rotate();
    }
}

