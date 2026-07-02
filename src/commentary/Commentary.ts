export default abstract class Commentary {
    constructor(public readonly language: string) { }

    comment(message: string, minute: number): void {
        console.log(`[🎙️  ${this.language} COMMENTARY]: [⌚ ${minute}] ${message}`);
    }
}