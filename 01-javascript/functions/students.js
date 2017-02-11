console.log('JAVASCRIPT for students works');

var students = ['gat', 'hermi', 'kevin', 'barry', 'mark', 'sandesh', 'soul', 'julian', 'zach', 'sam', 'willm', 'kerry', 'aniko', 'marta', 'alfonso', 'willo', 'gerard'];

// write a function which accepts 2 arguments
// the array
// groups of eg 3

// return a nested array of the groups

// [['marta', 'sam', 'mark'],['helmi', 'aniko',],[],[]];'


var numberOfPeopleInGroup = Math.floor(prompt('Enter the desired number of people in a group')); // converts input to an integer (whole number)
var classroomSize = students.length;
var numberOfGroups = Math.floor(classroomSize / numberOfPeopleInGroup); // calculates how many groups there will be
var remainder = classroomSize % numberOfPeopleInGroup; // calculates remaining people not in a group
var remainderCounter = classroomSize - remainder;
var ifRemainderLargerThanNumberOfGroups = remainder - numberOfGroups;

//var objectArray = [{

//}];

var groupCounter = 0;
var peopleCounter = 0;
//var testObject ={};
var array1 = [];
var counter = 0; // index counter for students array
var student = [];
//var testindex = 1;
//var groups = [['gat', 'hermi', 'kevin', 'barry'],['mark','sandesh','soul','julian']];


var classSplitIntoGroups = function(numberOfPeopleInGroup, numberOfGroups){
  for (groupCounter = 0; groupCounter < numberOfGroups; groupCounter++){ // loops for the number of groups
    for (peopleCounter = 0; peopleCounter < numberOfPeopleInGroup;  peopleCounter++){ // while in loop in group loop - it will loop and add students one by one to that group
      student.push(students[counter]); // keeps student adding to the student array
      array1[groupCounter] = student; // student array keeps overwriting as it keeps being assigned to array1
    //  console.log(student);
    //  console.log(array1);
    //objectArray.group += student;
    //console.log(counter); // test console log
      counter ++; // students index counter
      };
      student = []; // clears the array student ready fo the next set of group
    };

//console.log('number of peopleInGroupCount' + numberOfPeopleInGroup); testing to see what the couple is
//console.log('group counter' + groupCounter);

  if(remainder !== 0){
    if(ifRemainderLargerThanNumberOfGroups > numberOfGroups){
      alert('Remaining People is larger than the amount of groups - please choose a smaller amout of people per group');
    } else {
      for (groupCounter = 0; groupCounter < remainder; groupCounter++){
        array1[groupCounter].push(students[remainderCounter]); // add remaining people to group by using push funciton.
        //student.push(students[remainderCounter]);
        //array1[groupCounter] = student;
        remainderCounter++;

        //console.log('sum of number of people and group counter:'+ (numberOfPeopleInGroup + groupCounter));
        //console.log('number of peple in a group:'+ numberOfPeopleInGroup);
        //console.log('group counter:' + groupCounter);
        //student = [];
      };

    };

  };
//console.log('number of peopleInGroupCount' + numberOfPeopleInGroup);
//console.log('group counter' + groupCounter);
  //  console.log(ifRemainderLargerThanNumberOfGroups);
    console.log(array1);
    console.log(remainder + " left out of the group, they have been added to the existing groups");
};


classSplitIntoGroups(numberOfPeopleInGroup,numberOfGroups);
/*while(counter < classroomSize){
  for (var group = 0; group < numberOfGroups; group++){
    for (var people = 0; people < numberOfPeopleInGroup;  people++){
      var student = students[counter];
      counter ++;
      array1[counter][people] += student;
    };
  };
};*/
