import { _decorator, Component, Node } from 'cc';
import { Prize } from './Prize';
const { ccclass, property } = _decorator;

@ccclass('Sector')
export class Sector extends Component {
    @property({ type: Prize })
    public prize: Prize;
}

