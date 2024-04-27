class School {
    name: string;
    students: Student[] = [];
    teachers: Teacher[] = [];
    constructor(name: string) {
        this.name = name;
    }
    addStudent(stdName: string, age: number, course: string, teacher: Teacher): Student {
        let student = new Student(stdName, age, this.name, course, teacher);
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
        console.log(`Student Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`ID: ${this.id}`);
        console.log(`Courses Enrolled: ${this.coursesEnrolled.join(', ')}`);
        console.log(`Balance: $${this.balance}`);
        console.log(`Teacher Name: ${this.teacher.name}`);
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
let schools: School[] = [
    new School("Beaconhouse"),
    new School("Army Public"),
    new School("The City")
];
// Add teachers to schools and store them
let t1: Teacher = schools[0].addTeacher("Ma'am 1", 26);
let t2: Teacher = schools[1].addTeacher("Ma'am 2", 30);
let t3: Teacher = schools[2].addTeacher("Ma'am 3", 23);
// Add students to schools with associated teacher
let s1: Student = schools[0].addStudent("Mishal", 5, "Maths", t1);
let s2: Student = schools[1].addStudent("Zimal", 7, "Science", t2);
let s3: Student = schools[2].addStudent("Fatima", 10, "English", t3);
// View status of students
schools.forEach(school => {
    console.log(`School Name: ${school.name}`);
    school.students.forEach(student => {
        student.showStatus();
        console.log("\n");
    });
});