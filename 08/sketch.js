//atributos de las abejas
var posXbee = []; //posicion X de cada una
var posYbee = []; //posicion Y de cada una
var cantbee = 30; // cantidad

//atributos de los mosquitos
var posXmosquito = []; //posicion X de cada una
var posYmosquito = []; //posicion Y de cada una
var cantmosquito = 150; // cantidad

//atributos de las nubes
var posXnube = []; //posicion X de cada una
var posYnube = []; //posicion Y de cada una
var cantnube = 8; // cantidad
var velNube = []; // velocidad vertical de las nubes

//atributos de las naves
var posXnave = []; //posicion X de cada una
var posYnave = []; //posicion Y de cada una
var cantnave = 6; // cantidad
var velXnave = []; // velocidad horixzontal de las naves
var velYnave = []; // velocidad vertical de las naves

//atributos de las letras
var posXletras = []; //posicion X de cada una 
var posYletras = []; //posicion Y de cada una
var cantletras = 200; // cantidad
var letras = [] ; //arreglo de letras
var col = []; //asrreglo de colores

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (var i = 0; i < cantmosquito; i++) { //se incializan los arreglos de cada especie
    posXmosquito[i] = random(width);
    posYmosquito[i] = random(height);
  }

  for (var j = 0; j < cantbee; j++) {
    posXbee[j] = random(width);
    posYbee[j] = random(height);
  }

  for (var k = 0; k < cantnube; k++) { // la velocidad se incia dependiendo del modulo
    posXnube[k] = random(width);
    posYnube[k] = random(41, 300);
    if (k % 2 == 0)
      velNube[k] = 1;
    if (k % 2 != 0)
      velNube[k] = -1;
  }

  for (var l = 0; l < cantnave; l++) {// la velocidad se incia dependiendo del modulo
    posXnave[l] = random(width);
    posYnave[l] = random(51, 300);
    if (l % 2 == 0) {
      velXnave[l] = 1;
      velYnave[l] = 1;
    }
    if (l % 2 != 0) {
      velXnave[l] = -1;
      velYnave[l] = -1;
    }
  }
  
  for (var m = 0; m < cantletras; m++) {
    posXletras[m] = random(width);
    posYletras[m] = random(height);
    col[m] = color(random(255), random(255), random(255)); //cada color es random
    letras[m] = random(27, 123); //las letras se representan como numeros
  }
}

function mosquito(x, y) {
  fill(204);
  strokeWeight(1)
  ellipse(x, y + 6, 3, 18);
  ellipse(x, y, 3, 6);
  fill(200, 0, 0);
  ellipse(x - 2, y - 4, 3, 3);
  ellipse(x + 2, y - 4, 3, 3)
  fill(3, 128, 170);
  bezier(x - 1.5, y, x - 40, y - 3, x - 20, y + 15, x - 1.5, y);
  bezier(x + 1.5, y, x + 40, y - 3, x + 20, y + 15, x + 1.5, y);
}

function bee(x, y) {
  fill(220, 200, 0);
  stroke(0);
  ellipse(x, y, 12, 12);
  fill(255, 224, 0);
  bezier(x - 3, y + 5, x - 25, y + 35, x + 25, y + 35, x + 3, y + 5)
  fill(255);


  strokeWeight(4);
  bezier(x - 3, y + 6, x - 3, y + 4, x + 3, y + 4, x + 3, y + 6);
  bezier(x - 3, y + 13, x - 3, y + 13, x + 3, y + 13, x + 3, y + 13);
  bezier(x - 5, y + 22, x - 3, y + 23, x + 3, y + 23, x + 5, y + 22);

  strokeWeight(2);

  bezier(x - 3, y + 6, x - 45, y + 35, x - 3, y + 40, x - 3, y + 6);
  bezier(x + 3, y + 6, x + 45, y + 35, x + 3, y + 40, x + 3, y + 6);


  line(x - 3, y - 5, x - 6, y - 10);
  line(x + 3, y - 5, x + 6, y - 10);
  line(x - 2, y + 27, x, y + 32);
  line(x + 2, y + 27, x, y + 32);

}

function nube(x, y) { // esta funcion crea las nubes grises
  noStroke();
  fill(90); //color gris de la nube
  ellipse(x, y - 1, 40, 40)
  ellipse(x + 40, y, 38, 38)
  ellipse(x + 5, y - 20, 20, 20)
  ellipse(x + 30, y - 18, 40, 40)
  rect(x, y - 5, 40, 24) //la imagen se crea con 4 elipses y un rectangulo que hace el lado plano de abajo
  stroke(0);
}

