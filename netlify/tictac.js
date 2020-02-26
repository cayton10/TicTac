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
    $('.square').mouseenter(function () {
      $(this).addClass('highlight');
    });  

    $('.square').mouseleave(function () {
      $('.square').removeClass('highlight');
    });
      
    



    

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
  

  //var result = '';
  //var userCounter = 0;
  
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
      //outline all win conditions. Tried other methods. Really wanted to use array comparison, but couldn't
      //find a way to make it happen. 
      //Win conditions for 'x' player
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
      //Win conditions for 'o' player
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
           //If board is full with no win conditions outlined above
       } else if(countTurn >= 9){
         alert('Cat scratch fever.');
         //Add to cat-record score
         $("#cat-record").html(parseInt($("#cat-record").html(), 10)+1);
       }

    };

/* ------------------------------- RESET BOARD ------------------------------ */
$("body").on("click", "#reset", function()
    {
      //remove all images
        $('img').remove();
        //reset background
        $('.square').css('background-image', '');
        //remove x & o classes from divs
        $('.square').removeClass('x');
        $('.square').removeClass('o');
        //reset turn counter
        countTurn = 0;
        //reset winner
        winner = '';
    });