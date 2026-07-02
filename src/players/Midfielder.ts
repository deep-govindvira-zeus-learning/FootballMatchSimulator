import PlaymakeAbility from "../abilities/PlaymakeAbility";
import Player from "./Player";

export default class Midfielder extends Player {
    constructor(name: string) { super(name, "Midfielder", new PlaymakeAbility()); }
}