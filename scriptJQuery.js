$(function(){ // pour dire qu'on attends le fin de chargement du DOM pour commencer

    /*$('p').on('mouseenter',
        function(){
            $(this).hide("slow");
        }
    )*/ // cache les paragraphes clickés on peut utiliser dbclick etc
    
    $('p').on('mousedown', function(){
        $(this).hide("slow");
    });
    $('p').on("mousedown", 
    function(){
   $(this).show("slow");
    });



});