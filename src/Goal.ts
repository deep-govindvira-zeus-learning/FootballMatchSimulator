import type Player from "./players/Player";
import type Team from "./Team";

export default class Goal {
    constructor(
        private readonly minute: number,
        private readonly scorer: Player,
        private readonly team: Team,
    ) {
        if (minute < 0 || minute > 120) {
            throw new Error("Invalid match minute for a goal event.");
        }
    }

    public getMinute(): number {
        return this.minute;
    }

    public getScorer(): Player {
        return this.scorer;
    }

    public getTeam(): Team {
        return this.team;
    }
}