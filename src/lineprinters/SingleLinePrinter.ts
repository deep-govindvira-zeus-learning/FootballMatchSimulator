import type LinePrinter from "./LinePrinter";

export default class SingleLinePrinter implements LinePrinter {
    public print(): void {
        console.log("------------------------------------------------------------------------------------------------------------------------------");
    }
}