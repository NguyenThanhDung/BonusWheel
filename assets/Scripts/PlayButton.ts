import { _decorator, Button, Component, Node } from 'cc';
import { Wheel } from './Wheel';
const { ccclass, property } = _decorator;

@ccclass('PlayButton')
export class PlayButton extends Component {
    @property({ type: Wheel })
    public wheel: Wheel;

    private _button: Button;

    start() {
        this._button = this.node.getComponent(Button);
    }

    public OnPress() {
        this._button.interactable = false;
        this.wheel.Rotate();
    }
}

