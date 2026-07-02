import type Commentary from "./commentary/Commentary";
import Goal from "./Goal";
import DobuleLinePrinter from "./lineprinters/DoubleLinePrinter";
import SingleLinePrinter from "./lineprinters/SingleLinePrinter";
import type Team from "./Team";

export default class FootballMatchSimulator {
    private readonly goals: Goal[] = [];
    private commentaryList: Commentary[] = [];

    constructor(private teamA: Team, private teamB: Team) { }

    public addGoals(goal: Goal) {
        this.goals.push(goal);
    }

    public addCommentary(observer: Commentary): void {
        this.commentaryList.push(observer);
    }

    private comment(message: string): void {
        this.commentaryList.forEach(observer => observer.comment(message));
    }

    private getTeamScore(team: Team): number {
        return this.goals.filter(goal => goal.team === team).length;
    }

    private getDisplayScore(): string {
        return `${this.teamA.name} ${this.getTeamScore(this.teamA)} - ${this.getTeamScore(this.teamB)} ${this.teamB.name}`;
    }

    private playEventTurn(currentMinute: number): void {
        const { attackingTeam, defendingTeam } = this.determineTeams();

        this.executeBuildUp(currentMinute, attackingTeam);

        const roll = Math.random();
        if (roll < 0.4) {
            const defender = defendingTeam.getRandomDefender();
            this.comment(`Interception! ${defender.performSpecialAction()}`);
        } else if (roll < 0.8) {
            this.executeAttack(currentMinute, attackingTeam, defendingTeam);
        } else {
            this.comment(`The shot sails over the crossbar.`);
        }

        const singleLinePrinter = new SingleLinePrinter();
        singleLinePrinter.print();
    }

    private determineTeams(): { attackingTeam: Team; defendingTeam: Team } {
        const attackingTeam = Math.random() > 0.5 ? this.teamA : this.teamB;
        const defendingTeam = attackingTeam === this.teamA ? this.teamB : this.teamA;
        return { attackingTeam, defendingTeam };
    }

    private executeBuildUp(currentMinute: number, attackingTeam: Team): void {
        const defenderOfAttackingTeam = attackingTeam.getRandomDefender();
        const midfielder = attackingTeam.getRandomMidfielder();

        this.comment(`[${currentMinute}'] ${attackingTeam.name} building up play. ${defenderOfAttackingTeam.run()}`);
        this.comment(`${defenderOfAttackingTeam.pass()}`);
        this.comment(`${midfielder.performSpecialAction()}`);
    }

    private executeAttack(currentMinute: number, attackingTeam: Team, defendingTeam: Team): void {
        const striker = attackingTeam.getRandomStriker();
        this.comment(`${striker.performSpecialAction()}`);

        if (Math.random() > 0.5) {
            const goal = new Goal(currentMinute, striker, attackingTeam);
            this.addGoals(goal);

            this.comment(`⚽ GOAL!!! ${attackingTeam.name} scores via ${striker.name}! ${striker.celebrate()}`);
            this.comment(`Live Score: ${this.getDisplayScore()}`);
        } else {
            const defender = defendingTeam.getRandomDefender();
            const gk = defendingTeam.getRandomGoalkeeper() || defender;
            this.comment(`🧤 What a stop! ${gk.performSpecialAction()}`);
        }
    }

    public startMatch(turns: number = 3): void {
        const dobuleLinePrinter = new DobuleLinePrinter();
        dobuleLinePrinter.print();

        this.comment(`🏁 Kick-off! Match started between ${this.teamA.name} and ${this.teamB.name}!`);
        dobuleLinePrinter.print();

        for (let i = 0; i < turns; i++) {
            const calculatedMinute = Math.floor(((i + 1) / turns) * 90);
            this.playEventTurn(calculatedMinute);
        }

        this.displayFinalResults();
        dobuleLinePrinter.print();
    }

    public commentWinnerTeamName(winnerTeamName: Team): void {
        this.comment(`🏆 Winner: ${winnerTeamName.name}!`);
    }

    public commentFinalScore(): void {
        const scoreA = this.getTeamScore(this.teamA);
        const scoreB = this.getTeamScore(this.teamB);

        this.comment("🏁 Full Time!");
        this.comment(`Final Score: ${this.teamA.name} [${scoreA}] vs [${scoreB}] ${this.teamB.name}`);
    }

    public commentAllGoals(): void {
        if (this.goals.length > 0) {
            this.goals.forEach(goal => {
                this.comment(`[${goal.minute}'] ${goal.scorer.name} (${goal.team.name})`);
            });
        }
    }

    public commentResult(): void {
        const scoreA = this.getTeamScore(this.teamA);
        const scoreB = this.getTeamScore(this.teamB);

        if (scoreA > scoreB) {
            this.commentWinnerTeamName(this.teamA);
        } else if (scoreB > scoreA) {
            this.commentWinnerTeamName(this.teamB);
        } else {
            this.comment("🤝 The match ends in a draw.");
        }
    }

    private displayFinalResults(): void {
        this.commentFinalScore();
        this.commentAllGoals();
        this.commentResult();
    }
}