let marks = 75;

let result = marks >= 35 ? "Pass" : "Fail";

let grade;

if (marks >= 90) {
    grade = "Grade A";
} else if (marks >= 75) {
    grade = "Grade B";
} else if (marks >= 60) {
    grade = "Grade C";
}

console.log(result);
console.log(grade);
