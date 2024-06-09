--יצירת טבלאות
--identity(1,1) -> מספר רץ. מתחיל ב-1 וקופץ ב-1
use nodejsSQL;

create table Recipe(
    id int identity(1,1) primary key, 
    [name] nvarchar(250) not null,
    bakingTime float not null,
    ovenHeat int not null check (ovenHeat >= 150),
    withGluten char(1) check(withGluten = 'Y' or withGluten = 'N')
);

create table Ingredients(
    id int identity(1,1) primary key,
    [name] nvarchar(250) not null
);

create table IngredientsInRecipe(
    RecipeId int,
    IngeridentId int,
    amount float,
    messaure ntext

    constraint pk primary key(RecipeId, IngeridentId),
    constraint fk_1 foreign key(RecipeId) references Recipe(id),
    constraint fk_2 foreign key(IngeridentId) references Ingredients(id)
);

--char(x) -> בדיוק x תווים
--varchar(x) -> עד x תווים
create table Employee(
    id char(9) primary key, 
    first_name varchar(255) not null,
    last_name varchar(255) not null,
    birthday date not null
);

create table Titles(
    id int identity(1000,1) primary key,
    [description] nvarchar(255) not null
);

create table Shifts(
    id int identity(1,1) primary key,
    [description] nvarchar(10) not null,
    startTime time not null,
    endTime time not null
);

create table EmployeeInShift(
    employee_id char(9),
    working_day date,
    shift_id int,
    title_id int,

    --מפתח ראשי
    constraint pk_eis primary key(employee_id, working_day),
    --מפתח זר
    constraint fk_eis_emp foreign key(employee_id) references Employee(id),
    constraint fk_eis_shift foreign key(shift_id) references Shifts(id),
    constraint fk_eis_title foreign key(title_id) references Titles(id)
);


insert into Employee(id,first_name,last_name,birthday)
    values('111111111','Neria', 'Segas', '2000-5-16')
insert into Employee(id,first_name,last_name,birthday)
    values('222222222','Yarin', 'Firka', '1999-1-15')
insert into Employee(id,first_name,last_name,birthday)
    values('333333333','Denis', 'Tsirlin', '1999-1-10')
insert into Employee(id,first_name,last_name,birthday)
    values('444444444','Oranit', 'Gerbi', '1998-12-6')


select * from Employee
go

create proc InsertEmployee 
    @id char(9),
    @first_name varchar(255),
    @last_name varchar(255),
    @birthday date
as
    insert into Employee(id,first_name,last_name,birthday)
        values(@id,@first_name, @last_name,  @birthday)
go

create proc DeleteEmployees
as
    delete from Employee
go