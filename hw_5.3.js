let students = [{name: "Denys", course: 4, estimate: 5, activity: true},
{name: "Lada", course: 3, estimate: 4, activity: true},
{name: "Stanislav", course: 3, estimate: 3, activity: true},
{name: "Lev", course: 2, estimate: 4, activity: true},
{name: "Venzeslav", course: 3, estimate: 2, activity: false},
{name: "Leonid", course: 1, estimate: 4, activity: true},
{name: "Julia", course: 2, estimate: 4, activity: true},
{name: "Ivan", course: 4, estimate: 3, activity: true},
{name: "Mladen", course: 2, estimate: 4, activity: false},
{name: "Hennadii", course: 3, estimate: 4, activity: false},
{name: "Alex", course: 4, estimate: 3, activity: true},
{name: "Olha", course: 1, estimate: 2, activity: false},
{name: "Oleksii", course: 3, estimate: 5, activity: true},
{name: "Oleg", course: 4, estimate: 5, activity: true}];
let sumOfAbsent = 0;
let estimatesOfCourses = {};
let absentsOfCourse = {};
let presentsOfCourse = {};
for(let i = 0; i < students.length; i++) {
    if(estimatesOfCourses[students[i].course] === undefined) {
    estimatesOfCourses[students[i].course] = 0;
    }
    if(presentsOfCourse[students[i].course] === undefined) {
        presentsOfCourse[students[i].course] = 0;
    }
    if(students[i].activity === true) {
    presentsOfCourse[students[i].course] += 1;
    estimatesOfCourses[students[i].course] += students[i].estimate / presentsOfCourse[students[i].course];
    }
    
    if(absentsOfCourse[students[i].course] === undefined) {
        absentsOfCourse[students[i].course] = 0;
    }
    if(students[i].activity === false) {
    absentsOfCourse[students[i].course] += 1;
    sumOfAbsent++;
    }
}
console.log(absentsOfCourse);
console.log(estimatesOfCourses);
console.log(sumOfAbsent);
