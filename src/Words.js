import wordBank from "./wordle-bank.txt";

export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWordSet = async () => {
  let wordSet;
    let todaysWord;
    let min = Math.ceil(0);
    let max = Math.floor(7);
    let index = Math.floor(Math.random() * (max - min + 1)) + min;
  await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
      const wordArr = result.split("\n");
      wordSet = new Set(wordArr);
    });
    return { wordSet, index};
};
