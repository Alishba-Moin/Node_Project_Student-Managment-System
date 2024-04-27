class School {
    name;
    students = [];
    teachers = [];
    constructor(name) {
        this.name = name;
    }
    addStudent(stdName, age, course, teacher) {
        let student = new Student(stdName, age, this.name, course, teacher);
        this.students.push(student);
        return student; // Return the added student for further operations
    }
    addTeacher(teachName, age) {
        let teacher = new Teacher(teachName, age, this.name);
        this.teachers.push(teacher);
        return teacher;
    }
}
class Person {
    name;
    age;
    schoolName;
    constructor(name, age, schoolName) {
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }
}
class Student extends Person {
    id;
    coursesEnrolled = [];
    balance = 0;
    teacher;
    constructor(name, age, schoolName, course, teacher) {
        super(name, age, schoolName);
        this.id = 10000 + Math.floor(Math.random() * 90000);
        this.enroll(course);
        this.teacher = teacher;
    }
    enroll(course) {
        this.coursesEnrolled.push(course);
    }
    viewBalance() {
        console.log(`${this.name}'s balance is $${this.balance}`);
    }
    payTuitionFees(amount) {
        this.balance -= amount;
        console.log(`${this.name} paid $${amount}. Remaining Balance is $${this.balance}`);
    }
    showStatus() {
        console.log(`Student Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`ID: ${this.id}`);
        console.log(`Courses Enrolled: ${this.coursesEnrolled.join(', ')}`); // Joined by comma
        console.log(`Balance: $${this.balance}`);
        console.log(`Teacher Name: ${this.teacher.name}`);
    }
}
class Teacher extends Person {
    id;
    constructor(name, age, schoolName) {
        super(name, age, schoolName);
        this.id = 10000 + Math.floor(Math.random() * 90000);
    }
    showStatus() {
        console.log(`Teacher Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`ID: ${this.id}`);
    }
}
// Create schools
let schools = [
    new School("Beaconhouse"),
    new School("Army Public"),
    new School("The City")
];
// Add teachers to schools and store them
let t1 = schools[0].addTeacher("Ma'am 1", 26);
let t2 = schools[1].addTeacher("Ma'am 2", 30);
let t3 = schools[2].addTeacher("Ma'am 3", 23);
// Add students to schools with associated teacher
let s1 = schools[0].addStudent("Mishal", 5, "Maths", t1);
let s2 = schools[1].addStudent("Zimal", 7, "Science", t2);
let s3 = schools[2].addStudent("Fatima", 10, "English", t3);
// View status of students
schools.forEach(school => {
    console.log(`School Name: ${school.name}`);
    school.students.forEach(student => {
        student.showStatus();
        console.log("\n");
    });
});
export {};
