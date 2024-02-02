import Person from "./person";

export default class Student extends Person {
    private avg = 0;

    constructor(name: string, age: number, grades: Array<number>) {
        super(name, age); // :base() in C#. go to parent's constructor
        this.calcAvg(grades);
    }

    /**
     * Gets the AVG of the student.
     *
     * @return {number} The grade of the student.
     */
    public getAvg(): number {
        return this.avg;
    }

    /**
     * Calculate the grade based on an array of grades.
     *
     * @param {Array<number>} grades - An array of grades.
     */
    private calcAvg(grades: Array<number>) {
        let sum = 0;
        for (let i = 0; i < grades.length; i++) {
            sum += grades[i];
        }
        this.avg = sum / grades.length;
    }


}