function nave(x, y) { //función que crea las naves alienigenas
  fill(57, 255, 20, 100) //color verde semitrasparente
  noStroke();
  triangle(x, y, x - 40, y + 80, x + 40, y + 80); //reiangulo del "rayo" que sale de las naves
  fill('#c0c0c0'); //color plateado
  stroke(0); //borde negro
  strokeWeight(2); //grosor del borde
  ellipse(x, y, 100, 50); //base de la nave
  ellipse(x, y - 6, 100, 50); //elipse superior da el efecto de tridimensionalidad
  line(x - 30, y + 20, x - 40, y + 40); //patas de la nave
  line(x + 30, y + 20, x + 40, y + 40); //
  bezier(x - 25, y - 10, x - 20, y - 47, x + 20, y - 47, x + 25, y - 10); //parte superior de la cúpula
  bezier(x - 25, y - 10, x - 20, y + 3, x + 20, y + 3, x + 25, y - 10); //parte inferior de la cúpula
  noFill();
  arc(x, y - 18, 23, 23, HALF_PI * 3, 0); //reflejo de la cúpula
}


function draw() {
  background(220);
  fill (100);
  rect(0, 400, width, height);


  for (var l = 0; l < cantnave; l++) {
    nave(posXnave[l], posYnave[l]);

    posXnave[l] += (velXnave[l] * random(1, 2));

    posYnave[l] += (velYnave[l] * random(1, 3));

    if (posXnave[l] > width)
      posXnave[l] = -15;
    if (posXnave[l] < -15)
      posXnave[l] = width;

    if (posYnave[l] < 45) {
      if (l % 2 == 0)
      velXnave[l] *= -1;
      velYnave[l] *= -1;
    }
    if (posYnave[l] > 380) {
      velXnave[l] *= -1;
      velYnave[l] *= -1;
    }
  }


  for (var i = 0; i < cantmosquito; i++) {
    mosquito(posXmosquito[i], posYmosquito[i]);

    posXmosquito[i] += random(-2, 2);
    posYmosquito[i] += random(-2, 2);

    if (i % 3 == 0)
      posXmosquito[i] += random(3);
    if (i % 4 == 0)
      posYmosquito[i] += random(3);
    if (i % 5 == 0)
      posYmosquito[i] += random(-3, 0);
    if (i % 6 == 0)
      posXmosquito[i] += random(-3, 0);

    if (posXmosquito[i] > width)
      posXmosquito[i] = -15;
    if (posXmosquito[i] < -15)
      posXmosquito[i] = width;
    if (posYmosquito[i] > height)
      posYmosquito[i] = -15;
    if (posYmosquito[i] < -15)
      posYmosquito[i] = height;
  }


  for (var j = 0; j < cantbee; j++) {
    bee(posXbee[j], posYbee[j], 1);

    posXbee[j] += random(-1, 1);
    posYbee[j] += random(-1, 1);
    posXbee[j] += random(-1, 1);
    posYbee[j] += random(-1, 1);

    if (j % 2 == 0)
      posXbee[j] += random(3);
    else
      posYbee[j] += random(-3);

    if (posXbee[j] > width)
      posXbee[j] = -15;
    if (posXbee[j] < -15)
      posXbee[j] = width;
    if (posYbee[i] > height)
      posYbee[j] = -15;
    if (posYbee[j] < -15)
      posYbee[j] = height;
  }

  for (var k = 0; k < cantnube; k++) {
    nube(posXnube[k], posYnube[k]);

    posXnube[k] += 2;

    posYnube[k] += velNube[k];

    if (posXnube[k] > width)
      posXnube[k] = -15;
    if (posXnube[k] < -15)
      posXnube[k] = width;
    if (posYnube[k] < 35)
      velNube[k] *= -1;
    if (posYnube[k] > 380)
      velNube[k] *= -1;
  }
  
  for (var m = 0; m < cantletras; m++) {
    fill(col[m]);
    if (frameCount %5 == 0)
    letras[m] = String.fromCharCode(random(97,123));
    text(letras[m], posXletras[m], posYletras[m]);
    
    if (frameCount % 3 == 0)
    if (m % 2 == 0){
      posXletras[m] = random(width);
      posYletras[m] = random(height);
    }
    
    if (frameCount % 5 == 0)
    if (m % 3 == 0){
      posXletras[m] = random(width);
      posYletras[m] = random(height);
    }
      
    
    if (posXletras[m] > width)
      posXletras[m] = -15;
    if (posXletras[m] < -15)
      posXletras[m] = width;
    if (posYletras[m] > height)
      posYletras[m] = -15;
    if (posYletras[m] < -15)
      posYletras[m] = height;
  }


}