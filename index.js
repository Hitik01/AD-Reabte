

$(document).ready(function(){
  $('#postBtn')
  .click(async (e) => {
    e.preventDefault()
    console.log('hello')
    axios.post('https://adrebate.herokuapp.com/api/submitform', {
    Name:"xxxx",Email:"xxxx",Phone:"xxxx",Message:"xxxx",Time:new Date().getMilliseconds()
    })
    .then(function (response) {
      console.log('response');
    })
    .catch(function (error) {
      console.log(error);
    });
  })

    //hamburger Toggle
    $('.hamburger').click(function(event){
    $('.menu-list').slideToggle(500);
    event.preventDefault();
    $('.menu-list li a').click(function(event) {
        if ($(window).width() < 768) {
          $('.menu-list').slideUp(500);
          event.preventDefault();
        }
      });
});

});
 

