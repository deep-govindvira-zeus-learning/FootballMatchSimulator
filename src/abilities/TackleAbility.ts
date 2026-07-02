import type SpecialAbility from "./SpecialAbility";

export default class TackleAbility implements SpecialAbility {
    execute(playerName: string): string {
        return `${playerName} performs a strong tackle!`;
    }
}
