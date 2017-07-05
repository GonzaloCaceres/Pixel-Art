var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable jQuery para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var $colorPersonalizado = $('#color-personalizado');
var indicador;
$colorPersonalizado.change(function() {
  // Se guarda el color de la rueda en colorActual
  colorActual = $colorPersonalizado.val();
  console.log("color pers",colorActual);
  indicador=colorActual;
  // Completar para que cambie el indicador-de-color al colorActual

});
$colorPersonalizado.click(function(){
  colorActual = $colorPersonalizado.val();
  console.log("color pers",colorActual);
  indicador=colorActual;
});

$("#indicador-de-color").click(function(){
  colorActual = $(this).css("background-color");
  indicador=colorActual;
});

var paleta = $("#paleta");
$(nombreColores).each(function(val) {
  $(paleta).append("<div class=color-paleta style=background-color:"+nombreColores[val]+">");

});
var grilla = $("#grilla-pixeles");
for (var i = 0 ; i<1750 ; i++){
  $(grilla).append("<div class=pixels id="+i+">");
}
$(".color-paleta").each(function(val){
$(this).click( function(){
  indicador=nombreColores[val];
 $("span").css("background-color",indicador);
});
});

var apretado=0;
  $(".pixels").mousedown(function(){
    $(this).css("background-color",indicador);
    apretado=1;
});
$(".pixels").mouseup(function(){
  apretado=0;
});

function borrar (){
  $(".pixels").animate({backgroundColor: 'White'},"slow");
 //  $(".pixels").fadeOut( 1000, function() {
 //    $(".pixels").css("background-color","White");
 // });
}
$("#batman").click(function(){cargarSuperheroe(batman)});
$("#wonder").click(function(){cargarSuperheroe(wonder)});
$("#flash").click(function(){cargarSuperheroe(flash)});
$("#invisible").click(function(){cargarSuperheroe(invisible)});


$(".pixels").mouseover(function(){
  if (apretado==1){
$(this).css("background-color",indicador);
}
  });
