$('.responsive').slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
$(document).ready(function(){
    $(".Acake").click(function(){
        $("#pc1").show();
        $("#mc2").show();
        $("#mc3").hide();
        $("#mc4").hide();
        $("#mc5").hide();
        $("#mc6").hide();
        $("#mc7").hide();
    });
    $(".Cake").click(function(){
        $("#pc1").show();
        $("#mc2").hide();
        $("#mc3").show();
        $("#mc4").hide();
        $("#mc5").hide();
        $("#mc6").hide();
        $("#mc7").hide();
    });
    $(".Scake").click(function(){
        $("#pc1").show();
        $("#mc2").hide();
        $("#mc3").hide();
        $("#mc4").show();
        $("#mc5").hide();
        $("#mc6").hide();
        $("#mc7").hide();
    });
    $(".Cpastry").click(function(){
        $("#pc1").show();
        $("#mc2").hide();
        $("#mc3").hide();
        $("#mc4").hide();
        $("#mc5").show();
        $("#mc6").hide();
        $("#mc7").hide();
    });
    $(".Eclairs").click(function(){
        $("#pc1").show();
        $("#mc2").hide();
        $("#mc3").hide();
        $("#mc4").hide();
        $("#mc5").hide();
        $("#mc6").show();
        $("#mc7").hide();
    });
    $(".Strudels").click(function(){
        $("#pc1").show();
        $("#mc2").hide();
        $("#mc3").hide();
        $("#mc4").hide();
        $("#mc5").hide();
        $("#mc6").hide();
        $("#mc7").show();
    });
    $(".xx").click(function(){
        $("#pc1").hide();
    });
    $("#remove1").click(function(){
      $("#AC").hide();
    });
    $("#remove2").click(function(){
      $("#CA").hide();
    });
    $("#remove3").click(function(){
      $("#SC").hide();
    });
    $("#remove4").click(function(){
      $("#CP").hide();
    })
})