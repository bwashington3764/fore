const queryString = window.location.search;
console.log(queryString);

let i = 0;

setTimeout(function(){
  $('#exampleModalCenter').modal('show');
 }, 10000);

$(document).mouseleave(function () {
  if(i < 1)
    $('#exampleModalCenter').modal('show');

  i++;
});

$("#newsletterEmail").change(function() {
  $("#hiddenEmail").val($("#newsletterEmail").val());
})

$(".sign-up").click(function(){
  //$("#hiddenEmail").val($("#newsletterEmail").val());
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