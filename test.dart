void main() {
  Map<String, int> wordCount(List<String> words) {
    Map<String, int> counts = {};

    for (var word in words) {
      counts[word] = (counts[word] ?? 0) + 1;
    }

    return counts;
  }

  print(wordCount(["hello", "world", "hello"]));
}
