var tabla;
var map;
var rotate;

var colombia;
var china;
var usa;
var brazil;

var mundo;

var soldado;

var xColombia;
var yColombia;
var xChina;
var yChina;
var xUsa;
var yUsa;
var xBrazil;
var yBrazil;

var INTRODUCCION = 0;
var INSTRUCCIONES = 1;
var INTERACCION = 2;
var INFORMACION = 3;
var COMPARACION = 4;
var REINICIO = 5;

var estado = INTRODUCCION;

var frameInicio;

var cantidad; //cantidad de soldados leídos de la tabla para hacer los calculos necesarios


function preload() {
  tabla = loadTable('assets/tabla.csv', 'csv', 'header');
  map = loadImage('assets/map.jpg');
  rotate = loadImage('assets/rotate-ipad.png');
  colombia = loadImage('assets/colombia.png');
  china = loadImage('assets/china.png');
  usa = loadImage('assets/united-states.png');
  brazil = loadImage('assets/brazil.png');
  mundo = loadImage('assets/worldwide.png');
  soldado = loadImage('assets/soldier.png');


}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  frameInicio = 0;

  xColombia = width / 2 - 64;
  yColombia = 30;
  xChina = width - 178;
  yChina = height / 2 - 64;
  xUsa = 50
  yUsa = height / 2 - 64;
  xBrazil = width / 2 - 64;
  yBrazil = height - 158

  cantidad = 0;
}

function draw() {
  if (estado == INTRODUCCION) {
    image(map, 0, 0, width, height);
    background(0, 0, 0, 100);
    fill(255);
    noStroke();
    strokeWeight(4);
    textSize(40);
    textAlign(CENTER, CENTER);
    text("Milicias del mundo", width / 2, height / 4);
    textSize(20);
    text("Cuando pensamos en los ejércitos más grandes y poderosos del mundo \n probablemente pensemos en países como Estados Unidos o China o incluso Brasil en el caso de Latinoamérica. \n Sin embargo sorprende ver que el ejército colombiano es en proporción de los más grandes y mejor financiados del mundo. ", width / 2, height / 2);
    if (mouseIsPressed)
      estado = INSTRUCCIONES;
  }

  if (estado == INSTRUCCIONES) {
    image(map, 0, 0, width, height);
    background(0, 0, 0, 150);
    image(rotate, width / 2 - 150, height / 2 - 200, 300, 280);
    textSize(25);
    noStroke();
    text("Desplazar el mundo a una bandera para seleccionar un país \n Rotar el iPad hacia cada una de las 4 orientación para ver la informacion", width / 2, height / 2 + 150);

    if (mouseIsPressed)
      estado = INTERACCION;

  }


  if (estado == INTERACCION) {
    
     image(map, 0, 0, width, height);
    background(0, 0, 0, 200);

    if (dist(mouseX, mouseY, xColombia, yColombia) < 100) {
      cantidad = tabla.getNum(23, 2);
      cantidad = ceil(cantidad /= 100000);

    }

    if (dist(mouseX, mouseY, xChina, yChina) < 100) {
      cantidad = tabla.getNum(11, 2);
      cantidad = ceil(cantidad /= 100000);

    }
     if (dist(mouseX, mouseY, xUsa, yUsa) < 100) {
      cantidad = tabla.getNum(34, 2);
      cantidad = ceil(cantidad /= 100000);

    }
     if (dist(mouseX, mouseY, xBrazil, yBrazil) < 100) {
      cantidad = tabla.getNum(1, 2);
      cantidad = ceil(cantidad /= 100000);

    }
    print(cantidad);
    for (i = 0; i < cantidad; i++) {
      image(soldado, 50 + i * 50, height/2 + 100 , 50, 50);
    }

    image(colombia, xColombia, yColombia);
    image(china, xChina, yChina);
    image(usa, xUsa, yUsa);
    image(brazil, xBrazil, yBrazil);

    image(mundo, mouseX - 50, mouseY - 50, 100, 100);
  }

}