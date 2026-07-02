import type SpecialAbility from "../abilities/SpecialAbility";

export default abstract class Player {
    constructor(
        public readonly name: string,
        public readonly position: string,
        private specialAbility: SpecialAbility
    ) { }

    public getName(): string {
        return this.name;
    }

    public getPosition(): string {
        return this.position;
    }

    public getSpecialAbility(): SpecialAbility {
        return this.specialAbility;
    }

    public run(): string {
        return `${this.name} is running.`;
    }

    public pass(): string {
        return `${this.name} makes a pass.`;
    }

    public celebrate(): string {
        return `${this.name} celebrates!`;
    }

    public performSpecialAction(): string {
        return this.specialAbility.execute(this.name);
    }
}