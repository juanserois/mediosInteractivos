x1 = 0; //coordenada x del jugador1
y1 = 0; //coordenada y del jugador1
x2 = 0; //coordenada x del jugador2
y2 = 0; //coordenada y del jugador2
xObj = 0; //coordenada x del objeto
yObj = 0; //coordenada y del objeto
dir1 = 0; //dirección del jugador1
dir2 = 0; //dirección del jugador2
puntaje1 = 0; //puntaje del jugador1
puntaje2 = 0; //puntaje del jugador2
puntajeMax = 10; //puntaje que se necesita para ganar el juego

inicio = true; //variables que se usan para controlar estado 
fin1 = false; //del juego y las pantallas de este
fin2 = false;

/*function preload() {
  font = loadFont("./fonts/ARCADE.ttf");
}*/

function setup() {
  createCanvas(windowWidth, windowHeight); //se crea el canvas con el tamaño del navegador
  background(0); //fondo negro del juego
  x1 = width - 40; //posicion x inicial jugador1
  y1 = height - 60; //posicion y inicial jugador1
  x2 = 40; //posicion x inicial jugador2
  y2 = 120; //posicion y inicial jugador2
  xObj = random(20, width - 20); //posicion inicial x aleatoria del objeto
  yObj = random(90, height - 20); //posicion inicial y aleatoria del objeto
}

function fantasma(x, y) { // esta función dibuja fantasmas en las coordenadas x,y
  noStroke();
  ellipse(x, y, 40, 40); //cabeza
  rect(x - 20, y, 40, 40); //cuerpo
  ellipse(x - 15, y + 40, 10, 10); //pies
  ellipse(x - 5, y + 40, 10, 10); //
  ellipse(x + 5, y + 40, 10, 10); //
  ellipse(x + 15, y + 40, 10, 10); //
  fill(255, 255, 255, 100); // color trasparente para la sombra
  ellipse(x - 5, y, 40, 40); //formas iguales corridas 5 pixeles para la sombra
  rect(x - 25, y, 40, 40);
  ellipse(x - 20, y + 40, 10, 10);
  ellipse(x - 10, y + 40, 10, 10);
  ellipse(x, y + 40, 10, 10);
  ellipse(x + 10, y + 40, 10, 10);
  fill(0); //color negro de los ojos
  ellipse(x - 8, y, 12, 12); //ojos
  ellipse(x + 8, y, 12, 12);
}

function estrella(x, y) { //función que dibuja la estrella haciendo cada vertice
  noStroke();
  beginShape();
  vertex(x, y - 20);
  vertex(x + 6, y - 6);
  vertex(x + 20, y - 6);
  vertex(x + 8, y + 4);
  vertex(x + 11, y + 16);

  vertex(x, y + 8);
  vertex(x - 11, y + 16);
  vertex(x - 8, y + 4);
  vertex(x - 20, y - 6);
  vertex(x - 6, y - 6);
  endShape(CLOSE);
}

function inicial() { //esta funcion maneja la pantalla de inicio
  background(10, 10, 80); //fondo azul oscuro
  fill(255); //blanco para el texto
  textSize(80); //tamañp de texto
  textFont('Georgia'); //fuente del texto
  textAlign(CENTER, CENTER);
  text('Ghost Chase', width / 2, height / 2 ); //texto en posicion relativa al tamaño del canvas
  textSize(40); //tamaño del segundo texto
  textAlign(CENTER, CENTER);
  text('INICIAR', width / 2, height / 2 + 80); //texto en posicion relativa al tamaño del canvas

  if (mouseIsPressed) {
    if (mouseX <= width / 2 + 80 && mouseX >= width / 2 - 80 && mouseY >= height / 2 + 65 && mouseY <= height / 2 + 95) {
      inicio = !inicio; //si se preciona el "boton" de iniciar se cambia el estado de incio a false.
    }
  }
}

function final1() { //esta funcion maneja la pantalla de final si gana el jugador 1
  background(0, 255, 255) //fondo del color del jugador 1 
    fill(255); //color del texto
  textSize(50); //tamaño del texto
  textFont('Georgia'); //fuente del texto
  textAlign(CENTER, CENTER);
  text('Ha ganado el jugador Cyan', width / 2, height / 2 ); //texto en posicion relativa al tamaño del canvas
}

