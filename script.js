$(document).ready(function(){
    $('#autoWidth').lightSlider({
        autowidth:true,
        loop:true,
        onSliderload:function() {
            $('#autoWidth').removeclass('cS-hidden');
        }
    });
});