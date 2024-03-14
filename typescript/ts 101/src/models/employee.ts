export default class Employee {
    private id: number;
    private name: string;
    private shiftStart: Date | undefined;
    private shiftEnd: Date | undefined;

    //get & set for each one
    private set Id(value: number) { this.id = value; }
    public get Id(): number { return this.id; }

    //בנאי המחלקה
    constructor(id: number, name: string, shiftStart?: Date, shiftEnd?: Date) {
        this.id = id;
        this.name = name;
        this.shiftEnd = shiftEnd;
        this.shiftStart = shiftStart;
    }

    //c# -> public void ChangeName(string value)
    public changeName(value: string): void {
        //אם השם ריק נצא מהפונקציה
        if (value == "") return;

        //אם השם שנשלח זהה לשם הנוכחי
        if (value == this.name) return;

        //שינוי השם
        this.name = value;
        console.log('השם שונה בהצלחה!');
    }

    public enterShift(start: Date): void {
        this.shiftStart = start;
        console.log('המשמרת התחילה');
    }

    public leaveShift(end: Date): void {
        this.shiftEnd = end;
        console.log('סיימת את המשמרת');
    }

    public calcWordHours(): number {
        let diff = 0;
        const MS_PER_HOUR = 3600000;
        if (this.shiftEnd != undefined && this.shiftStart != undefined)
            diff = this.shiftEnd?.getTime() - this.shiftStart?.getTime();
        return diff/ MS_PER_HOUR;
    }
}
