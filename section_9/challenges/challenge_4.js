const capitalizeStr = (str) => {
  const first = str[0].toUpperCase();
  const rest = str.slice(1).toLowerCase();
  return first + rest;
};

// console.log(capitalizeStr('word'));
// console.log(capitalizeStr('WORD'));
// console.log(capitalizeStr('wOrD'));

const convertName = (nameUnderscore) => {
  const nameParts = nameUnderscore.split('_');
  let nameCamel = nameParts.shift().toLowerCase();
  for (const namePart of nameParts) {
    nameCamel += capitalizeStr(namePart);
  }
  return nameCamel;
};

// console.log(convertName('underscore_case'));
// console.log(convertName('first_name'));
// console.log(convertName('Some_Variable'));
// console.log(convertName('calculate_AGE'));
// console.log(convertName('delayed_departure'));
// console.log(convertName('long_variable_name'));
// console.log(convertName('super_long_variable_name'));

const processInput = (textInput) => {
  const lines = textInput.split('\n');

  for (let i = 0; i < lines.length; i++) {
    lines[i] = lines[i].trim();
  }

  const namesUnderscore = [];
  for (const line of lines) {
    if (line) {
      namesUnderscore.push(line);
    }
  }
  return namesUnderscore;
};

// const testStr =
//   '  underscore_case  \n first_name  \n Some_Variable\n   calculate_AGE';
// console.log(processInput(testStr));

const computeMaxStrLength = (strArr) => {
  const lengths = [];
  for (const str of strArr) {
    lengths.push(str.length);
  }
  return Math.max(...lengths);
};

// console.log(computeMaxStrLength(['Just', 'a', 'stupid', 'test']));

const computeTargetLength = (strArr, extraSpace) =>
  computeMaxStrLength(strArr) + extraSpace;

const printOutputWithCheckMarks = (namesCamel, extraSpace) => {
  const targetLength = computeTargetLength(namesCamel, extraSpace);
  for (const [i, nameCamel] of namesCamel.entries()) {
    console.log(nameCamel.padEnd(targetLength, ' ') + '✓'.repeat(i + 1));
  }
};

const convertInput = () => {
  const textInput = document.getElementById('userInput').value;
  if (!textInput.trim()) {
    alert('No variable name to convert!');
    return;
  }

  const namesUnderscore = processInput(textInput);
  const namesCamel = [];
  for (const nameUnderscore of namesUnderscore) {
    namesCamel.push(convertName(nameUnderscore));
  }

  const output = namesCamel.join('\n');
  document.getElementById('output').value = output;

  printOutputWithCheckMarks(namesCamel, 5);
};
