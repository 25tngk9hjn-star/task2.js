

// 1. Student Class

class Student {

    constructor(id, name, grades, attendance) {

        this.id = id;

        this.name = name;

        this.grades = grades;

        this.attendance = attendance;

    }

    // 2. Calculate Average using reduce

    calculateAverage() {

        let total = this.grades.reduce((sum, grade) => sum + grade, 0);

        return total / this.grades.length;

    }

    // 3. Calculate Grade

    getGrade(average) {

        if (average >= 90) {

            return "A";

        } else if (average >= 80) {

            return "B";

        } else if (average >= 70) {

            return "C";

        } else if (average >= 60) {

            return "D";

        } else if (average >= 50) {

            return "E";

        } else {

            return "F";

        }

    }

    // 4. Final Result

    getResult() {

        let average = this.calculateAverage();

        if (average >= 50 && this.attendance >= 75) {

            return "ناجح";

        } else {

            return "يحتاج مراجعة";

        }

    }

}

// 5. Create Students Objects

let studentsList = [

    new Student(1, "Ahmed", [90, 85, 95], 90),

    new Student(2, "Mona", [45, 48, 42], 80),

    new Student(3, "Ali", [70, 75, 80], 85),

    new Student(4, "Sara", [40, 45, 48], 90)

];

// 6. Filter Students who need mercy marks

let strugglingStudents = studentsList.filter(student => {

    let average = student.calculateAverage();

    return average >= 40 && average <= 49;

});

// 7. Add 5 Mercy Marks using map

let mercyStudents = strugglingStudents.map(student => {

    let newAverage = student.calculateAverage() + 5;

    return {

        id: student.id,

        name: student.name,

        oldAverage: student.calculateAverage(),

        newAverage: newAverage

    };

});

// 8. Calculate Total New Averages using reduce

let totalNewAverages = mercyStudents.reduce((sum, student) => {

    return sum + student.newAverage;

}, 0);

// 9. Calculate Mercy Average with Protection

let mercyAverage = mercyStudents.length > 0

    ? totalNewAverages / mercyStudents.length

    : 0;

// 10. Print All Students Reports

console.log("===== Students Reports =====");

studentsList.forEach(student => {

    let average = student.calculateAverage();

    let grade = student.getGrade(average);

    let result = student.getResult();

    console.log("Student Name:", student.name);

    console.log("Average:", average);

    console.log("Grade:", grade);

    console.log("Result:", result);

    console.log("----------------------");

});

// 11. Print Mercy Students

console.log("===== Mercy Students =====");

console.log(mercyStudents);

// 12. Print Mercy Average

console.log("Mercy Average After Adding Marks:", mercyAverage);
