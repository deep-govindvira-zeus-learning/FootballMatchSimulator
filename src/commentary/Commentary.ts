export default abstract class Commentary {
    constructor(private readonly language: string) { }

    comment(message: string, minute: number): void {
        console.log(`[🎙️  ${this.language} COMMENTARY]: [⌚ ${minute}] ${message}`);
    }
}