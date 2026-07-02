import type SpecialAbility from "./SpecialAbility";

export default class PlaymakeAbility implements SpecialAbility {
    execute(playerName: string): string {
        return `${playerName} makes a brilliant long pass!`;
    }
}