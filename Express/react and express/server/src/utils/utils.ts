import { compareSync, hashSync, genSaltSync } from 'bcryptjs';

//פונקציה להצפנת סיסמה
export function encryptPassword(password: string): string {
    //משמעות המספר 10 היא כמה סיבובים של רנדומליות הפונקציה תעשה כדי לייצר את מפתח ההצפנה
    //נשאיר זאת כך כי אנחנו משתמשים בשירותים חינמיים
    let salt = genSaltSync(10);

    //פונקציה המצפינה את הסיסמה באמצעות מפתח ההצפנה שנוצר
    let hashPassword = hashSync(password, salt);
    return hashPassword;
}

//פונקציית פיענוח
//הפונקציה מקבלת את הסיסמה המקורית והסיסמה לאחר ההצפנה ובודקת אם קיימת 100% תאימות
export function decryptPassword(password: string, hashPassword: string): boolean {
    return compareSync(password, hashPassword);
}