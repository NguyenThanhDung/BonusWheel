import { _decorator, Component, instantiate, Node, Prefab, Sprite, SpriteFrame } from 'cc';
import { Sector } from './Sector';
import { PrizeType } from './Prize';
const { ccclass, property } = _decorator;

@ccclass('Wheel')
export class Wheel extends Component {

    @property({ type: Prefab })
    public sectorPrefab: Prefab;

    @property({ type: SpriteFrame })
    public heartSprite: SpriteFrame;

    @property({ type: SpriteFrame })
    public coinSprite: SpriteFrame;

    @property({ type: SpriteFrame })
    public brushSprite: SpriteFrame;

    @property({ type: SpriteFrame })
    public gemSprite: SpriteFrame;

    @property({ type: SpriteFrame })
    public hammerSprite: SpriteFrame;

    private _prizes: PrizeType[];
    private _amounts: number[];
    private _dropChance: number[];
    private _spriteFrames: SpriteFrame[];

    private _sector: Sector[];
    private _angle: number;
    private _speed: number;

    start() {
        this._prizes = [];
        this._prizes.push(PrizeType.Life);
        this._prizes.push(PrizeType.Brush);
        this._prizes.push(PrizeType.Gem);
        this._prizes.push(PrizeType.Hammer);
        this._prizes.push(PrizeType.Coin);
        this._prizes.push(PrizeType.Brush);
        this._prizes.push(PrizeType.Gem);
        this._prizes.push(PrizeType.Hammer);

        this._amounts = [];
        this._amounts.push(30);
        this._amounts.push(3);
        this._amounts.push(35);
        this._amounts.push(3);
        this._amounts.push(750);
        this._amounts.push(1);
        this._amounts.push(75);
        this._amounts.push(1);

        this._dropChance = [];
        this._dropChance.push(20);
        this._dropChance.push(10);
        this._dropChance.push(10);
        this._dropChance.push(10);
        this._dropChance.push(5);
        this._dropChance.push(20);
        this._dropChance.push(5);
        this._dropChance.push(20);

        this._spriteFrames = [];
        this._spriteFrames.push(this.heartSprite);
        this._spriteFrames.push(this.brushSprite);
        this._spriteFrames.push(this.gemSprite);
        this._spriteFrames.push(this.hammerSprite);
        this._spriteFrames.push(this.coinSprite);
        this._spriteFrames.push(this.brushSprite);
        this._spriteFrames.push(this.gemSprite);
        this._spriteFrames.push(this.hammerSprite);

        this._sector = [];
        this._angle = 0;
        this._speed = 20;

        var node = instantiate(this.sectorPrefab);
        node.parent = this.node;
        var sector = node.getComponent(Sector);
        sector.prize.SetSprite(this.heartSprite);
    }

    update(deltaTime: number) {
        this._angle += deltaTime * this._speed;
        this.node.setRotationFromEuler(0, 0, this._angle);
    }
}

