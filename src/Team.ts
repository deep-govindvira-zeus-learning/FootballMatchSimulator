import Defender from "./players/Defender";
import Goalkeeper from "./players/Goalkeeper";
import Midfielder from "./players/Midfielder";
import type Player from "./players/Player";
import Striker from "./players/Stricker";

export default class Team {
    public readonly players: Player[] = [];

    constructor(public readonly name: string) { }

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

    public getRandomStriker(): Striker {
        const strikers = this.players.filter(player => player instanceof Striker) as Striker[];
        const randomIndex = Math.floor(Math.random() * strikers.length);
        return strikers[randomIndex];
    }

    public getRandomMidfielder(): Midfielder {
        const midfielders = this.players.filter(player => (player instanceof Midfielder)) as Midfielder[];
        const randomIndex = Math.floor(Math.random() * midfielders.length);
        return midfielders[randomIndex];
    }

    public getRandomDefender(): Defender {
        const defenders = this.players.filter(player => (player instanceof Defender)) as Defender[];
        const randomIndex = Math.floor(Math.random() * defenders.length);
        return defenders[randomIndex];
    }

    public getRandomGoalkeeper(): Goalkeeper {
        const goalkeepers = this.players.filter(player => (player instanceof Goalkeeper)) as Goalkeeper[];
        const randomIndex = Math.floor(Math.random() * goalkeepers.length);
        return goalkeepers[randomIndex];
    }
}
