$(function() {
    $('form input[type=submit]').click(sendForm);
})

function sendForm(e) {
    e.preventDefault();
    $.ajax({
            url: "https://formspree.io/melnik22222@gmail.com",
            method: "POST",
            data: {
                name: $('#name').val(),
                email: $('#email').val(),
                text: $('#comment').val()
            },
            dataType: "json"
        })
        .done(function() {
            $('form')[0].reset();
            alert("thank you!");
        })
        .fail(function(e) { 
            alert("sorry");
        });
}