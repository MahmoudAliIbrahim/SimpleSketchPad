var penColor = "black";
$(document).ready(function(){
    createGrid(16);
    mouseHover();
    $(".color").click(function(){
        var id = $(this).attr('id');
        switch(id){
            case 'red':
            penColor="red";
            break;
            case 'yellow':
            penColor="yellow";
            break;
            case 'brown':
            penColor="brown";
            break;
            case 'orange':
            penColor="orange";
            break;
            case 'green':
            penColor="green";
            break;
            case 'gray':
            penColor="gray";
            break;  
            case 'blue':
            penColor="blue";
            break;
            case 'black':
            penColor="black";
            break;
        };
    });
});

var createGrid = function(numofGrids){
    $("#container").html("");
    var width = $("#container").width();
    var gridwidth = width/numofGrids;
    var container = $("#container");
    for (var i = 0;i<Math.floor(numofGrids/2)-1;i++){
         for (var j = 0;j<numofGrids;j++){
                 container.append('<div class="gridSquare"></div>');
            } 
       }
    $(".gridSquare").css("border","1px solid lightgray");
    $(".gridSquare").css("width",gridwidth-2);
    $(".gridSquare").css("height",gridwidth-2);
    $(".gridSquare").css("float","right");

}
var mouseHover = function(){
    $(".gridSquare").click(function(){
        if($(this).hasClass("mouseHover")){
             $(this).removeClass("mouseHover");
             $(this).css("background-color","white");
        }else{
              $(this).addClass("mouseHover");
              $(this).css("background-color",penColor);
        }
    });
}

var setup = function(){
    do{
    var size = prompt("Enter the size of the grid S x S :");
    }while(size > 65);
    createGrid(size);
    mouseHover();
}
