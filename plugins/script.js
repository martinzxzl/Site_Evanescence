$(document).ready(function(){

    $('.zoom-gallery').magnificPopup({

        delegate: 'a',

        type: 'image',

        gallery:{
            enabled:true
        },

        zoom:{
            enabled:true,
            duration:300
        }

    });

});