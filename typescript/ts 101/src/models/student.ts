import { Grade, Lesson, StudentType } from '../types/studentTypes';

export default class Student implements StudentType {
    id: number;
    name: string;
    lessons: Lesson[];
    grades: Grade[];

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.lessons = [];
        this.grades = [];
    }

    public calcAvg(): number {
        let avg = 0;
        if (this.lessons.length == 0 || this.grades.length == 0)
            return 0;

        // this.grades.forEach(g => {
        //     avg += g.grade;
        // });
        for (let g of this.grades)
            avg += g.grade;
        return avg;
    }
}