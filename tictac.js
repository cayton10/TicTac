/* ------------------- ANIMATE ON SCROLL PLUGIN INITIALIZE ------------------ */

AOS.init({
    once: true
  });



/* ---------------------------- global variables ---------------------------- */
var winCondition = [[0,1,2], [0,3,6], [0,4,8], [1,4,7], [2,4,6], [2,5,8], [3,4,5], [6,7,8]];
var userChoices = [];
var computerChoices = [];
var countTurn = 0;
var winner = '';
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
                //APPEND square index TO USERCHOICES ARRAY
                userChoices.push($('.square').index($(this)));

                countTurn ++;
 

                

                  
            //Call computer choice function.
            //Appends .square index val to computerChoices array
                computerChoices.push(computerChoice());

                //After 3 turns, Check for winner
                if(countTurn > 3) 
                {
                  checkWinner();
                }

                if(winner !== ''){
                  alert(winner);
                }
                
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
  

  var result = '';
  var userCounter = 0;
  
  //Iterate through win condition array
  /*for (var i = 0; i < winCondition.length; i++ ){
  //Checks winCondition first, player selections second.
  //Iterate through userChoices array  
    for(var x = 0; x < userChoices.length; x++){
      result = $.inArray(userChoices[x], winCondition[i]);
      console.log(userChoices[x] + 'userChoice' + winCondition[i])
      console.log('result: ' + result);
      //First control flow: Increment userCounter if userChoices are found within winCondition array. 
      if (result !== -1) {
        userCounter++;
        console.log("userCounter: " + userCounter);
      }  
      if (userCounter == 3) {
        alert('You win!');
        break;
      }
       };
      };

      
*/  


      if ($('#zero').hasClass('x') && $('#one').hasClass('x') && $('#two').hasClass('x') || 
          $('#three').hasClass('x') && $('#four').hasClass('x') && $('#five').hasClass('x') ||
          $('#six').hasClass('x') && $('#seven').hasClass('x') && $('#eight').hasClass('x') ||
          $('#zero').hasClass('x') && $('#three').hasClass('x') && $('#six').hasClass('x') ||
          $('#zero').hasClass('x') && $('#four').hasClass('x') && $('#eight').hasClass('x') ||
          $('#one').hasClass('x') && $('#four').hasClass('x') && $('#seven').hasClass('x') ||
          $('#two').hasClass('x') && $('#five').hasClass('x') && $('#eight').hasClass('x') ||
          $('#two').hasClass('x') && $('#four').hasClass('x') && $('#six').hasClass('x')
      ) {
        winner = 'You won!';
        $("#player-score").html(parseInt($("#player-score").html(), 10)+1);
           message = "HA HA, human beats AI";
        $('#message').html(message + "<button id='reset'>Reset</button>");
        
      } else if ($('#zero').hasClass('o') && $('#one').hasClass('o') && $('#two').hasClass('o') || 
                $('#three').hasClass('o') && $('#four').hasClass('o') && $('#five').hasClass('o') ||
                $('#six').hasClass('o') && $('#seven').hasClass('o') && $('#eight').hasClass('o') ||
                $('#zero').hasClass('o') && $('#three').hasClass('o') && $('#six').hasClass('o') ||
                $('#zero').hasClass('o') && $('#four').hasClass('o') && $('#eight').hasClass('o') ||
                $('#one').hasClass('o') && $('#four').hasClass('o') && $('#seven').hasClass('o') ||
                $('#two').hasClass('o') && $('#five').hasClass('o') && $('#eight').hasClass('o') ||
                $('#two').hasClass('o') && $('#four').hasClass('o') && $('#six').hasClass('o')
      ) {
           winner = 'Computer won!';
           $("#opponent-score").html(parseInt($("#opponent-score").html(), 10)+1);
       } else if(countTurn >= 9){
         alert('Cat scratch fever.');
         $("#cat-record").html(parseInt($("#cat-record").html(), 10)+1);
       }

       if (winner == "player")
       {
           $("#playerWins").html(parseInt($("#playerWins").html(), 10)+1);
           message = "HA HA, human beats AI";
           $('#message').html(message + "<button id='reset'>Reset</button>");
       }
       else if (winner == "computer")
       {
           $("#computerWins").html(parseInt($("#computerWins").html(), 10) +1);
           message = "AI is taking over the world. The Matrix lives.";
           $('#message').html(message + "<button id='reset'>Reset</button>");
       }

    };

/* ------------------------------- RESET BOARD ------------------------------ */
$("body").on("click", "#reset", function()
    {
        $('img').remove();
        $('.square').css('background-image', '');
        $('.square').removeClass('x');
        $('.square').removeClass('o');
        countTurn = 0;
        winner = '';
        $('#prompt').toggle();
        // PLEASE NOTE... if using data removeData does not remove data- attribute
        // data so you have to use both removeData and removeAttr to wipe out 
        // data attributes
        $('#computerImage').removeData('image').removeAttr('data-image');
    });