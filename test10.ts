/*let x: number = 5;

if (x === "5") {
  console.log("Equal");
} else {
  console.log("Not Equal");
}

*/
// the above print Not Equal b/c "===" is strict
// which is check both type and value
let x: number = 5;
if (x === 5) {
    console.log("Equal");
} else {
    console.log("Not Equal");
}