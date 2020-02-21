/* ------------------- ANIMATE ON SCROLL PLUGIN INITIALIZE ------------------ */

AOS.init({
    once: true
  });

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
var winCondition = [ [0,1,2], [3,4,5], [6,7,8] ];
var userChoices = [];
var computerChoices = [];
var countTurn = 0;
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
                console.log(userChoices);
                countTurn ++;
                console.log(countTurn);

                //check winner
                  if(countTurn > 2) 
                  {

                  }
                  console.log(computerChoices);
            //player turn
                computerChoice();
                
                
        }
    });

  });


/* -------------------- COMPUTER RANDOM SQUARE SELECTION -------------------- */

  function computerChoice (){

    countTurn = 0;
    computerChoices = [];
    //CHOICE = jQuery array of .squares without class 'x'.
    let choice = $(".square:not(.x,.o)");
    //computer choice =  
    let compChoice = choice[Math.floor(Math.random() * choice.length)];

    console.log(compChoice);
    //add 'chosen' class to div element
    $(compChoice).addClass('o');

    $(compChoice).html("<img class='img-fluid' src='o.png' />");
    computerChoices = ($(compChoice).index('.square'));
    return computerChoices
    console.log(computerChoices);
    countTurn++;
    console.log(countTurn)
  };