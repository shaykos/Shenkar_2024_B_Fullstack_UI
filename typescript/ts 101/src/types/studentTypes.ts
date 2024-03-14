export type StudentType = {
    id: number,
    name: string,
    lessons: Lesson[],
    grades: Grade[],
    calcAvg: Function
}

export type Lesson = {
    lesson_id:number, 
    name: string
}

export type Grade = {
    lesson:Lesson,
    grade: number
}