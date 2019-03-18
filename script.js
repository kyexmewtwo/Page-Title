$("button").click(function(){
 var placeholder = $("input").val();
 $(".placeholder").append(placeholder);

    alert(`Hello ${placeholder}`);
    $('.Type your name').html(`Your name is ${placeholder}, correct?`);
 
});