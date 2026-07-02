import TackleAbility from "../abilities/TackleAbility";
import Player from "./Player";

export default class Defender extends Player {
    constructor(name: string) { super(name, "Defender", new TackleAbility()); }
}