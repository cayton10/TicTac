AOS.init({
    once: true
  })

  $(document).ready(function()
  {
    
    /*LIFTED THIS FROM https://stackoverflow.com/questions/30139622/how-to-set-a-divs-height-equal-to-that-divs-width*/
    //GRABS width of .square class divs and applies that value to height to maintain apsect ratio. 

    $('.square').height(function(){
      return $(this).width();
    });

  });