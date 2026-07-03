import Commentary from "./commentary/Commentary";
import Goal from "./Goal";
import DobuleLinePrinter from "./lineprinters/DoubleLinePrinter";
import SingleLinePrinter from "./lineprinters/SingleLinePrinter";
import Defender from "./players/Defender";
import Goalkeeper from "./players/Goalkeeper";
import Midfielder from "./players/Midfielder";
import Striker from "./players/Stricker";
import type Team from "./Team";

export default class FootballMatchSimulator {
    private readonly goals: Goal[] = [];
    private commentaryList: Commentary[] = [];

    constructor(private teamA: Team, private teamB: Team) { }

    public addGoals(goal: Goal) {
        this.goals.push(goal);
    }

    public addCommentary(commentary: Commentary): void {
        this.commentaryList.push(commentary);
    }

    private comment(message: string, minute: number): void {
        this.commentaryList.forEach(commentary => commentary.comment(message, minute));
    }

    private getTeamScore(team: Team): number {
        return this.goals.filter(goal => goal.getTeam() === team).length;
    }

    private getDisplayScore(): string {
        return `${this.teamA.getName()} ${this.getTeamScore(this.teamA)} - ${this.getTeamScore(this.teamB)} ${this.teamB.getName()}`;
    }

    private playEventTurn(currentMinute: number): void {
        const { attackingTeam, defendingTeam } = this.determineTeams();

        this.executeBuildUp(currentMinute, attackingTeam);

        const roll = Math.random();
        if (roll < 0.4) {
            const defender = defendingTeam.getRandomPlayerByRole(Defender);
            this.comment(`Interception! ${defender.performSpecialAction()}`, currentMinute);
        } else if (roll < 0.8) {
            this.executeAttack(currentMinute, attackingTeam, defendingTeam);
        } else {
            this.comment(`The shot sails over the crossbar.`, currentMinute);
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
        const defenderOfAttackingTeam = attackingTeam.getRandomPlayerByRole(Defender);
        const midfielder = attackingTeam.getRandomPlayerByRole(Midfielder);

        this.comment(`${attackingTeam.getName()} building up play. ${defenderOfAttackingTeam.run()}`, currentMinute);
        this.comment(`${defenderOfAttackingTeam.pass()}`, currentMinute);
        this.comment(`${midfielder.performSpecialAction()}`, currentMinute);
    }

    private executeAttack(currentMinute: number, attackingTeam: Team, defendingTeam: Team): void {
        const striker = attackingTeam.getRandomPlayerByRole(Striker);
        this.comment(`${striker.performSpecialAction()}`, currentMinute);

        if (Math.random() > 0.5) {
            const goal = new Goal(currentMinute, striker, attackingTeam);
            this.addGoals(goal);

            this.comment(`⚽ GOAL!!! ${attackingTeam.getName()} scores via ${striker.getName()}! ${striker.celebrate()}`, currentMinute);
            this.comment(`Live Score: ${this.getDisplayScore()}`, currentMinute);
        } else {
            const defender = defendingTeam.getRandomPlayerByRole(Defender);
            const gk = defendingTeam.getRandomPlayerByRole(Goalkeeper) || defender;
            this.comment(`🧤 What a stop! ${gk.performSpecialAction()}`, currentMinute);
        }
    }

    public startMatch(turns: number = 3): void {
        const dobuleLinePrinter = new DobuleLinePrinter();
        dobuleLinePrinter.print();

        this.comment(`🏁 Kick-off! Match started between ${this.teamA.getName()} and ${this.teamB.getName()}! 🏁`, 0);
        dobuleLinePrinter.print();

        for (let i = 0; i < turns; i++) {
            const calculatedMinute = Math.floor(((i + 1) / turns) * 90);
            this.playEventTurn(calculatedMinute);
        }

        this.displayFinalResults();
        dobuleLinePrinter.print();
    }

    public commentWinnerTeamName(winnerTeamName: Team): void {
        this.comment(`🏆 Winner: ${winnerTeamName.getName()}!`, 90);
    }

    public commentFinalScore(): void {
        const scoreA = this.getTeamScore(this.teamA);
        const scoreB = this.getTeamScore(this.teamB);

        this.comment("🏁 Full Time! 🏁", 90);
        this.comment(`Final Score: ${this.teamA.getName()} [${scoreA}] vs [${scoreB}] ${this.teamB.getName()}`, 90);
    }

    public commentAllGoals(): void {
        if (this.goals.length > 0) {
            this.goals.forEach(goal => {
                this.comment(`${goal.getScorer().getName()} (${goal.getTeam().getName()})`, 90);
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
            this.comment("🤝 The match ends in a draw.", 90);
        }
    }

    private displayFinalResults(): void {
        this.commentFinalScore();
        this.commentAllGoals();
        this.commentResult();
    }
}