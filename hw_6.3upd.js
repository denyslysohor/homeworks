let table;
function University() {
    this.students = [{name: "Denys", course: 4, estimate: 4.8, activity: true, action: "Delete"},
{name: "Lada", course: 3, estimate: 4.6, activity: true, action: "Delete"},
{name: "Stanislav", course: 3, estimate: 3.3, activity: true, action: "Delete"},
{name: "Lev", course: 2, estimate: 3.6, activity: true, action: "Delete"},
{name: "Venzeslav", course: 3, estimate: 2.2, activity: false, action: "Delete"},
{name: "Leonid", course: 1, estimate: 4, activity: true, action: "Delete"},
{name: "Julia", course: 2, estimate: 4.4, activity: true, action: "Delete"},
{name: "Ivan", course: 4, estimate: 3.5, activity: true, action: "Delete"},
{name: "Mladen", course: 2, estimate: 4, activity: false, action: "Delete"},
{name: "Hennadii", course: 3, estimate: 3.9, activity: false, action: "Delete"},
{name: "Alex", course: 4, estimate: 3.2, activity: true, action: "Delete"},
{name: "Olha", course: 1, estimate: 2.7, activity: false, action: "Delete"},
{name: "Oleksii", course: 3, estimate: 4.5, activity: true, action: "Delete"},
{name: "Oleg", course: 4, estimate: 4.2, activity: true, action: "Delete"}];
};

University.prototype.renderStudents = function(){
    table = document.querySelector("table tbody");
   let avg = this.avgEstimate();
   document.querySelector(".avg").innerHTML = avg;
   let countOfAbsents = this.countOfAbsents();
   document.querySelector(".absents").innerHTML = countOfAbsents;
   console.log(avg);
   console.log(countOfAbsents);
    table.innerHTML = "";
    for(let i = 0; i < this.students.length; i++) {
        let tr = document.createElement("TR");
        
        let tdName = document.createElement("TD");
        tdName.innerHTML = this.students[i].name;
        tdName.setAttribute("data-index", i);
        tdName.addEventListener("click", this.eventCreateInput.bind(this));
        tr.appendChild(tdName);
        
        let tdCourse = document.createElement("TD");
        tdCourse.innerHTML = this.students[i].course;
        tdCourse.setAttribute("course-index", i);
        tdCourse.addEventListener("click", this.eventCreateInput.bind(this));
        tr.appendChild(tdCourse);
        table.appendChild(tr);

        let tdEstimate = document.createElement("TD");
        tdEstimate.innerHTML = this.students[i].estimate;
        tdEstimate.setAttribute("estimate-index", i);
        tdEstimate.addEventListener("click", this.eventCreateInput.bind(this));
        tr.appendChild(tdEstimate);
        table.appendChild(tr);


        let tdDelete = document.createElement("TD");
        tdDelete.innerHTML = this.students[i].action;
        tdDelete.addEventListener("click", this.eventClearRow.bind(this));
        tr.appendChild(tdDelete);
        table.appendChild(tr);

        if(this.students[i].estimate < 3){
            tr.classList.add("non_active");
        } else if(this.students[i].estimate >= 3 && this.students[i].estimate < 4) {
            tr.classList.add("semi_active");
        } else {
            tr.classList.add("active");
        }
        
        let tdActivity = document.createElement("TD");
    let checkbox = document.createElement("INPUT");
    checkbox.type ="checkbox";
    checkbox.checked = this.students[i].activity;
    tdActivity.appendChild(checkbox);
    tr.appendChild(tdActivity);
    table.appendChild(tr);

    }
};

University.prototype.avgEstimate = function() {
    let courses = {};
    for(let i = 0; i < this.students.length; i++) {
        if(courses[this.students[i].course] === undefined) {
            courses[this.students[i].course] = {
                countOfStud: 0,
                SumOfEstimate: 0,
        };
    }

if(this.students[i].activity) {
  
    courses[this.students[i].course].countOfStud++;
    courses[this.students[i].course].SumOfEstimate += this.students[i].estimate;
        }
    }
     for(let courseIndex in courses) {
        if(courses[courseIndex].countOfStud === 0) {
            courses[courseIndex].avgEstimate = 0;
            continue;
        }
        courses[courseIndex].avgEstimate = courses[courseIndex].SumOfEstimate / courses[courseIndex].countOfStud;
    }
    
    return courses;
}

let sumOfAbsents = 0;
University.prototype.countOfAbsents = function() {
    let absentsPerCourse = {};
    for(let i = 0; i < this.students.length; i++) {
        if(absentsPerCourse[this.students[i].course] === undefined) {
            absentsPerCourse[this.students[i].course] = {
                countOfAbsents: 0,
        };
    }
    if(!this.students[i].activity) {
        absentsPerCourse[this.students[i].course].countOfAbsents++;
        sumOfAbsents++;
            }
        }
        console.log(sumOfAbsents + " - кол-во неактивных студентов");
        return absentsPerCourse;
}

University.prototype.eventClearRow = function(event) {
    event.target.closest("tr").outerHTML = "";
}

University.prototype.eventCreateInput = function(event) {
    event.target.innerHTML = "";
    let input = document.createElement("INPUT");
    input.addEventListener("keyup", this.eventEnterInput.bind(this));
    event.target.appendChild(input);
    input.focus();
}

University.prototype.eventEnterInput = function(event) {
    if(event.keyCode === 13) {

        let newName = event.target.value;
        let td_names = event.target.closest("td");
        event.target.outerHTML = "";
        td_names.innerHTML = newName;
        let indexOfName = td_names.getAttribute("data-index");
        this.students[indexOfName].name = newName;

        let newCourse = event.target.value;
        let td_courses = event.target.closest("td");
        event.target.outerHTML = "";
        td_courses.innerHTML = newCourse;
        let indexOfCourse = td_courses.getAttribute("course-index");
        this.students[indexOfCourse].course = newCourse;

        let newEstimate = event.target.value;
        let td_estimate = event.target.closest("td");
        event.target.outerHTML = "";
        td_estimate.innerHTML = newEstimate;
        let indexOfEstimate = td_estimate.getAttribute("estimate-index");
        this.students[indexOfEstimate].estimate = newEstimate;
    }
}

let university = new University();
    university.renderStudents();

document.getElementById("update").addEventListener("click", function() {
    university.renderStudents();
});