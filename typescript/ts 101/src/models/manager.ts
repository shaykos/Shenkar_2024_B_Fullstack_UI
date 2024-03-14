import Employee from "./employee";

export default class Manager extends Employee {

    private listOfEmployess: Employee[] | undefined;

    private set ListOfEmployess(list: Employee[] | undefined) {
        //במידה ולא נשלח פרמטר לפונקציה רשימת העובדים תאותחל כמערך ריק
        this.listOfEmployess = list || [];
    }

    public get ListOfEmployess(): Employee[] { return this.listOfEmployess || [] }

    //בנאי
    //c# -> public Manager():base()
    constructor(id: number, name: string, listOfEmployess?: Employee[]) {
        //הפעלת הבנאי של ההורה
        super(id, name);
        this.listOfEmployess = listOfEmployess;
    }

    /**
     * The function `addEmployee` checks if an employee with the same ID already exists in the list and
     * adds the employee if not.
     * @param {Employee} emp - Employee object that represents the employee to be added to the list of
     * employees.
     */
    public addEmployee(emp: Employee): void {
        if(this.listOfEmployess == undefined)
        {
            this.listOfEmployess = new Array<Employee>();
            this.listOfEmployess.push(emp);
            return;
        }
        
        /* The expression `this.listOfEmployess.some((employee) => emp.Id == employee.Id)` is
        checking if there is any employee in the `listOfEmployess` array that has the same `Id`
        as the `Id` of the `emp` (Employee) object being passed as a parameter to the
        `addEmployee` method. */
        if (this.listOfEmployess?.some((employee) => emp.Id == employee.Id)) {
            console.log('Employee already in stuff');
        }
        else
            this.listOfEmployess?.push(emp);
    }
}