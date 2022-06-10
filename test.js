// calculateGpa(newGpa) {
//     this.#gpa = newGpa;
//   }



class Students {
    __name;
    __grade;
    __gpa;
    __courses;
    __age;

    constructor(name, grade, gpa, courses=[], age) {
        this.__name = name;
        this.__grade = grade;
        this.__gpa = gpa;
        this.__courses = courses;
        this.__age = age;
    }
    setNames(studentName) {
        if (studentName === "") {
           console.log("Name is required")
        } else {
             this.__name = studentName;
        }
    }
    getNames() {
        return this.__name
    }
    setGrades(studentGrade) {
        if (studentGrade > 100) {
            this.__grade = studentGrade
        } else {
            console.log("You failed miserably");
        }
    }
        getGrades(){
            return this.__grade
    }
    setGPA(studentGPA) {
        if (studentGPA >2.0) {
            this.__gpa=studentGPA
        } else {
            console.log("Try harder")
        }
    }
    getGPA() {
        return this.__gpa
    }
    setCourses(studentCourses) {
        if (studentCourses==="" || studentCourses<2) {
           console.log("Are you serious?")
        } else {
             this.__courses=studentCourses
        }
    }
    getCourses() {
        return this.__courses
    }
    printCourses() {
        console.log(`These are the ${this.__courses} I am taking.`)
        }
    setAge(studentAge) {
        if (studentAge>18) {
            this.__age=studentAge
        } else {
            alert("You should've graduated last year")
        }
    }
    getAge() {
        return this.__age
    }
     sayHello() {
        console.log(`I'm a student called ${this.__name}, I'm ${this.__age}, in ${this.__grade}, currently studying ${this.__courses}, with a gpa of ${this.__gpa}`);
    }
    }



const studentA = new Students("Calvin", 12, 4.0, ["maths", "biology", "english", "physics"], 25)
// console.log(studentA)

const studentB = new Students("Kwesi", 9, 3.0, ["Agriculture", "Biology", "english", "physics"], 20)
// console.log(studentB)

const studentC = new Students("Sabina", 10, 2.0, ["Agriculture", "Biology", "Geography", "physics"], 22)
// console.log(studentC)

const studentD = new Students("Edem", 11, 1.8, ["Agriculture", "Biology", "Chemistry", "Spanish"], 23)
// console.log(studentD)






class HighSchoolers extends Students{
    constructor(name, grade, gpa,__courses=[], age) {
        super(name,grade,gpa,__courses=[],age)
    }
}


let studentList = [];

const student1 = new HighSchoolers("Bob", 12, 4.0, ["maths", "biology", "english", "physics"], 25);
console.log(student1)
const student2 = new HighSchoolers("Sam", 15, 3.2, ["maths", "biology", "english", "Agriculture"], 23);
console.log(student2)

function createStudent(name, grade, gpa, courses, age) {
    const newStudent = new Student(name, grade, gpa, courses, age)
    newStudent.setCourses(["Math", "Biology", "Agric", "English"]);
     console.log = (newStudent)
    return newStudent;
}

function enrollStudent(newStudent) {
    studentList.push(newStudent);
}
function searchStudent(name) {
    return studentList.filter((s) => s.getNames().includes(name));
} 
function filterStudentsByGrade(grade){
    return studentList.filter((s) => s.getGrade() == grade);
}
function filterStudentsByMaxAge(maxAge){    
    return studentList.filter((s) => s.getAge() < maxAge)
}
function filterStudentsByMinAge(minAge){
    return studentList.filter((s) => s.getAge() > minAge)
}


// const renderStudents = () => {
//     const list = document.getElementById("studentRoll");
//     for (let i = 0; i < studentList; i++) {
//         const studentDiv = renderStudent(studentList[i]);
//         console.log(list);
//         console.log(studentDiv);
//         list.appendChild(studentDiv);
//     }
// };

// const renderStudent = (newStudent) => {
//     const div = document.createElement("div");
//     const name = document.createElement("p");
//     name.innerText = newStudent.name;
//     const grade = document.createElement("p");
//     grade.innerText = newStudent.grade;
//     const gpa = document.createElement("p");
//     gpa.innerText = newStudent.gpa;
//     const courses = document.createElement("p");
//     courses.innerText = newStudent.courses.join(",");
//     const age = document.createElement("p");
//     age.innerText = newStudent.age;
//     div.appendChild(name);
//     div.appendChild(grade);
//     div.appendChild(gpa);
//     div.appendChild(courses);
//     div.appendChild(age);
//     return div;
// }

// let newStu = createStudent("Titus", 12, 3.5, [], 22);
// enrollStudent(newStu);


// const student3 = new HighSchoolers();
// const student4 = new HighSchoolers();
// const student5  =["Bob","Sam","Calvin","Kwesi"]


// function Student(name, grade,gpa,courses,age) {
//   name.value = name;
//   let newStudent= new Student(name,grade,gpa,courses,age);
//   console.log(newStudent);
// }

// function check() {
//     if (name.value === ""){
    // throw("Name is required")
//         return false;
//     }
//     if (age.value === "" || ageInput.value >25) {
//         return false;
//     }
// }



let newStudentBtn = document.getElementById("student-btn");
newStudentBtn.addEventListener("click", displayEvent);

let row = 1;

function displayEvent() {
    let name = document.getElementById("name").value;
    let grade = document.getElementByID("grade").value;
    let gpa = document.getElementByID("gpa").value;
    let courses = document.getElementByID("courses").value;
    let age = document.getElementByID("age").value;

    if (!name||!grade||!gpa||!courses||!age) {
        alert("Details required"); 
        return;
    }

    let display = document.getElementById("display");

    let newStudentRow = display.newStudentRow(row);

    let newStudentCell1 = newStudentRow.insertCell(0);
    let newStudentCell2 = newStudentRow.insertCell(1);
    let newStudentCell3 = newStudentRow.insertCell(2);
    let newStudentCell4 = newStudentRow.insertCell(3);
    let newStudentCell5 = newStudentRow.insertCell(4);
    
    newStudentCell1.innerHTML = name;
    newStudentCell2.innerHTML = grade;
    newStudentCell3.innerHTML = gpa;
    newStudentCell4.innerHTML = courses;
    newStudentCell5.innerHTML = age;
    
    row++;

}


 



















