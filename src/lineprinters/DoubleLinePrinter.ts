import type LinePrinter from "./LinePrinter";

export default class DobuleLinePrinter implements LinePrinter {
    public print(): void {
        console.log("==============================================================================================================================");
    }
}
