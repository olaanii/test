export function wordCount(words: string[]): Record<string, number> {
    const counts: Record<string, number> = {};

    for (const word of words) {
        counts[word] = (counts[word] || 0) + 1;
    }

    return counts;
}
console.log(wordCount(["hello", "world", "hello"]));

