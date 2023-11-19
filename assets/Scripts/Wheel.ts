import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
import { Sector } from './Sector';
const { ccclass, property } = _decorator;

@ccclass('Wheel')
export class Wheel extends Component {

    @property({
        type: Prefab,
        tooltip: 'Sector Prefab'
    })
    public sectorPrefab : Prefab;

    private sector: Sector[];
    private angle: number;
    private speed: number;

    start() {
        this.sector = [];
        this.angle = 0;
        this.speed = 20;

        var node = instantiate(this.sectorPrefab);
        node.parent = this.node;
    }

    update(deltaTime: number) {
        this.angle += deltaTime * this.speed;
        this.node.setRotationFromEuler(0, 0, this.angle);
    }
}

