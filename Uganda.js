//modal code
$(document).ready(function() 
{ 
$("#myModal").modal('hide'); 
}); 

//popover  code
$(function(){
$('[data-toggle="popover"]').popover ()
})

//tooltip code
$(function(){
$('[data-toggle="tooltip"]').tooltip()
})

//toggle question code 1
$(document).ready(function() 
{ 

$("#shbtn1").click(function() 
{ 

$("#d1").toggle(); 

}); 

}); 

//toggle question code 2
$(document).ready(function() 
{ 

$("#shbtn2").click(function() 
{ 

$("#d2").toggle(); 

}); 

}); 

//toggle question code 3
$(document).ready(function() 
{ 

$("#shbtn3").click(function() 
{ 

$("#d3").toggle(); 

}); 

}); 

//toggle question code 4
$(document).ready(function() 
{ 

$("#shbtn4").click(function() 
{ 

$("#d4").toggle(); 

}); 

}); 

//toggle question code 5
$(document).ready(function() 
{ 

$("#shbtn5").click(function() 
{ 

$("#d5").toggle(); 

}); 

}); 

//toggle question code 6
$(document).ready(function() 
{ 

$("#shbtn6").click(function() 
{ 

$("#d6").toggle(); 

}); 

}); 

//toggle question code 7
$(document).ready(function() 
{ 

$("#shbtn7").click(function() 
{ 

$("#d7").toggle(); 

}); 

}); 

//toggle question code 8
$(document).ready(function() 
{ 

$("#shbtn8").click(function() 
{ 

$("#d8").toggle(); 

}); 

}); 


//toggle question code 9
$(document).ready(function() 
{ 

$("#shbtn9").click(function() 
{ 

$("#d9").toggle(); 

}); 

}); 

//toggle question code 10
$(document).ready(function() 
{ 

$("#shbtn10").click(function() 
{ 

$("#d10").toggle(); 

}); 

}); 

//toggle question code 11
$(document).ready(function() 
{ 

$("#shbtn11").click(function() 
{ 

$("#d11").toggle(); 

}); 

}); 

//toggle question code 12
$(document).ready(function() 
{ 

$("#shbtn12").click(function() 
{ 

$("#d12").toggle(); 

}); 

}); 


$(document).ready(function(){
$("h5").animate({
color: "teal"
});
});

//previous page
function tunisia(){
open("https://salmandascript.github.io/Tunisia/Tunisia.html");
}

//previous page
function zambia(){
open("https://salmandascript.github.io/Zambia/Zambia.html");
}

//quizz questions code 
function checkAnswer()
  {
   var totQuestion = 12;

   var ansQuestion = 0;

   var rightAns = 0;

   for (var i = 1; i <= totQuestion; i++)
   {
    var elem = document.getElementsByName("q" + i);

    for (var j = 0; j < elem.length; j++)
    {
     if (elem[j].checked)
     {

      ansQuestion++;

      if (elem[j].dataset.answer == 1)
      {
       rightAns++;
      }

     }
    }
   }

   if (ansQuestion != totQuestion)
   {
    alert("Please answer all questions");
   }
   else
   {
    alert("Your Score is " + rightAns + " Out Of " + totQuestion);
   }
  }
  //quizz question code end 
  