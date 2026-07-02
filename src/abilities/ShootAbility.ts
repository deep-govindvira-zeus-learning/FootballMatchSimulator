import type SpecialAbility from "./SpecialAbility";

export default class ShootAbility implements SpecialAbility {
    execute(playerName: string): string {
        return `${playerName} shoots towards the goal!`;
    }
}