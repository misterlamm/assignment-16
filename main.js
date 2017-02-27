//
// var o = document.querySelector('output'),
// m = document.querySelector('#message')
// start = document.querySelector('#start');
//
//
// start.addEventListener('click', function(){
//     var mm = parseInt(m.value),
    // timer = function(){
    var timeoutHandle;
    function countdown(minutes) {
        var seconds = 60;
        var mins = minutes
        function tick() {
            var counter = document.getElementById("countdown-timer");
            var current_minutes = mins-1
            seconds--;
            counter.innerHTML =
            current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
            if( seconds > 0 ) {
                timeoutHandle=setTimeout(tick, 1000);
            } else {

                if(mins > 1){
                   setTimeout(function () { countdown(mins - 1); }, 1000);

                }
            }
        }
        tick();
    }

    countdown(25);
