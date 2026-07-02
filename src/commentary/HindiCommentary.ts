import type Commentary from "./Commentary";

export default class HindiCommentary implements Commentary {
    comment(message: string): void {
        console.log(`[🎙️ HIN COMMENTARY]: ${message}`);
    }
}