$(function(){
    $('button').click(hendleClick);
});


function hendleClick(){
    $('h1').html('Hello jQuery');
    $('button').unbind('click', hendleClick);
    $('button').click(hendlSecondClick);
}

function hendlSecondClick() {
    $('h1').toggle('slow');
}