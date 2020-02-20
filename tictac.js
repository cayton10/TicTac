/* ------------------- ANIMATE ON SCROLL PLUGIN INITIALIZE ------------------ */

AOS.init({
    once: true
  });

/* ---------------------------- ON DOCUMENT LOAD ---------------------------- */

  $(document).ready(function()
  {

/* ------------------------- ANIMATIONS ON PAGE LOAD ------------------------ */

    $(".container-fluid").hide(0).fadeIn(1200);

    //Footer dynamic year update
    document.getElementById('copyrightYear').innerHTML = new Date().getFullYear();

/* --------------------------- mouse over squares --------------------------- */


/* ---------------------------- ON CLICK ADD PLAY --------------------------- */
    $('.square').on(click, )


  });