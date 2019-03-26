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

function mosquito(x, y) { //funcion para dibujar el mosquito 
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

function bee(x, y) { //funcion para dibujar las abejas 
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
  rect(0, 400, width, height); // piso


  for (var l = 0; l < cantnave; l++) {// for de las naves
    nave(posXnave[l], posYnave[l]); // se pintan las naves en sus posiciones

    posXnave[l] += (velXnave[l] * random(1, 2)); //las naves se mueven con la velocidad de cada nave y un modificador random

    posYnave[l] += (velYnave[l] * random(1, 3));

    if (posXnave[l] > width) // si se salen del canva salen del la do opuesto
      posXnave[l] = -15;
    if (posXnave[l] < -15)
      posXnave[l] = width;

    if (posYnave[l] < 45) { //cuado llegan arriba cambia la velocidad
      if (l % 2 == 0)
      velXnave[l] *= -1; //la velocidad en X cambia solo en los pares
      velYnave[l] *= -1;
    }
    if (posYnave[l] > 380) {
      velXnave[l] *= -1;
      velYnave[l] *= -1;
    }
  }


  for (var i = 0; i < cantmosquito; i++) { //for que pinta los mosquitos 
    mosquito(posXmosquito[i], posYmosquito[i]); //dibuja cada mosquito en su posicion

    posXmosquito[i] += random(-2, 2); // los mosquitos vibran
    posYmosquito[i] += random(-2, 2);

    if (i % 3 == 0) //dependiendo del numero de cada uno tienen un comportamiento diferente 
      posXmosquito[i] += random(3);
    if (i % 4 == 0)
      posYmosquito[i] += random(3);
    if (i % 5 == 0)
      posYmosquito[i] += random(-3, 0);
    if (i % 6 == 0)
      posXmosquito[i] += random(-3, 0);

    if (posXmosquito[i] > width) //si se salen por un borde reaparecen del lado contrario 
      posXmosquito[i] = -15;
    if (posXmosquito[i] < -15)
      posXmosquito[i] = width;
    if (posYmosquito[i] > height)
      posYmosquito[i] = -15;
    if (posYmosquito[i] < -15)
      posYmosquito[i] = height;
  }


  for (var j = 0; j < cantbee; j++) { // for que dibuja las abejas
    bee(posXbee[j], posYbee[j]); //se dibuja cada una en su pocicion

    posXbee[j] += random(-1, 1); //las abejas vibran
    posYbee[j] += random(-1, 1);
    posXbee[j] += random(-1, 1);
    posYbee[j] += random(-1, 1);

    if (j % 2 == 0) // las pares van a la derecha
      posXbee[j] += random(3);
    else //las imapres van arriba
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

  for (var k = 0; k < cantnube; k++) { // for que dibuja las nubes
    nube(posXnube[k], posYnube[k]); // las nubes se dibujan en su posicion
 
    posXnube[k] += 2; //todas las nubes van a la derecha

    posYnube[k] += velNube[k]; // verticalmente depende de la velocidad

    if (posXnube[k] > width)  // si se salen horizontalmente del canva aparecen del lado contrario
      posXnube[k] = -15;
    if (posXnube[k] < -15)
      posXnube[k] = width;
    if (posYnube[k] < 35) //si si chochan con los limites de piso y canva se canbia la velocidad
      velNube[k] *= -1;
    if (posYnube[k] > 380)
      velNube[k] *= -1;
  }
  
  for (var m = 0; m < cantletras; m++) { // for de las letras
    fill(col[m]); // se asigna el color de cada letra del arreglo
    if (frameCount %5 == 0) //cada 5 cuadros 
    letras[m] = String.fromCharCode(random(97,123)); //se crea una nueva letra convitiendo el número a char de 97 a 122 por la tabla ascii
    text(letras[m], posXletras[m], posYletras[m]); //dibuja cada letra en su posicion
    
    if (frameCount % 3 == 0) //cada 3 cuadros 
    if (m % 2 == 0){ // si la letra es par 
      posXletras[m] = random(width); //se reposiciona a un lugar random
      posYletras[m] = random(height);
    }
    
    if (frameCount % 5 == 0) // cada 5 cuadros
    if (m % 3 == 0){ //si la posicion dela letra es divisible en 3 
      posXletras[m] = random(width); // se reposiciona a un lugar random
      posYletras[m] = random(height);
    }
      
    
    if (posXletras[m] > width) // si se llegan a salir del canvas vuelven a salir por el lado contrario
      posXletras[m] = -15;
    if (posXletras[m] < -15)
      posXletras[m] = width;
    if (posYletras[m] > height)
      posYletras[m] = -15;
    if (posYletras[m] < -15)
      posYletras[m] = height;
  }


}
