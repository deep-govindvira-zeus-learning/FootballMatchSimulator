class MethodNotImplementedError extends Error {
    constructor(methodName) {
        super(`Method '${methodName}()' must be implemented.`);
        this.name = 'NotImplementedError';
    }
}

class SpecialAbility {
    execute(player) {
        throw new MethodNotImplementedError('execute');
    }
}

class ShootAbility extends SpecialAbility {
    execute(player) {
        return `${player.name} shoots towards the goal!`;
    }
}

class SaveAbility extends SpecialAbility {
    execute(player) {
        return `${player.name} makes an amazing save!`;
    }
}

class Player {
    constructor(name, initialAbilities) {
        this.name = name;
        this.abilities = new Set();

        if (initialAbilities) {
            this.setAbilities(initialAbilities);
        }
    }

    run() {
        return `${this.name} is running.`;
    }
    pass() {
        return `${this.name} makes a long pass.`;
    }
    celebrate() {
        return `${this.name} is celebrating!`;
    }

    getName() {
        return this.name;
    }
    
    setName(name) {
        this.name = name;
    }

    getAbilities() {
        return Array.from(this.abilities);
    }

    setAbilities(abilitiesArray) {
        this.abilities.clear();
        abilitiesArray.forEach(ability => this.addAbility(ability));
    }

    hasAbility(abilityClass) {
        return Array.from(this.abilities).some(ability => ability instanceof abilityClass);
    }

    addAbility(ability) {
        if (!this.hasAbility(ability.constructor)) {
            this.abilities.add(ability);
            return true;
        }
        return false;
    }
}

const doubleShootAbilities = [
    new ShootAbility(),
    new ShootAbility(),
    new SaveAbility()
];

const player = new Player('Messi', doubleShootAbilities);

player.addAbility(new ShootAbility());

console.log(player);
