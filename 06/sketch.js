ano = 0; //variables de tiempo
mes = 0;
dia = 0;
hora = 0;
minuto = 0;
segundo = 0;

xanalog = 0;//variables auxiliares para el inicio del programa
yanalog = 0;

cont1 = 0; //contador 1 cuenta cada vez que pasa un segundo
cont2 = 0; //contador 2 se usa para comparar con cont1 y saber si pasó un segundo

xObj = 0; //coordenadas del objeto para espichar
yObj = 0;

contadorPuntos = 1; //contador de los puntos que lleva la persona
contadorSegundos = 0; //contador de segundos transcurridos
vel = 1; //velocidad del reloj

inicio = true; //variables que se usan para controlar estado 

function analog(x, y) {

  horaAnalog = 0;
  minutoAnalog = 0;
  segundoAnalog = 0;
  noFill();
  stroke(0, 255, 255);
  angleMode(DEGREES);
  ellipse(x, y, height / 10, height / 10);

  horaAnalog = hour();
  if (horaAnalog > 12)
    horaAnalog -= 12;
  horaAnalog = map(hour(), 0, 12, 0, 360);
  minutoAnalog = map(minute(), 0, 60, 0, 360);
  segundoAnalog = map(second(), 0, 60, 0, 360);

  push();
  translate(x, y);
  rotate(segundoAnalog);
  line(0, 0, 0, -height / 20);
  pop();

  push();
  translate(x, y);
  rotate(minutoAnalog);
  strokeWeight(2);
  line(0, 0, 0, -height / 22);
  pop();

  push();
  translate(x, y);
  rotate(horaAnalog);
  strokeWeight(3);
  line(0, 0, 0, -height / 24);
  pop();
}

function inicial() { //esta funcion maneja la pantalla de inicio
  background(0); //fondo negrouro
  if (second() % 5 == 0) {
    xanalog = random(20, width - 20);
    yanalog = random(20, height - 20);
  }
  analog(xanalog, yanalog);
  fill(255); //blanco para el texto
  textSize(70); //tamañp de texto
  textFont('Georgia');
  textAlign(CENTER, CENTER);
  text('Concentración y tiempo', width / 2, 100); //texto posicion relativa al tamaño del canvas
  textSize(20); //tamaño del segundo texto
  textAlign(CENTER, CENTER);
  text('El tiempo pasa a velocidad inversamente proporcional a la concentración', width / 2, 250); //texto en posicion relativa al tamaño del canvas
  textSize(40); //tamaño del tercer texto
  text('INICIAR', width / 2, height / 2 + 80); //texto en posicion relativa al tamaño del canvas

  if (mouseIsPressed) {
    if (mouseX <= width / 2 + 80 && mouseX >= width / 2 - 80 && mouseY >= height / 2 + 65 && mouseY <= height / 2 + 95) {
      inicio = !inicio; //si se preciona el "boton" de iniciar se cambia el estado de incio a false.
    }
  }
}

function setup() {

  createCanvas(windowWidth, windowHeight); //canvas del tamaño del navegador
  xObj = random(20, width - 20); //el objeto sale en una posición aleatoria
  yObj = random(20, height - 20);

  ano = year(); //se inicializan las variables con la fecha y hora actual
  mes = month();
  dia = day();
  hora = hour();
  minuto = minute();
  segundo = second();

  ano = map(ano, 0, 2500, 0, width); //el map para que las lineas se dibujen entre la pantalla
  mes = map(mes, 1, 12, 0, width);
  dia = map(dia, 1, 31, 0, width);
  hora = map(hora, 0, 12, 0, width);
  minuto = map(minuto, 0, 60, 0, width);
  segundo = map(segundo, 0, 60, 0, width);

  cont1 = cont2 = second(); //se inicializan los contadores con el segubdo actula
}

function draw() {

  if (inicio) { //si la variable de inicio es verdadera se muestra a pantalla inicial
    inicial();
  } else { //si no pasa ninguno de los casos contrario el juego sigue su ejecución normal
    background(0);

    background(0);
    noFill();
    stroke(255);

    cont1 = second(); //pedazo de codigo que compara si ya pasó un segundo
    if (cont1 != cont2) {
      cont1 = cont2;
      contadorSegundos++; //se suma un segundo al contador de segundos
      segundo += vel; //el segundo aumenta por la velocidad
    }

    if (segundo >= width) { //cada vez que el segundo se "sale" de la pantalla retorna a 0 y suma 1 minuto
      segundo = 0;
      minuto++;
    }
    if (minuto >= width) { //esto mismo se hace para las otras variables de tiempo
      minuto = 0
      hora++;
    }

    if (hora >= width) {
      hora = 0;
      dia++;
    }

    if (dia >= width) {
      dia = 0;
      mes++;
    }

    if (mes >= width) {
      mes = 0;
      ano++;
    }

    if (ano >= width) {
      ano = 0;
    }




    rect(0, 10, width - 1, 100); //los rectangulos que representan el tiempo
    line(ano, 10, ano, 110);

    rect(0, 110, width - 1, 200);
    line(mes, 110, mes, 210);

    rect(0, 210, width - 1, 300);
    line(dia, 210, dia, 310);

    rect(0, 310, width - 1, 400);
    line(hora, 310, hora, 410);

    rect(0, 410, width - 1, 500);
    line(minuto, 410, minuto, 510);

    rect(0, 510, width - 1, 600);
    line(segundo, 510, segundo, 610);

    fill(255);
    analog(xObj, yObj); //el objeto que el usuario debe presionar

    if (mouseIsPressed) {

      if (mouseX >= xObj - height / 20 & mouseX <= xObj + height / 20 & mouseY >= yObj - height / 20 && mouseY <= yObj + height / 20) {
        xObj = random(20, width - 20); //si el bojeto es precionado se reubica en otra ubicción al azar
        yObj = random(20, height - 20);
        contadorPuntos++; // se suma un punto
      }
    }

    vel = contadorSegundos / (contadorPuntos * 3) //secalcula la velocidad a la que va el reloj con los segundos transcurridos y los puntos obtenidos

  }
}