var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');
var storyText = 'It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
var insertX = ['Willy the Goblin','Big Daddy','Father Christmas'];
var insertY = ['the soup kitchen','Disneyland','the White House'];
var insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

story.textContent = storyText;
randomize.addEventListener('click', result);

function result() {
  var newStory = storyText;
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);
  newStory = newStory.replace(/:insertx/g,xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);


  if(customName.value !== '') {
    var name = customName.value;
    newStory = newStory.replace(/Bob/g,name);

  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300/14);
    var temperature =  Math.round(94/2.72);
    newStory = newStory.replace(/300/g,weight);
    newStory = newStory.replace(/94/g,temperature);
    newStory = newStory.replace(/farenheit/g,'celsius');
    newStory = newStory.replace(/pound/g,'stone');

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}


function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}
