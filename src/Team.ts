import Defender from "./players/Defender";
import Goalkeeper from "./players/Goalkeeper";
import Midfielder from "./players/Midfielder";
import type Player from "./players/Player";
import Striker from "./players/Stricker";

export default class Team {
    private readonly players: Player[] = [];

    constructor(private readonly name: string) { }

    public getName(): string {
        return this.name;
    }

    public addPlayer(player: Player): void {
        this.players.push(player);
    }

    public getRandomPlayer(): Player {
        const randomIndex = Math.floor(Math.random() * this.players.length);
        return this.players[randomIndex];
    }
    
    public getRandomPlayerByRole<T extends Player>(roleClass: new (...args: any[]) => T): T {
        const filteredPlayers = this.players.filter(player => player instanceof roleClass) as T[];
        const randomIndex = Math.floor(Math.random() * filteredPlayers.length);
        return filteredPlayers[randomIndex];
    }
}
