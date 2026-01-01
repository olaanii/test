interface Student {
    name: string;
    score: number;
}
const students: Student[] = [
    { name: "Odaa", score: 85 },
    { name: "Ali", score: 72 },
    { name: "Sara", score: 90 },
];
function calculateAverage(students: Student[]): number {
    let total = 0;

    for (const student of students) {
        total += student.score;
    }

    return total / students.length;
}
function findHighestScore(students: Student[]): number {
    let highest = 0;

    for (const student of students) {
        if (student.score > highest) {
            highest = student.score;
        }
    }

    return highest;
}
function checkResult(score: number): string {
    return score >= 50 ? "Pass" : "Fail";
}
console.log("📊 Student Report");

for (const student of students) {
    const result = checkResult(student.score);
    console.log(`${student.name}: ${student.score} → ${result}`);
}

const average = calculateAverage(students);
const highest = findHighestScore(students);

console.log(`\nAverage Score: ${average.toFixed(2)}`);
console.log(`Highest Score: ${highest}`);
