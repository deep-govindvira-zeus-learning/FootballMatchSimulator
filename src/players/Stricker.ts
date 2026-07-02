import ShootAbility from "../abilities/ShootAbility";
import Player from "./Player";

export default class Striker extends Player {
    constructor(name: string) { super(name, "Striker", new ShootAbility()); }
}