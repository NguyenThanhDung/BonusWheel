import { _decorator, Component, Node } from 'cc';
import { Sector } from './Sector';
const { ccclass, property } = _decorator;

@ccclass('Wheel')
export class Wheel extends Component {

    private sector: Sector[];
    private angle: number;
    private speed: number;

    start() {
        this.sector = [];
        this.angle = 0;
        this.speed = 20;
    }

    update(deltaTime: number) {
        this.angle += deltaTime * this.speed;
        this.node.setRotationFromEuler(0, 0, this.angle);
    }
}

