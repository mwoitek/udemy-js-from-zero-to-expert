const createPromptMessage = function () {
  const partsPromptMessage = [this.question, ...this.options, '(Write option number)'];
  return partsPromptMessage.join('\n');
};

const createOptionNumbers = function () {
  const optionNumbers = [];
  for (const option of this.options) {
    optionNumbers.push(option[0]);
  }
  return optionNumbers;
};

const isStrInArr = (str, strArr) => strArr.includes(str.trim());

const printArr = function (type = 'array', description) {
  if (type === 'array') {
    console.log(this);
  } else if (type === 'string') {
    console.log(`${description} ${this.toString().replaceAll(',', ', ')}`);
  }
};

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  setPromptMessage() {
    this.promptMessage = createPromptMessage.call(this);
  },
  setOptionNumbers() {
    this.optionNumbers = createOptionNumbers.call(this);
  },
  pollPrompt() {
    return prompt(this.promptMessage);
  },
  isOptionValid(option) {
    return isStrInArr.bind(null, option, this.optionNumbers)();
  },
  updateAnswers(option) {
    this.answers[Number(option)] += 1;
  },
  displayResults(type) {
    return printArr.bind(this.answers, type, 'Poll results are')();
  },
  registerNewAnswer() {
    let input;
    while (true) {
      input = this.pollPrompt();
      if (input === null) return;
      if (this.isOptionValid(input)) break;
    }
    this.updateAnswers(input);
    this.displayResults();
  },
};

poll.setPromptMessage();
poll.setOptionNumbers();

const displayResults = poll.displayResults;

const testData1 = [5, 2, 3];
displayResults.call({ answers: testData1 });
displayResults.call({ answers: testData1 }, 'string');

const testData2 = [1, 5, 3, 9, 6, 1];
displayResults.call({ answers: testData2 });
displayResults.call({ answers: testData2 }, 'string');