function final2() { //esta funcion maneja la pantalla de final si gana el jugador 2
  background(255, 0, 255) //fondo del color del jugador 2
    fill(255); //color del texto
  textSize(50); //tamaño del texto
  textFont('Georgia'); //fuente del texto
  textAlign(CENTER, CENTER);
  text('Ha ganado el jugador Magenta', width / 2, height / 2 ); //texto en posicion relativa al tamaño del canvas
}

function draw() {
  if (inicio) { //si la variable de inicio es verdadera se muestra a pantalla inicial
    inicial();
  } else if (fin1) { //cuando la variable de fin1 sea verdadera se muestra la pantalla final1
    final1();
  } else if (fin2) { //cuando la variable de fin2 sea verdadera se muestra la pantalla final2
    final2();
  } else { //si no pasa ninguno de los casos contrario el juego sigue su ejecución normal
    background(0);

    fill(70); //color de la barra superior de "puntaje"
    noStroke();
    rect(0, 0, width, 80); //barra superior de "puntaje"

    fill(255); //color de las estrellas
    estrella(xObj, yObj); //estrella en la poscion del objeto

    fill(0, 255, 255, 255); //color del primer jugador
    fantasma(x1, y1); //jugador1
    fill(0, 255, 255, 255);
    fantasma((width / puntajeMax * puntaje1) - 30, 25); //representación del puntaje del jugador1
    fill(255, 0, 255, 255); //color del segundo jugador
    fantasma(x2, y2); //jugador2
    fill(255, 0, 255, 255);
    fantasma((width / puntajeMax * puntaje2) - 30, 25); //representación del puntaje del jugador2

    if (dir1 == 1) //toda esta parte controla el desplazamiento de jugadores dependiendo de su dirección
      x1 += 5;
    if (dir1 == 2)
      x1 -= 5;
    if (dir1 == 3)
      y1 -= 5;
    if (dir1 == 4)
      y1 += 5;

    if (dir2 == 1)
      x2 += 5;
    if (dir2 == 2)
      x2 -= 5;
    if (dir2 == 3)
      y2 -= 5;
    if (dir2 == 4)
      y2 += 5;


    if (keyIsPressed) { //se cambia la dirección de cada jugador con las teclas apropiadas
      if (keyCode === RIGHT_ARROW)
        dir1 = 1;
      if (keyCode === LEFT_ARROW)
        dir1 = 2;
      if (keyCode === UP_ARROW)
        dir1 = 3;
      if (keyCode === DOWN_ARROW)
        dir1 = 4;
      if (key == 'd')
        dir2 = 1;
      if (key == 'a')
        dir2 = 2;
      if (key == 'w')
        dir2 = 3;
      if (key == 's')
        dir2 = 4;
    }

    if (x1 > width + 20) //esta parte hace que los jugadores al salir de la zona de juego reaparescan del lado opuesto
      x1 = -20;
    if (x1 < -20)
      x1 = width + 20;
    if (y1 > height + 20)
      y1 = 100;
    if (y1 < 100)
      y1 = height + 20;

    if (x2 > width + 20)
      x2 = -20;
    if (x2 < -20)
      x2 = width + 20;
    if (y2 > height + 20)
      y2 = 100;
    if (y2 < 100)
      y2 = height + 20;


    if (dist(x1, y1 + 10, xObj, yObj) < 45) { //si el jugador1 se choca con la estrella esta reaparece en otra posicion aleatoria y al jugador se le suma un punto
      xObj = random(20, width - 20);
      yObj = random(90, height - 20);
      puntaje1++;
    }

    if (dist(x2, y2 + 10, xObj, yObj) < 45) { //si el jugador2 se choca con la estrella esta reaparece en otra posicion aleatoria y al jugador se le suma un punto
      xObj = random(20, width - 20);
      yObj = random(90, height - 20);
      puntaje2++;
    }

    if (dist(x1, y1 + 10, x2, y2 + 10) < 50) { //si los dos jugadores se estrellan entre sí regresan a sus posiciones iniciales y los puntajes se reinician
      x1 = width - 40;
      y1 = height - 60;
      x2 = 40;
      y2 = 120;
      puntaje1 = puntaje2 = 0;
    }

    if (puntaje1 >= puntajeMax) //si el jugador1 alcanza el puntaje máximo se cambia el estado de fin1
      fin1 = true;

    if (puntaje2 >= puntajeMax) //si el jugador2 alcanza el puntaje máximo se cambia el estado de fin2
      fin2 = true;
  }
}
