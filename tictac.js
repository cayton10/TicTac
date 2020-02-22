/* ------------------- ANIMATE ON SCROLL PLUGIN INITIALIZE ------------------ */

AOS.init({
    once: true
  });



/* ---------------------------- global variables ---------------------------- */
var winCondition = [[0,1,2], [0,3,6], [0,4,8], [1,4,7], [2,4,6], [2,5,8], [3,4,5], [6,7,8]];
var userChoices = [];
var computerChoices = [];
var countTurn = 0;
var winner;
/* -------------------------------------------------------------------------- */
/*                              ON DOCUMENT LOAD                              */
/* -------------------------------------------------------------------------- */
  $(document).ready(function()
  {

/* ------------------------- animation on page load ------------------------- */

    $(".container-fluid").hide(0).fadeIn(1200);

    //Footer dynamic year update
    document.getElementById('copyrightYear').innerHTML = new Date().getFullYear();

/* --------------------------- mouse over squares --------------------------- */




    // check in all 8 directions, +10
    // play against AI, +20
    // make it to where I as a player cannot beat the AI, +10

/* ---------------------------- declare variables --------------------------- */




    /* ----------------------------- register clicks ---------------------------- */

    $('.square').click(function()
    {

        // IF this square is empty...
        if ($(this).html() == "")  // checks to see if what you clicked on was blank < -- thanks
        {
            //player turn
                $(this).html("<img class='img-fluid' src='x.png' />");
                $(this).addClass('x');
                //APPEND USER CHOICE TO USERCHOICES ARRAY
                userChoices.push($('.square').index($(this)));

                countTurn ++;
 

                //check winner
                  if(countTurn > 2) 
                  {
                    checkWinner();
                  }

                  if(winner != null){
                    alert(winner + 'Wins!');
                  }
                  
            //Call computer choice function.
            //Appends .square index val to computerChoices array
                computerChoices.push(computerChoice());
                
        }
    });

  });


/* -------------------- COMPUTER RANDOM SQUARE SELECTION -------------------- */

  function computerChoice (){
    //countTurn for winner check
    //CHOICE = jQuery array of .squares without class 'x'.
    let choice = $(".square:not(.x,.o)");
    //computer choice =  choice [inside this array is our list of non 'x' class squares]
    //[math.floor to round, math random * no. of squares still available]
    let compChoice = choice[Math.floor(Math.random() * choice.length)];

    //add 'o' class to div element for computer choice
    $(compChoice).addClass('o');
    //add o image for computer choice. 
    $(compChoice).html("<img class='img-fluid' src='o.png' />");
    countTurn++;
    //return this value to store in computerChoices array to check winning conditions.
    return $(compChoice).index('.square'); 
  };

/* -------------------------------------------------------------------------- */
/*                            CHECK WINNER FUNCTION                           */
/* -------------------------------------------------------------------------- */
function checkWinner(){
  
  //Sort arrays
  userChoices.sort();
  computerChoices.sort();
  
  //Iterate through win condition array
  for (var i = 0; i < winCondition.length; i++ ){
  //Checks winCondition first, player selections second.
  //Iterate through userChoices array  
    for(var x = 0; x < userChoices.length; x++){
      //Since arrays are sorted, extraneous or negligable to win values are ignored with the setup below
      if(winCondition[i][0] == userChoices[0] && winCondition[i][1] == userChoices[1] && winCondition[i][2] && userChoices[2]){
        winner = "player";
        console.log('you won');
        console.log(winCondition[i], userChoices);
        console.log(countTurn);
      } else if (countTurn > 8){
        winner = "Ted Nugent";
        console.log('Ted Nugent');
      } else {
        break;
      }
    }
  }
  //Iterate through win condition array
  for (var i = 0; i < winCondition.length; i++){
    //Check win condition first, computer selections second.
    //Iterate through computerChoices array
      for(var x = 0; x < computerChoices.length; x++){
        if (winCondition[i][0] == computerChoices[0] && winCondition[i][1] == computerChoices[1] && winCondition[i][2] && computerChoices[2]) {
          winner = "computer";
      } else {
        return;
      }
    }
  }
};