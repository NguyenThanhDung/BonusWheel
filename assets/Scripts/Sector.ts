import { _decorator, Component, Node } from 'cc';
import { Prize } from './Prize';
const { ccclass, property } = _decorator;

@ccclass('Sector')
export class Sector extends Component {
    private _prize: Prize;

    public get prize(): Prize {
        return this._prize;
    }
    public set prize(value: Prize) {
        this._prize = value;
    }

    start() {

    }

    update(deltaTime: number) {

    }
}

