import SaveAbility from "../abilities/SaveAbility";
import Player from "./Player";

export default class Goalkeeper extends Player {
    constructor(name: string) { super(name, "Goalkeeper", new SaveAbility()); }
}
