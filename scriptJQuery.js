$(function(){ // pour dire qu'on attends le fin de chargement du DOM pour commencer

    /*$('p').on('mouseenter',
        function(){
            $(this).hide("slow");
        }
    )*/ // cache les paragraphes clickés on peut utiliser dbclick etc
    
    $('p').on('mouseenter', function(){
        $(this).hide("slow");
    }).on('mouseleave', 
    function(){
        $(this).show("slow");
    });



});