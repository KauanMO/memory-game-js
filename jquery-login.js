$(document).ready(() => {
  setTimeout(() => {
    $("#titulo").css("opacity", "1");
  }, 500);

  setTimeout(() => {
    $("#clique").css("opacity", "1");
  }, 800);

  $(document).one("click", () => {
    $("#clique").css("opacity", "0");
    setTimeout(() => {
      $("#titulo").css("top", "30vh");
    }, 400);

    setTimeout(() => {
      $(".form-login").css("opacity", "1");
      $("#user").css("cursor", "text");
    }, 1300);
  });

  $("#submit").click(() => {
    var user = $("#user").val();
    console.log(user);

    $("#img-emote").fadeOut("slow");
    $("#submit").fadeOut("slow");
    $("#user").fadeOut("slow");
    setTimeout(()=>{
        $("#titulo").css("top", "9vh");
        $("#titulo").css("top", "10vh");
        $("#change").addClass("toGame");
    }, 300)

    setTimeout(()=>{
      $("#change").removeClass('form-login');
      $("#change").removeClass('toGame');
      $("#change").addClass("Game");
      $('.cards').css('display', 'grid');
      $('.card').css('display', 'unset');

      if($(window).width() <= 425 && $(window).width() >= 320){
        $(window).on('orientationchange', () => {
          if($(window).orientation == 0){
            $('#vire-tela').css('opacity', '1')
          }else{
            $('#vire-tela').css('opacity', '0')
          }
        })
      }
  }, 1500)
  });
});
