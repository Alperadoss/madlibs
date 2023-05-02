/**
 * parseStory retrieves the story as a single string from story.txt
 *
 * In your code, you are required (please read this carefully):
 * - to return a list of objects
 * - each object should definitely have a field, `word`
 * - each object should maybe have a field, `pos` (part of speech)
 *
 * Please go through this lesson: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/
 */
let arrayOfText = [];

function parseStory(rawStory) {
  // Your code here.
  let specialWords = {
    n: "noun",
    a: "adjective",
    v: "verb",
  };
  const regexForCapture = /\[(a|v|n)/;

  let splittedWords = rawStory.split(/\s|\]/);
  // special words detection

  let ArrOfObjects = [];

  splittedWords.map((item) => {
    ArrOfObjects.push({ word: item, pos: regexForCapture.test(item) });
  });
  console.log(ArrOfObjects);
  console.log(splittedWords);
  return {}; // This line is currently wrong :)
}

/**
 * All your other JavaScript code goes here, inside the function. Don't worry about
 * the `then` and `async` syntax for now.
 *
 * NOTE: You should not be writing any code in the global namespace EXCEPT
 * declaring functions. All code should either:
 * 1. Be in a function.
 * 2. Be in .then() below.
 *
 * You'll want to use the results of parseStory() to display the story on the page.
 */
getRawStory()
  .then(parseStory)
  .then((processedStory) => {
    console.log(processedStory);
  });
