import type SpecialAbility from "./SpecialAbility";

export default class SaveAbility implements SpecialAbility {
    execute(playerName: string): string {
        return `${playerName} makes an amazing save!`;
    }
}