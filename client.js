$(function(){

     // preload audio
     var toast = new Audio('toast.wav');

    $('.code').on('click', function(e) {
        e.preventDefault();
        // first pause the audio (in case it is still playing)
        toast.pause();
        // reset the audio
        toast.currentTime = 0;
         // play audio
         toast.play();
         $("#product").html($(this).data("name"))
         $("#code").html($(this).data("code"))

        $('#toast').toast({ autohide: false }).toast('show');
    });

    //where code below came from https://www.geeksforgeeks.org/how-to-detect-escape-key-press-using-jquery/#:~:text=To%20detect%20escape%20key%20press%2C%20keyup%20or%20keydown%20event%20handler,is%20released%20from%20the%20keyboard.
    $(document).on('keydown', function(event) {
        if (event.key == "Escape") {
            $('#toast').toast('dispose');
        }
    });

    
});

