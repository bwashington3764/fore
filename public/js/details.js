const queryString = window.location.search;
console.log(queryString);

let i = 0;

if(queryString != '?desk=modern&utm_source=instagram'){
  console.log("Doing newsletter");
  setTimeout(function(){
    $('#exampleModalCenter').modal('show');
    i++;
  }, 10000);

  $(document).mouseleave(function () {
    if(i < 1)
      $('#exampleModalCenter').modal('show');

    i++;
  });
} else {
  console.log("Not doing newsletter");
}

$("#newsletterEmail").change(function() {
  $("#hiddenEmail").val($("#newsletterEmail").val());
})

$(".sign-up").click(function(){
  //$("#hiddenEmail").val($("#newsletterEmail").val());
  $(".sign-up").css("display", "none");
  $(".get-recommendations").html(`
    <h3 class="v-space-25">Thanks for signing up!</h3>
    <p>
      Look for home office inspiration in your inbox shortly.
      We'll send style advice, tips and tricks, and other info to
      keep you inspired and creating the functional space you love.
      You'll be working in style in no time.
    </p>
  `)
});
