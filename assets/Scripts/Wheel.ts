import { _decorator, Component, instantiate, Prefab, SpriteFrame, Node } from 'cc';
import { Sector } from './Sector';
import { PrizeType } from './Prize';
import { ResultPopup } from './ResultPopup';
const { ccclass, property } = _decorator;

@ccclass('Wheel')
export class Wheel extends Component {

    @property({ type: Node })
    public wheelSection: Node;

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

    @property({ type: ResultPopup })
    public resultPopup: ResultPopup;

    private _prizes: PrizeType[];
    private _amounts: number[];
    private _dropChance: number[];
    private _spriteFrames: SpriteFrame[];

    private _sectors: Sector[];
    private _angle: number;
    private _speed: number;
    private _acceleration: number;
    private _dropMap: number[];

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

        this._sectors = [];

        var offset = 360 / 16;
        var sectorAngle = 360 / 8;
        for (let i = 0; i < this._prizes.length; i++) {
            var node = instantiate(this.sectorPrefab);
            node.parent = this.wheelSection;

            node.angle = offset + sectorAngle * i;

            var sector = node.getComponent(Sector);
            sector.dropChance = this._dropChance[i];
            sector.SetPrize(this._prizes[i], this._amounts[i], this._spriteFrames[i]);
            sector.angle = offset + sectorAngle * i;

            this._sectors[i] = sector;
        }

        this._dropMap = [];

        this.Reset();
    }

    update(deltaTime: number) {
        var deltaAngle = this._speed * deltaTime;
        this._angle -= deltaAngle;
        this.wheelSection.setRotationFromEuler(0, 0, this._angle);

        if (this._speed > 0) {
            this._speed += this._acceleration * deltaTime;
            if (this._speed <= 0) {
                this._speed = 0;
                this.resultPopup.Show();
            }
        }
    }

    GenerateDropMap() {
        var dropChanceAccumulation = 0;
        var count = 0;
        for (let i = 0; i < this._sectors.length; i++) {
            dropChanceAccumulation += this._sectors[i].dropChance;
            do {
                this._dropMap.push(i);
                count++;
            } while (count < dropChanceAccumulation);
        }
        console.log(this._dropMap);
    }

    GetRandomNumber(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    CalculateAcceleration(beginSpeed: number, targetAngle: number, roundBeforeStop: number) {
        var rotateDistance = targetAngle + 360 * roundBeforeStop;
        return -(beginSpeed * beginSpeed) / (2 * rotateDistance);
    }

    public Reset() {
        this._speed = 0;
        this._angle = 0;
        this.wheelSection.setRotationFromEuler(0, 0, 0);
    }

    public Rotate() {
        if (this._dropMap.length == 0)
            this.GenerateDropMap();

        var dropMapIndex = this.GetRandomNumber(0, this._dropMap.length - 1);
        console.log("dropMapIndex: " + dropMapIndex);
        var sectorIndex = this._dropMap[dropMapIndex];
        console.log("sectorIndex: " + sectorIndex);
        this._dropMap.splice(dropMapIndex, 1);
        var sector = this._sectors[sectorIndex];
        console.log("Reward: " + sector.prize.GetTypeString());

        console.log(this._dropMap);

        var beginSpeed = 720;
        this._acceleration = this.CalculateAcceleration(beginSpeed, sector.angle, 3);
        this._speed = beginSpeed;

        this.resultPopup.SetPrize(sector.prize);
    }
}

