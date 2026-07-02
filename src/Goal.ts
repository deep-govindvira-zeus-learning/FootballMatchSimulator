import type Player from "./players/Player";
import type Team from "./Team";

export default class Goal {
    constructor(
        public readonly minute: number,
        public readonly scorer: Player,
        public readonly team: Team,
    ) {
        if (minute < 0 || minute > 120) {
            throw new Error("Invalid match minute for a goal event.");
        }
    }
}