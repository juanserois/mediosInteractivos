//variable del fondo
var fondo;

//variables de arreglos de cada especie y cantidad
var naves = [];
var cantNaves = 10; // cantidad
var mosquitos = []
var cantMosquitos = 100;
var abejas = [];
var cantAbejas = 30;
var nubes = [];
var cantNubes = 8;
var estrellas = [];
var cantEstrellas = 20

//carga la imagen de fondo
function preload() {
  fondo = loadImage('/assets/fondo.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //se crea cada especie de acuerdo a la cantidad y las condiciones necesarias
  for (var i = 0; i < cantNaves; i++) {
    if (i % 2 == 0) //las naves pares tienen una velocidad las impares otra
      naves[i] = new nave(random(width), random(50, 370), random(-3, 3), random(-3, 3));
    else
      naves[i] = new nave(random(width), random(50, 370), random(-1, 1), -random(-1, 1));
  }

  for (var j = 0; j < cantMosquitos; j++) {
    mosquitos[j] = new mosquito(random(width), random(height), ceil(random(2, 6))); //el ultimo numero se usa para identificar 4 grupos de mosquitos que se  mueven diferente
  }

  for (j = 0; j < cantAbejas; j++) {
    abejas[j] = new abeja(random(width), random(height), j);//cada abeja tiene un identificador para que algunas se muevan diferente
  }

  for (j = 0; j < cantNubes; j++) {
    if (j % 2 == 0)  //las nubes pares tienen una velocidad las impares otra
      var velNube = 1;
    else
      velNube = -1;
    nubes[j] = new nube(random(width), random(41, 300), velNube); // las nubes no se crean en el piso
  }

  for (j = 0; j < cantEstrellas; j++) {
    estrellas[j] = new estrella(random(width), random(400), j % 2); // las estrellas tienen estado prendido y aoagado para eso se usa j%2, tampoco aparecen en el piso
  }

}

function nave(x, y, velX, velY) { //función que crea las naves alienigenas
  // caracteristicas/atributos
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velX;
  this.estaViva = true;
  this.contador = 0;
  this.contadorEstrellas = 0;

  //habilidades
  this.dibujarse = function() {
    if (this.estaViva) {
      fill(57, 255, 20, 100) //color verde semitrasparente
      noStroke();
      triangle(this.x, this.y, this.x - 40, this.y + 80, this.x + 40, this.y + 80); //reiangulo del "rayo" que sale de las naves
      fill('#c0c0c0'); //color plateado
      stroke(0); //borde negro
      strokeWeight(2); //grosor del borde
      ellipse(this.x, this.y, 100, 50); //base de la nave
      ellipse(this.x, this.y - 6, 100, 50); //elipse superior da el efecto de tridimensionalidad
      line(this.x - 30, this.y + 20, this.x - 40, this.y + 40); //patas de la nave
      line(this.x + 30, this.y + 20, this.x + 40, this.y + 40); //
      bezier(this.x - 25, this.y - 10, this.x - 20, this.y - 47, this.x + 20, this.y - 47, this.x + 25, this.y - 10); //parte superior de la cúpula
      bezier(this.x - 25, this.y - 10, this.x - 20, this.y + 3, this.x + 20, this.y + 3, this.x + 25, this.y - 10); //parte inferior de la cúpula
      noFill();
      arc(this.x, this.y - 18, 23, 23, HALF_PI * 3, 0); //reflejo de la cúpula
      fill(57, 255, 20)
      text(this.contador, this.x - 5, this.y - 5);
    }
  }

  this.moverse = function() {

    this.x += (this.velX);//se mueven en amos ejes dependiendo de la velocidad que tengan

    this.y += (this.velY);

    if (this.x > width) //cuando se estrellas con un limite del canvas cambian de velocidad para devolverse
      this.velX *= -1;
    if (this.x < -15)
      this.velX *= -1;

    if (this.y < 0)//cuando se estrellas con un limite del canvas cambian de velocidad para devolverse
      this.velY *= -1;
    if (this.y > height) {
      this.velY *= -1;

    }
  }
}

function mosquito(posX, posY, id) {
  // caracteristicas/atributos
  this.x = posX;
  this.y = posY;
  this.i = id;
  this.estaViva = true;


  //habilidades
  this.dibujarse = function() {
    if (this.estaViva) {
      fill(204);
      strokeWeight(1)
      ellipse(this.x, this.y + 6, 3, 18);
      ellipse(this.x, this.y, 3, 6);
      fill(200, 0, 0);
      ellipse(this.x - 2, this.y - 4, 3, 3);
      ellipse(this.x + 2, this.y - 4, 3, 3)
      fill(3, 128, 170);
      bezier(this.x - 1.5, this.y, this.x - 40, this.y - 3, this.x - 20, this.y + 15, this.x - 1.5, this.y);
      bezier(this.x + 1.5, this.y, this.x + 40, this.y - 3, this.x + 20, this.y + 15, this.x + 1.5, this.y);
    }
  }

  this.moverse = function() {

    this.x += random(-2, 2); //vibran moviendose de manerqa aleatoria hacia todos los lados
    this.y += random(-2, 2);

    if (this.x > width) //si se salen del canvas aparecen por el otro lado
      this.x = -15;
    if (this.x < -15)
      this.x = width;
    if (this.y > height)
      this.y = -15;
    if (this.y < -15)
      this.y = height;

    if (this.i == 3) //dependiendo del identificador cada grupo de mosquitos se mueve en una direccion diferente
      this.x += random(3);
    if (this.i == 4)
      this.y += random(3);
    if (this.i == 5)
      this.y += random(-3, 0);
    if (this.i == 6)
      this.x += random(-3, 0);

  }

}

function abeja(posX, posY, id) {
  // caracteristicas/atributos
  this.x = posX;
  this.y = posY;
  this.i = id;
  this.estaViva = true;


  //habilidades
  this.dibujarse = function() {
    if (this.estaViva) {
      fill(220, 200, 0);
      stroke(0);
      ellipse(this.x, this.y, 12, 12);
      fill(255, 224, 0);
      bezier(this.x - 3, this.y + 5, this.x - 25, this.y + 35, this.x + 25, this.y + 35, this.x + 3, this.y + 5);
      fill(255);

      strokeWeight(4);
      bezier(this.x - 3, this.y + 6, this.x - 3, this.y + 4, this.x + 3, this.y + 4, this.x + 3, this.y + 6);
      bezier(this.x - 3, this.y + 13, this.x - 3, this.y + 13, this.x + 3, this.y + 13, this.x + 3, this.y + 13);
      bezier(this.x - 5, this.y + 22, this.x - 3, this.y + 23, this.x + 3, this.y + 23, this.x + 5, this.y + 22);

      strokeWeight(2);

      bezier(this.x - 3, this.y + 6, this.x - 45, this.y + 35, this.x - 3, this.y + 40, this.x - 3, this.y + 6);
      bezier(this.x + 3, this.y + 6, this.x + 45, this.y + 35, this.x + 3, this.y + 40, this.x + 3, this.y + 6);

      line(this.x - 3, this.y - 5, this.x - 6, this.y - 10);
      line(this.x + 3, this.y - 5, this.x + 6, this.y - 10);
      line(this.x - 2, this.y + 27, this.x, this.y + 32);
      line(this.x + 2, this.y + 27, this.x, this.y + 32);
    }
  }

  this.moverse = function() {
    this.x += random(-1, 1); //vibran moviendose en las dos direcciones
    this.y += random(-1, 1);
    this.x += random(-1, 1);//se repite porque así parece que vibraran mas
    this.y += random(-1, 1);

    if (this.i % 2 == 0) //las abejas pares van hacia la derecha
      this.x += random(3);
    else
      this.y += random(-3); // las imapres hacia la izquierda

    if (this.x > width) //si se salen del canvas aparecen del lado contrario
      this.x = -15;
    if (this.x < -15)
      this.x = width;
    if (this.y > height)
      this.y = -15;
    if (this.y < -15)
      this.y = height;
  }

  this.morirse = function() {
    this.estaViva = false;
  }
}

function nube(posX, posY, velY) {
  // caracteristicas/atributos-
  this.x = posX;
  this.y = posY;
  this.vel = velY;
  this.estaViva = true;
  this.color = color(60);


  //habilidades
  this.dibujarse = function() {
    if (this.estaViva) {
      noStroke();
      fill(this.color); //color gris de la nube
      ellipse(this.x, this.y - 1, 40, 40)
      ellipse(this.x + 40, this.y, 38, 38)
      ellipse(this.x + 5, this.y - 20, 20, 20)
      ellipse(this.x + 30, this.y - 18, 40, 40)
      rect(this.x, this.y - 5, 40, 24) //la imagen se crea con 4 elipses y un rectangulo que hace el lado plano de abajo
      stroke(0);
    }
  }

  this.moverse = function() {
    this.x += 2;

    this.y += this.vel;

    if (this.x > width)
      this.x = -15;
    if (this.x < -15)
      this.x = width;
    if (this.y < 35)
      this.vel *= -1;
    if (this.y > 380)
      this.vel *= -1;
  }

  this.morirse = function() {
    this.estaViva = false;
  }
}

function estrella(posX, posY, id) {
  this.i = id;
  this.x = posX;
  y = posY;

  this.dibujarse = function() {
    if (this.i == 1) {
      fill(255);
      noStroke();
      beginShape();
      vertex(this.x, this.y - 20);
      vertex(this.x + 6, this.y - 6);
      vertex(this.x + 20, this.y - 6);
      vertex(this.x + 8, this.y + 4);
      vertex(this.x + 11, this.y + 16);

      vertex(this.x, this.y + 8);
      vertex(this.x - 11, this.y + 16);
      vertex(this.x - 8, this.y + 4);
      vertex(this.x - 20, this.y - 6);
      vertex(this.x - 6, this.y - 6);
      endShape(CLOSE);

    }
  }

  this.moverse = function() {

    if (frameCount % 10 == 0) {
      this.x = random(width);
      this.y = random(400);
      this.i = (this.i + 1) % 2;
    }

  }

}

function draw() {
  //se pone la imagen de fondo
  image(fondo, 0, 0, width, height);

  // cada especie se dibuja y se activa el movimiento

  for (i = 0; i < cantEstrellas; i++) {
    estrellas[i].dibujarse();
    estrellas[i].moverse();
  }

  for (i = 0; i < cantNaves; i++) {
    naves[i].dibujarse();
    naves[i].moverse();
  }

  for (i = 0; i < cantNubes; i++) {
    nubes[i].dibujarse();
    nubes[i].moverse();
    if (frameCount % 60 == 0)
      nubes[i].color = color(60);
  }

  for (var i = 0; i < cantMosquitos; i++) {

    mosquitos[i].dibujarse();
    mosquitos[i].moverse();
  }

  for (i = 0; i < cantAbejas; i++) {
    abejas[i].dibujarse();
    abejas[i].moverse();
  }


  //interaccion entre naves y mosquitos, las naves matan mosquitos
  for (var j = 0; j < cantMosquitos; j++) {
    for (var k = 0; k < cantNaves; k++) {
      if (dist(mosquitos[j].x, mosquitos[j].y, naves[k].x, naves[k].y) < 20 && mosquitos[j].estaViva) {
        mosquitos[j].estaViva = false;
        naves[k].contador++;
      }
    }

  }

  //interaccion entre nubes y mosquitos, las nubes reviven a los mosquitos
  for (j = 0; j < cantMosquitos; j++) {
    for (k = 0; k < cantNubes; k++) {
      if (dist(mosquitos[j].x, mosquitos[j].y, nubes[k].x, nubes[k].y) < 50 && mosquitos[j].estaViva == false) {
        mosquitos[j].estaViva = true;
      }
    }

  }

  //interaccion entre estrellas y naves, las estrellas si tocan 3 veces a una nave esta muere
  for (j = 0; j < cantNaves; j++) {
    for (k = 0; k < cantEstrellas; k++) {
      if (dist(naves[j].x, naves[j].y, estrellas[k].x, estrellas[k].y) < 30 && naves[j].estaViva && estrellas[k].i == 1) {
        naves[j].contadorEstrellas++;
      }
    }
    if (naves[j].contadorEstrellas >= 3)
      naves[j].estaViva = false;
  }

  //interaccion entre abejas y naves, las abejas reviven a las naves
  for (j = 0; j < cantAbejas; j++) {
    for (k = 0; k < cantNaves; k++) {
      if (dist(abejas[j].x, abejas[j].y, naves[k].x, naves[k].y) < 20 && naves[k].estaViva == false) {
        naves[k].estaViva = true;
        naves[k].contador = 0;
        naves[k].contadorEstrellas = 0;
      }
    }
  }

  //interaccion entre abejas, mosquitos y nubes, si los tres se tocan, la nube cambia de color
  for (j = 0; j < cantMosquitos; j++) {
    for (k = 0; k < cantAbejas; k++) {
      for (var m = 0; m < cantNubes; m++) {
        if (dist(abejas[k].x, abejas[k].y, mosquitos[j].x, mosquitos[j].y) < 20 && mosquitos[j].estaViva && dist(abejas[k].x, abejas[k].y, nubes[m].x, nubes[m].y) < 20) {
          nubes[m].color = color(100, 255, 255);
        }
      }
    }
  }
}
