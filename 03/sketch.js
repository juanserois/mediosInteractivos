
var direccion = 1; //dirección del movimiento, se usa para que las variables puedan avanzar y retroceder.
var vx = 3.6; //velocidad en x de la luna/sol
var vy = -6.2; //velocidad en y de la luna/sol
var x = 300; //posicion inicial x de la luna/sol
var y = 420; //posicion inicial y de la luna/sol
var a = 0.06; //aceleración de los objetos
var t = 0; //tiempo para coordinar las 4 partes de la animación
var c = 0; // color que va entre 0 y 255.
var p = 0; //variable auxiliar para varias cosas en el programa
var o = 0; //variable auxiliar para varias cosas en el programa

function setup() {
  createCanvas(1060, 700); //el canvas es de este tamaño ya que así en el tamaño de 9*6cm seria de 300dpi
  noStroke();
  frameRate(24); //para que no se trabe al bajar las imagenes se bajan los fps
}

function draw() {
  c = c + 0.6 * direccion; //este pedazo de código hace que la variable de color oscile entre 0 y 255.
  if ((c < 0) || (c > 255)) {
    direccion = direccion * -1;
  }

  function fantasma(x, y) { // esta función dibuja fantasmas en las coordenadas x,y
    fill(255); //el relleno de el cuerpo y los "pies" del fantasma
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


  function estrella(x, y) { // esta función crea estrellas simples en x, y, se creó con ensayo y error
    fill(255);
    noStroke();
    beginShape(); // crea una forma personalizada
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

  function nube(x, y) { // esta funcion crea las nubes grises
    fill(90); //color gris de la nube
    ellipse(x, y - 1, 40, 40)
    ellipse(x + 40, y, 38, 38)
    ellipse(x + 5, y - 20, 20, 20)
    ellipse(x + 30, y - 18, 40, 40)
    rect(x, y - 5, 40, 24) //la imagen se crea con 4 elipses y un rectangulo que hace el lado plano de abajo
  }

  function nave(x, y) { //función que crea las naves alienigenas
    fill(57, 255, 20, 100) //color verde semitrasparente
    noStroke();
    triangle(x, y, x - 40, y + 80, x + 40, y + 80); //reiangulo del "rayo" que sale de las naves
    fill('#c0c0c0'); //color plateado
    stroke(0); //borde negro
    strokeWeight(3); //grosor del borde
    ellipse(x, y, 100, 50); //base de la nave
    ellipse(x, y - 6, 100, 50); //elipse superior da el efecto de tridimensionalidad
    line(x - 30, y + 20, x - 40, y + 40); //patas de la nave
    line(x + 30, y + 20, x + 40, y + 40); //
    bezier(x - 25, y - 10, x - 20, y - 47, x + 20, y - 47, x + 25, y - 10); //parte superior de la cúpula
    bezier(x - 25, y - 10, x - 20, y + 3, x + 20, y + 3, x + 25, y - 10); //parte inferior de la cúpula
    noFill();
    arc(x, y - 18, 23, 23, HALF_PI * 3, 0); //reflejo de la cúpula
    noStroke();
  }

  t %= 4; // modulo 4 se asegura que t nunca sea superior a 3 así los tiempos son 0, 1 , 2, 3
  if (t == 0) { //cuando t = 0 se hace la primera parte de la animación es decir la luna va de izq a derecha
    if (x >= 1100) { //solo si le objeto salió del canvas se aumenta t y se reinician apropiadamente las variables
      t++; //avanza el tiempo cuando el astro sale de la pantalla
      x = 300; //valores iniciales para el siguiente tiempo
      y = 400;
      vx = 3.6; //valores iniciales de las velocidades
      vy = -6.2;
    } else {
      fill(c - 255, c - 150, c); //cielo
      rect(0, 0, 1060, 400);

      fill(255); //luna
      ellipse(x, y, 80, 80);

      fill(c); //piso
      rect(0, 400, 1060, 300);

      fantasma(x * 1.4 - 250, 400); //crea diferentes fantassmas con aceleración diferente
      fantasma(x * 1.2 - 200, 500);
      fantasma(x * 1.3 - 150, 420);
      fantasma(x * 1.3 - 100, 400);
      fantasma(x * 1.1 - 40, 520);
      fantasma(x * 1.2 - 110, 480);
      if (frameCount % 2 == 0) { //cada dos cuadros crea números aleatorios para crear estrellas en lugares aleatorios del cielo
        p = Math.random();
        p *= 1060; //se multiplican por el número máximo que se quiere obtener
        o = Math.random();
        o *= 380;
      }
      estrella(p, o); //se crea siempre una estrella en ese punto
      estrella(o * 2.5, p / 2 - 140); // se crea simpre una estrella en el punto calculado a partir de los otros
      if (frameCount % 4 == 0) { //cada 4 cuadros se dibuja otra estrella en otros puntos calculados
        estrella(o * 2, o / 3 + o / 2);
      }



      x += vx; //cambia las variables de posicion de acurdo a la formula parabólica
      y += vy;
      vy += a;
    }
  } else if (t == 1) { //se repite lo mismo que el t=0 para el sol
    if (x >= 1100) {
      t++;
      x = 1060;
      y = 400;
      vx = -3.6;
      vy = -6.2;
    } else {
      fill(c - 255, c - 150, c); //cielo
      rect(0, 0, 1060, 400);

      fill(255, 170, 0); //sol
      ellipse(x, y, 80, 80);

      fill(c); //piso
      rect(0, 400, 1060, 300);
      nube(x * 1.5 - 100, 150); //crea las 4 nubes con aceleraciones diferentes
      nube(x * 1.3 - 200, 280);
      nube(x * 1.8 - 250, 320);
      nube(x * 1.8 - 250, 80);
      nave(400, y); //crea las 3 naves que suben y bajan con aceleración diferente
      nave(950, y * 1.1);
      nave(700, y * 1.3 - 50);

      x += vx;
      y += vy;
      vy += a;
    }
  } else if (t == 2) { //igual a t = 0 pero el sol se devuelve de derecha a izq
    if (x <= 300) { //cuando sale del canvas por el lado derecho se aumenta t y se reinician las variables
      t++;
      x = 1060;
      y = 400;
      vx = -3.6;
      vy = -6.2;
    } else {
      fill(c - 255, c - 150, c); //cielo
      rect(0, 0, 1060, 400);

      fill(255, 170, 0); //sol
      ellipse(x, y, 80, 80);

      fill(c); //piso
      rect(0, 400, 1060, 300);

      nube(x * 1.5 - 100, 150);
      nube(x * 1.3 - 200, 280);
      nube(x * 1.8 - 250, 320);
      nube(x * 1.8 - 250, 80);
      nave(400, y);
      nave(950, y * 1.1);
      nave(700, y * 1.3 - 50);

      x += vx;
      y += vy;
      vy += a;
    }
  } else if (t == 3) { //igual a t = 2 pero para la luna
    if (x <= 300) {
      t++;
      x = 300;
      y = 400;
      vx = 3.6;
      vy = -6.2;

    } else {
      fill(c - 255, c - 150, c); //cielo
      rect(0, 0, 1060, 400);

      fill(255); //luna
      ellipse(x, y, 80, 80);

      fill(c); //piso
      rect(0, 400, 1060, 300);

      fantasma(x * 1.4 - 250, 400);
      fantasma(x * 1.2 - 200, 500);
      fantasma(x * 1.3 - 150, 420);
      fantasma(x * 1.3 - 100, 400);
      fantasma(x * 1.1 - 40, 520);
      fantasma(x * 1.2 - 110, 480);

      if (frameCount % 2 == 0) {
        p = Math.random();
        p *= 1060;
        o = Math.random();
        o *= 380;
      }
      estrella(p, o);
      estrella(o * 2.5, p / 2 - 140);
      if (frameCount % 4 == 0) {
        estrella(o * 2, o / 3 + o / 2);
      }

      x += vx;
      y += vy;
      vy += a;
    }
  }

  if (false) { //este if es para no tener que comentar todo cada vez
    if (frameCount == 1) //se exporta el cuadro 1
      saveCanvas("flipBook" + frameCount, 'jpg');

    if (frameCount < 874 && frameCount % 9 == 0) //se exportan todos los cuadros saltandose 9 cada vez ya que la animación es larga
      saveCanvas("flipBook" + frameCount, 'jpg');

    if (frameCount == 878) //se exporta el último cuadro
      saveCanvas("flipBook" + frameCount, 'jpg');
  }
}
