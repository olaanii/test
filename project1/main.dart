void main() {
  List<Map<String, dynamic>> students = [
    {"name": "Odaa", "score": 85},
    {"name": "Ali", "score": 72},
    {"name": "Sara", "score": 90},
  ];

  print("📊 Student Report");

  for (var student in students) {
    String result = checkResult(student["score"]);
    print("${student["name"]}: ${student["score"]} → $result");
  }

  double average = calculateAverage(students);
  int highest = findHighestScore(students);

  print("\nAverage Score: $average");
  print("Highest Score: $highest");
}

double calculateAverage(List<Map<String, dynamic>> students) {
  int total = 0;

  for (var student in students) {
    total += student["score"] as int;
  }

  return total / students.length;
}

int findHighestScore(List<Map<String, dynamic>> students) {
  int highest = 0;

  for (var student in students) {
    if (student["score"] > highest) {
      highest = student["score"];
    }
  }

  return highest;
}

String checkResult(int score) {
  return score >= 50 ? "Pass" : "Fail";
}
