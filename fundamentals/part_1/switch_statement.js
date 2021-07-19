const language = 'Greek';
// const language = "Chinese";
// const language = "Mandarin";
// const language = "Spanish";
// const language = "English";
// const language = "Hindi";
// const language = "Arabic";

switch (language) {
  case 'Chinese':
    console.log('MOST number of native speakers!');
    break;
  case 'Mandarin':
    console.log('MOST number of native speakers!');
    break;
  case 'Spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'English':
    console.log('3rd place');
    break;
  case 'Hindi':
    console.log('Number 4');
    break;
  case 'Arabic':
    console.log('5th most spoken language');
    break;
  default:
    console.log('Great language too');
}
