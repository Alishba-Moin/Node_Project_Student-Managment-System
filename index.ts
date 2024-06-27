import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.yellowBright(`\n   <<<===========================================>>>`));
console.log(chalk.bold.redBright(`<<<=======>>>  ${chalk.redBright.bold('STUDENT MANAGEMENT SYSTEM')}  <<<=======>>>`));
console.log(chalk.bold.yellowBright(`   <<<===========================================>>>\n`));

class School {
    name: string;
    students: Student[] = [];
    teachers: Teacher[] = [];

    constructor(name: string) {
        this.name = name;
    }
    async addStudent(stdName: string, age: number, teacher: Teacher): Promise<Student> {
        const courseResponse = await inquirer.prompt({
            name: "course",
            type: "list",
            message: chalk.italic.bold("Choose the course for the student:"),
            choices: ['Mathematics', 'Science', 'English Literature', 'Computer Science', 'Art and Design']
        });
        let student = new Student(stdName, age, this.name, courseResponse.course, teacher);
        this.students.push(student);
        return student; 
    }
    addTeacher(teachName: string, age: number): Teacher {
        let teacher = new Teacher(teachName, age, this.name);
        this.teachers.push(teacher);
        return teacher;
    }
}
class Person {
    name: string;
    age: number;
    schoolName: string;

    constructor(name: string, age: number, schoolName: string) {
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }
}
class Student extends Person {
    id: number;
    coursesEnrolled: string[] = [];
    balance: number = 0;
    teacher: Teacher;

    constructor(name: string, age: number, schoolName: string, course: string, teacher: Teacher) {
        super(name, age, schoolName);
        this.id = 10000 + Math.floor(Math.random() * 90000);
        this.enroll(course);
        this.teacher = teacher;
    }
    enroll(course: string): void {
        this.coursesEnrolled.push(course);
    }
    viewBalance(): void {
        console.log(`${this.name}'s balance is $${this.balance}`);
    }
    payTuitionFees(amount: number): void {
        this.balance -= amount;
        console.log(`${this.name} paid $${amount}. Remaining Balance is $${this.balance}`);
    }
    showStatus(): void {
        console.log(chalk.bold.blueBright(`Student Name: ${chalk.italic(this.name)}`));
        console.log(chalk.bold.yellow(`Age: ${chalk.italic(this.age)}`));
        console.log(chalk.bold.redBright(`ID: ${chalk.italic(this.id)}`));
        console.log(chalk.bold.greenBright(`Courses Enrolled: ${chalk.italic(this.coursesEnrolled.join(', '))}`));
        console.log(chalk.bold.magentaBright(`Balance: $${chalk.italic(this.balance)}`));
        console.log(chalk.bold.blackBright(`Teacher Name: ${chalk.italic(this.teacher.name)}`));
    }
}
class Teacher extends Person {
    id: number;

    constructor(name: string, age: number, schoolName: string) {
        super(name, age, schoolName);
        this.id = 10000 + Math.floor(Math.random() * 90000);
    }
    showStatus(): void {
        console.log(`Teacher Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`ID: ${this.id}`);
    }
}

// Create schools
let school = 
    new School("Beaconhouse")
    new School("Army Public")
    new School("The City")

let addMoreStudent = true;

while (addMoreStudent){
const studentName = await inquirer.prompt({
    name : "StudentName",
    type: "input",
    message: chalk.bold.italic("Enter the student name:")
})
const studentAge = await inquirer.prompt({
    name: "StudentAge",
    type: "number",
    message: chalk.bold.italic("Enter the student age:")
})
const teacherName = await inquirer.prompt({
    name: "TeacherName",
    type: "input",
    message: chalk.bold.italic("Enter the teacher name:")
})
const teacherAge = await inquirer.prompt({
    name: "TeacherAge",
    type: "number",
    message: chalk.bold.italic("Enter the teacher age:")
})
const teacher = school.addTeacher(teacherName.TeacherName, teacherAge.TeacherAge)
const student = await school.addStudent(studentName.StudentName, studentAge.StudentAge, teacher)
console.log(chalk.yellowBright.bold.underline("Student Added Successfully!"));
student.showStatus()

const addingStudent = await inquirer.prompt({
    name:"continue",
    type: "confirm",
    message: chalk.italic.bold("Do you want to add more student?")
})
addMoreStudent = addingStudent.continue
}

