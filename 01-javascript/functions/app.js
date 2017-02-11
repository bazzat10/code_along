console.log('JAVASCRIPT WORKING for App');

var background_color = 'brown';

var  letThereBeLight = function () {
  document.body.style.backgroundColor = 'white';
  background_color = 'white';
};

var  letThereBeDarkness = function () {
    document.body.style.backgroundColor = 'brown';
    background_color = 'brown';
  };

var toggle_switch = function () {

  console.log('toggle switch work');
  if (background_color === 'white'){
    console.log('background color is white - switching  to brown');
    letThereBeDarkness();
  } else {
    console.log('background color is brown - switching  to white');
    letThereBeLight();

  /*if (background_color === 'brown'){
    console.log('background color is brown - switching  to white');
    letThereBeLight();*/ // comment out do no use because it will fire both stations when background is BROWN
  };
};


document.body.addEventListener('click', toggle_switch);


//if (document.body.style.backgroundColor === 'brown'){

//};



//if (document.body.style.backgroundColor === 'white'){
  //document.body.addEventListener('click', letThereBeDarkness);
//};
