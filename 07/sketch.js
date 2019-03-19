var cancion; //variable de la cancion seleccionada

var nights; //variables para las 5 canciones
var withoutYou;
var albatraoz;
var tremor;
var bunnydance;

var nightsImg; // variables para las imagenes
var withoutYouImg;
var albatraozImg;
var tremorImg;
var bunnydanceImg;
var playImg;
var pauseImg;
var controlesImg;

var dur; //duracion de la cancion seleccionada
var actual; //tiempo actual de la cancion seleccionada
var rate; //rate actual de la cancion seleccionada
var pan; //pan actual de la cancion seleccionada
var vol; //volumen actual de la cancion seleccionada

function preload() { //carga todas las canciones e imagenes

  nights = loadSound('assets/nights.mp3');
  withoutYou = loadSound('assets/withoutYou.mp3');
  albatraoz = loadSound('assets/albatraoz.mp3');
  tremor = loadSound('assets/tremor.mp3');
  bunnydance = loadSound('assets/bunnydance.mp3');

  nightsImg = loadImage('assets/nights.jpg');
  withoutYouImg = loadImage('assets/withoutYou.png');
  albatraozImg = loadImage('assets/albatraoz.jpg');
  tremorImg = loadImage('assets/tremor.jpg');
  bunnydanceImg = loadImage('assets/bunnydance.jpg');

  playImg = loadImage('assets/play.png');
  pauseImg = loadImage('assets/pause.png');
  controlesImg = loadImage('assets/controles.png');

}

function setup() { //crea la ventana e inicializa los valores necesarios
  createCanvas(1300, windowHeight);
  cancion = nights; //cancion inicial para que no sea null
  rate = 1;
  pan = 0;
  vol = 0.5;
}

function reset (){ //resetea los valores para que no se cambien todas las canniones
   rate = 1;
  pan = 0;
  vol = 0.5;
}


function keyPressed() { //todo se maneja con el teclado 
  if (keyCode == 49) { // 1 selecciona la primera cancion
    cancion = nights;
    reset();
  }
  if (keyCode == 50) { // 2 selecciona la segunda cancion
    cancion = withoutYou;
    reset();
  }
  if (keyCode == 51) { // 3 selecciona la tercera cancion
    cancion = albatraoz;
    reset();
  }
  if (keyCode == 52) { // 4 selecciona la cuarta cancion
    cancion = tremor;
    reset();
  }
  if (keyCode == 53) { // 5 selecciona la quinta cancion
    cancion = bunnydance;
    reset();
  }

  if (keyCode == 39) { // flecha derecha salta 10 segundos
    actual = cancion.currentTime(); //se guarda el tiempo actual
    if (dur > actual + 10) //si el tiempo al que se va a saltar no se ´sale´ de la cancion 
      cancion.jump(actual + 10); //salta 10 segundos
  }

  if (keyCode == 37) { // flecha izquierda retrocede 10 segundos, hace lo mismo que la anterior
    actual = cancion.currentTime();
    if (actual - 10 > 0)
      cancion.jump(actual - 10);
  }

  if (keyCode == 76) { //en teoria con L se hace loop a la cancion
    if (cancion.isLooping == false)
      cancion.loop(5)
  }

  if (keyCode == 38) { //flecha arriba incrementa la velocidad
    rate += 0.1;	//incrementa 0.1 la velocidad
    cancion.rate(rate);
  }

  if (keyCode == 40) { //flecha abajo decrementa la velocidad
    rate -= 0.1; //decrementa 0.1 la velocidad
    cancion.rate(rate);
  }
  
  if (keyCode == 79) { // con O se mueve el pan a la izquierda 0.1 por vez
    pan -= 0.1;
    cancion.pan(pan);
  }
  
  if (keyCode == 80) { // con P se mueve el pan a la derecha 0.1 por vez
    pan += 0.1;
    cancion.pan(pan);
  }
  
   
  if (keyCode == 81) { // con Q se disminuye el volumen 0.1 por vez
    if (vol - 0.1 > 0) // solo si el valor no se sale del rango 0.0 and 1.0
    vol -= 0.1;
    cancion.setVolume(vol, 0, 0);
  }
  
  if (keyCode == 87) { // con W se aumenta el volumen 0.1 por vez
    if (vol + 0.1 < 1) // solo si el valor no se sale del rango 0.0 and 1.0
    vol += 0.1;
    cancion.setVolume(vol, 0, 0);
  }


  if (keyCode == 32) { //con ESPACIO se alterna entre play y pause
    if (cancion.isPlaying()) { //si la cacnio esta sonando
      cancion.pause(); // pone pausa
    } else if (cancion.isPlaying() == false) { // si no esta sonando
      cancion.play(); // le pone play
    }
  }
}

function draw() {
  background(0);

  image(nightsImg, 50, 50, 200, 200); //se dibujan las 5 imagenes de las canciones
  image(withoutYouImg, 300, 50, 200, 200);
  image(albatraozImg, 550, 50, 200, 200);
  image(tremorImg, 800, 50, 200, 200);
  image(bunnydanceImg, 1050, 50, 200, 200);

  noFill();
  stroke(255);
  strokeWeight(5);
  if (cancion == nights) // se dibuja el cuadrado que nos permite ver la canion seleccionada
    rect(50, 50, 200, 200);
  else if (cancion == withoutYou)
    rect(300, 50, 200, 200);
  else if (cancion == albatraoz)
    rect(550, 50, 200, 200);
  else if (cancion == tremor)
    rect(800, 50, 200, 200);
  else if (cancion == bunnydance)
    rect(1050, 50, 200, 200);

  if (nights.isPlaying()) { // dibuja el play / pause de cada cancion dependiendo de su estado
    image(playImg, 125, 270, 50, 50);
  } else image(pauseImg, 125, 270, 50, 50);

  if (withoutYou.isPlaying()) {
    image(playImg, 375, 270, 50, 50);
  } else image(pauseImg, 375, 270, 50, 50);

  if (albatraoz.isPlaying()) {
    image(playImg, 625, 270, 50, 50);
  } else image(pauseImg, 625, 270, 50, 50);

  if (tremor.isPlaying()) {
    image(playImg, 875, 270, 50, 50);
  } else image(pauseImg, 875, 270, 50, 50);

  if (bunnydance.isPlaying()) {
    image(playImg, 1125, 270, 50, 50);
  } else image(pauseImg, 1125, 270, 50, 50);

  dur = cancion.duration(); // calcula la duracion total de la cancion seleccionada
  
  
  image(controlesImg, 50, 340, 1200, 300);
}