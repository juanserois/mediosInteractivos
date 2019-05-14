var tabla;
var map;
var rotate;

var colombia;
var china;
var usa;
var brazil;

var mundo;
var soldado;
var money;

var right;
var left;
var restart;

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
var COMPARACION = 3;

var COLOMBIA = 0;
var CHINA = 1;
var BRAZIL = 2;
var USA = 3;

var estado = INTRODUCCION;

var cantidad; //dato leido de la tabla para hacer los calculos necesarios
var pais;

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
  right = loadImage('assets/right.png');
  left = loadImage('assets/left.png');
  money = loadImage('assets/money.png');
  restart = loadImage('assets/restart.png');
  titulo = loadFont('assets/titulo.ttf');

}

function touchMoved() {
  return false;
}

function touchEnded() {
  if (estado == INTRODUCCION) {
    estado = INSTRUCCIONES;
    return false;
  }

  if (estado == INSTRUCCIONES) {
    estado = INTERACCION;
    return false;
  }

}

function setup() {
  createCanvas(windowWidth, windowHeight);

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
  fill(255);
  if (estado == INTRODUCCION) {
    image(map, 0, 0, width, height);
    background(0, 0, 0, 150);
    fill(255);
    noStroke();
    strokeWeight(4);
    textSize(50);
    textAlign(CENTER, CENTER);
    textFont(titulo);
    text("{Milicias del mundo}", width / 2, height / 4);
    textSize(22);
    text("Cuando pensamos en los ejércitos más grandes y poderosos del mundo \n probablemente pensemos en países como: \n Estados Unidos, China o incluso Brasil en el caso de Latinoamérica. \n Sin embargo sorprende ver que en el ejercito colombiano \n haya un porcentage mayor de la población del país \n y se use un mayor porcentaje del PIB del país para financiarlo.", width / 2, height / 2);
    textSize(25);
    text("Toca en cualquier parte para continuar", width / 2, height - 30);
  }


  if (estado == INSTRUCCIONES) {
    image(map, 0, 0, width, height);
    background(0, 0, 0, 150);
    textSize(30);
    text("Instrucciones", width / 2, 100);
    image(rotate, width / 2 - 100, height / 2 - 120, 200, 200);
    textSize(25);
    noStroke();
    text("Desplazar el mundo a una bandera para seleccionar un país \n Rotar el iPad  para ver diferente información", width / 2, height / 2 + 150);
    textSize(25);
    text("Toca en cualquier parte para continuar", width / 2, height - 30);
  }


  if (estado == INTERACCION) {

    image(map, 0, 0, width, height);
    background(0, 0, 0, 180);


    image(right, width - 90, height - 90, 80, 80);

    image(colombia, xColombia, yColombia);
    image(china, xChina, yChina);
    image(usa, xUsa, yUsa);
    image(brazil, xBrazil, yBrazil);

    textSize(25);
    text("Toca en la flecha para continuar", width / 2, height - 30);

    image(mundo, mouseX - 50, mouseY - 50, 100, 100);

    if (rotationX > -30 && rotationX < 30 && rotationY < -45 && rotationY > -90) {

      if (dist(mouseX, mouseY, xColombia, yColombia) < 120) {
        cantidad = tabla.getNum(23, 2);
        cantidad = ceil(cantidad /= 100000);
        pais = COLOMBIA;
      }

      if (dist(mouseX, mouseY, xChina, yChina) < 120) {
        cantidad = tabla.getNum(11, 2);
        cantidad = ceil(cantidad /= 100000);
        pais = CHINA;
      }
      if (dist(mouseX, mouseY, xUsa, yUsa) < 120) {
        cantidad = tabla.getNum(34, 2);
        cantidad = ceil(cantidad /= 100000);
        pais = USA;
      }
      if (dist(mouseX, mouseY, xBrazil, yBrazil) < 120) {
        cantidad = tabla.getNum(1, 2);
        cantidad = ceil(cantidad /= 100000);
        pais = BRAZIL;
      }
      for (i = 0; i < cantidad; i++) {
        if (i <= 9)
          image(soldado, 235 + i * 50, (height / 2 - 100), 50, 50);
        if (i > 9 && i < 20)
          image(soldado, 235 + (i - 10) * 50, (height / 2), 50, 50);
        if (i > 19)
          image(soldado, 235 + (i - 20) * 50, (height / 2 + 100), 50, 50)
      }
      textSize(18);

      text("Cada soldado representa 100´000 tropas", width / 2, 200)

    }

   else if (rotationX > 30 && rotationY > -80 && rotationY < 80) {

      if (dist(mouseX, mouseY, xColombia, yColombia) < 120) {
        cantidad = tabla.getNum(23, 3);
        cantidad = (cantidad /= 100000000000000);
        pais = COLOMBIA;
      }

      if (dist(mouseX, mouseY, xChina, yChina) < 120) {
        cantidad = tabla.getNum(11, 3);
        cantidad = (cantidad /= 100000000000000);
        pais = CHINA;
      }
      if (dist(mouseX, mouseY, xUsa, yUsa) < 120) {
        cantidad = tabla.getNum(34, 3);
        cantidad = (cantidad /= 100000000000000);
        pais = USA;
      }
      if (dist(mouseX, mouseY, xBrazil, yBrazil) < 120) {
        cantidad = tabla.getNum(1, 3);
        cantidad = (cantidad /= 100000000000000);
        pais = BRAZIL;
      }
      textSize(22);
      text("Gasto percentual del PIB \n usado para  financiar \n las fuerzas armadas: " + cantidad + " %", width / 2, height / 2)
    }

   else if (rotationX < -30 && rotationY > -80 && rotationY < 80) {

      if (dist(mouseX, mouseY, xColombia, yColombia) < 120) {
        cantidad = tabla.getNum(22, 4);
        cantidad *= 0.00031;
        cantidad = ceil(cantidad /= 1000000);
        pais = COLOMBIA;

      }

      if (dist(mouseX, mouseY, xChina, yChina) < 120) {
        cantidad = tabla.getNum(11, 4);
        cantidad *= 0.15;
        cantidad = ceil(cantidad /= 1000000);

        pais = CHINA;
      }
      if (dist(mouseX, mouseY, xUsa, yUsa) < 120) {
        cantidad = tabla.getNum(33, 4);
        cantidad = ceil(cantidad /= 1000000);
        pais = USA;
      }
      if (dist(mouseX, mouseY, xBrazil, yBrazil) < 120) {
        cantidad = tabla.getNum(0, 4);
        cantidad *= 0.25;
        cantidad = ceil(cantidad /= 1000000);
        pais = BRAZIL;

      }
      textSize(22);

      text("Gasto total de recursos para financiar \n el ejercito: " + cantidad + " millones de dolares ", width / 2, height / 2);
    } else{
      fill(255,0,0);
      textSize(20);
      text("Ponga el iPad horizontal perpendicular al piso", width / 2, height / 2);
      
    }

    if (mouseX > width - 90 && mouseY > height - 100)
      estado = COMPARACION;
  }


  if (estado == COMPARACION) {
    image(map, 0, 0, width, height);
    background(0, 0, 0, 180);

    image(left, 10, height - 90, 80, 80);
    image(restart, width - 90, 10, 80, 80);
    var x = "";
    var y = 0;
    var z = 0;
    var m = 0;
    var n = 0;
    if (pais == COLOMBIA) {
      x = "Colombia"
      y = 481100;
      z = 0;
      m = 8224;
      n = 0;
    }
    if (pais == USA) {
      x = "USA"
      y = 3487400;
      z = 2.58;
      m = 571616.84
      n = 0.95;
    }
    if (pais == BRAZIL) {
      x = "Brazil"
      y = 2215400;
      z = 3.03;
      m = 96754.85;
      n = 2.27;

    }
    if (pais == CHINA) {
      x = "China"
      y = 14787000;
      z = 5.48;
      m = 657156.67;
      n = 1.59

    }

    textSize(22);
    text("Si Colombia tuviera la misma poblacion de " + x + " tendría: " + y + " soldados.  \n Es decir que tendría un ejército " + z + " veces más grande que " + x + "\n \n" + "Si Colombia tuviera la misma economía de " + x + " tendría: " + m + " millones de dólares. \n Es decir que tendría un ejército " + n + " veces tan rico como el ejército de " + x, width / 2, height / 2);
    textSize(25);
    text("Toca en la flecha para seleccionar otro país \n o en el icono de la esquina superior derecha para reiniciar", width / 2, height - 30);

    if (mouseX < 90 && mouseY > height - 100) {
      estado = INTERACCION;
      return false;
    }

    if (mouseX > width - 90 && mouseY < 100) {
      estado = INTRODUCCION;
      return false;
    }

  }

}
