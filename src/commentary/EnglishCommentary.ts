import type Commentary from "./Commentary";

export default class EnglishCommentary implements Commentary {
    comment(message: string): void {
        console.log(`[🎙️ ENG COMMENTARY]: ${message}`);
    }
}