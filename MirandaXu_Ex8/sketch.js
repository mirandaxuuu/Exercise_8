var rawTxt, joinedTxt;
var story;

var beginNum, endNum;
var endNum2;
var end2;

var oneSent, oneSent2;

var parsedStory;
delimiters = "  ,.!?:;";

var num1, num2;
var group = [];
var group2 = [];

function preload() {
  rawTxt = loadStrings("data/Grimm.txt");
}

function setup() {
  createCanvas(300, 300);
  background(0);

  joinedTxt = join(rawTxt, " ");
  //console.log(joinedTxt);

  beginNum = joinedTxt.indexOf("There was once a poor");
  endNum = joinedTxt.indexOf("The Brothers Grimm, Jacob (1785-1863)");
  //console.log(beginNum);
  //console.log(endNum);

  story = joinedTxt.substring(beginNum, endNum);
  //console.log(story);

  end2 = "and red.";
  oneSent = story.replace(/[\.]/gi, " and");
  endNum2 = oneSent.indexOf("and red");

  oneSent2 = oneSent.substring(1, endNum).toLowerCase();
  endNum3 = oneSent2.indexOf("and red");
  superParsed = "T" + oneSent2.substring(0, endNum3) + end2;

  console.log(superParsed);

  parsedStory = splitTokens(superParsed, delimiters);
  //console.log(parsedStory);

  num1 = searchText("she");
  num2 = searchText("but");

  console.log(num1);
  console.log(num2);

  for (var a = 0; a <= num1; a++) {
    var r = new Rectangle(random(0, width), random(0, height))
    group.push(r);

  } // for loop
  
  for (var c = 0; c <= num2; c++) {
    var h = new Ellipse(random(0, width), random(0, height))
    group2.push(h);

  } // for loop
  
}

function draw() {
  for (var b = 0; b < group.length; b++) {
    group[b].display(color(random(255), random(255), random(255)));
  }
  
  for (var d = 0; d < group2.length; d++) {
    group2[d].display(color(random(255)));
  }
  
} // end of draw

function searchText(word) {

  var total = 0;

  for (i = 0; i < parsedStory.length; i++) {
    if (parsedStory[i] == word) {
      total++;
    }
  }
  return total;
}