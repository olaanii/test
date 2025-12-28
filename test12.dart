String age(int a) => a > 18 ? " adult" : "minor";

// String age(int a) { // normal function
//   if (a > 18) {
//     return "adult";
//   } else {
//     return "minor";
//   }
// }
void main() {
  print(age(20));
}
// A function performs age check and returns a string