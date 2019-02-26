var col = 7; // color inicial negro
var herr = 7; // herramienta inicial circulo
var x = 0;
var y = 0;
var b = true; //variable de control

function setup() {
  createCanvas(windowWidth, windowHeight); //canvas del tamaño de la ventana
  background(255); //fondo blanco
  noStroke();
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

function fantasma(x, y) { // esta función dibuja fantasmas en las coordenadas x,y
  noStroke();
  ellipse(x, y, 40, 40); //cabeza
  rect(x - 20, y, 40, 40); //cuerpo
  ellipse(x - 15, y + 40, 10, 10); //pies
  ellipse(x - 5, y + 40, 10, 10); //
  ellipse(x + 5, y + 40, 10, 10); //
  ellipse(x + 15, y + 40, 10, 10); //
  fill(0); //color negro de los ojos
  ellipse(x - 8, y, 12, 12); //ojos
  ellipse(x + 8, y, 12, 12);
}

function nube(x, y) { //funcion que dibuja nubes
  ellipse(x, y - 1, 40, 40)
  ellipse(x + 40, y, 38, 38)
  ellipse(x + 5, y - 20, 20, 20)
  ellipse(x + 30, y - 18, 40, 40)
  rect(x, y - 5, 40, 24)
}

function nave(x, y) { //funcion que dibuja la nave espacial
  stroke(0);
  strokeWeight(3);
  ellipse(x, y, 100, 50);
  ellipse(x, y - 6, 100, 50);
  line(x - 30, y + 20, x - 40, y + 40);
  line(x + 30, y + 20, x + 40, y + 40);
  bezier(x - 25, y - 10, x - 20, y - 47, x + 20, y - 47, x + 25, y - 10);
  bezier(x - 25, y - 10, x - 20, y + 3, x + 20, y + 3, x + 25, y - 10);
  noFill();
  arc(x, y - 18, 23, 23, HALF_PI * 3, 0);
  noStroke();
}

function puntos(x, y) { //función que dibuja el pincel de 4 puntos
  ellipse(x - 20, y - 20, 10, 10);
  ellipse(x + 20, y - 20, 10, 10);
  ellipse(x - 20, y + 20, 10, 10);
  ellipse(x + 20, y + 20, 10, 10);
}

function cruz(x, y) { //función que dibuja la cruz
  line(x - 20, y - 20, x + 20, y + 20);
  line(x - 20, y + 20, x + 20, y - 20);
}

function spray(x, y) { //funcion que dibuja tipo spay
  a = Math.random() * 3 + 1;
  b = Math.random() * 2 + 1;
  for (m = 0; m < 20; m++) {
    ellipse(x + a * b, y + b * 2, a)
    ellipse(x + b * a / 1.2, y - a - 3 * 2.3, b)
    ellipse(x - a * a / 1.2, y + b - 3 * 2, a)
    ellipse(x - b * b / 1.3, y - a - 3 * 3, b)
    ellipse(x + a * b + 2, y + b * 2, a)
    ellipse(x + b * a + 3 / 1.2, y - a - 2 * 2.3, b)
    ellipse(x - a * a + 4 / 1.2, y + b - 3 * 2, a)
    ellipse(x - b * b + 4 / 1.3, y - a - 5 * 3, b)
  }
}

function lineas(x, y) {
  strokeWeight(1);
  line(x - 20, y - 20, x + 20, y - 20);
  line(x - 20, y - 10, x + 20, y - 10);
  line(x - 20, y, x + 20, y);
  line(x - 20, y + 10, x + 20, y + 10);
  line(x - 20, y + 20, x + 20, y + 20);
}

function triangulos(x, y) {
  triangle(x, y - 20, x - 4, y - 15, x + 4, y - 15);
  triangle(x - 20, y, x - 24, y + 5, x + -16, y + 5);
  triangle(x + 20, y, x + 16, y + 5, x + 24, y + 5);
}

function draw() {
  noStroke();
  fill(255, 255, 0); //amarillo
  rect(20, 70, 40, 40);
  fill(0, 0, 255); //azul
  rect(20, 120, 40, 40);
  fill(255, 0, 0); //rojo
  rect(20, 170, 40, 40);
  fill(0, 255, 0); //verde
  rect(20, 220, 40, 40);
  fill(255, 0, 255); //magenta
  rect(20, 270, 40, 40);
  fill(0, 255, 255); //cyan
  rect(20, 320, 40, 40);
  fill(0); //negro
  rect(20, 370, 40, 40);
  fill(85); //33% gris
  rect(20, 420, 40, 40);
  fill(127); //50% gris
  rect(20, 470, 40, 40);
  stroke(0);
  fill(255); //blanco
  rect(20, 520, 40, 40);
  noFill();
  stroke(0);
  rect(20, 570, 40, 40);
  stroke(255, 0, 0);
  cruz(40, 590)
  noStroke();
  fill(180);
  estrella(100, 40);
  fantasma(170, 30);
  fill(180);
  nube(240, 50);
  nave(380, 50);
  fill(180);
  noStroke();
  puntos(480, 50);
  stroke(180);
  cruz(550, 50);
  ellipse(620, 50, 50, 50);
  if (b == true) {
    spray(680, 50);
    b = !b;
  }
  lineas(730, 50);
  triangulos(800, 50);

  noStroke();
  if (col == 1) { //estas líneas seleccionan el color apropiado dependiendo del valor de la variable
    fill(255, 255, 0);
    stroke(255, 255, 0);
  } else if (col == 2) {
    fill(0, 0, 255);
    stroke(0, 0, 255);
  } else if (col == 3) {
    fill(255, 0, 0);
    stroke(255, 0, 0);
  } else if (col == 4) {
    fill(0, 255, 0);
    stroke(0, 255, 0);
  } else if (col == 5) {
    fill(255, 0, 255);
    stroke(255, 0, 255);
  } else if (col == 6) {
    fill(0, 255, 255);
    stroke(0, 255, 255);
  } else if (col == 7) {
    fill(0);
    stroke(0);
  } else if (col == 8) {
    fill(85);
    stroke(85);
  } else if (col == 9) {
    fill(127);
    stroke(127);
  } else if (col == 10) {
    fill(255);
    stroke(255);
  }


  if (mouseIsPressed) {

    if (mouseX <= 120 && mouseX >= 80 && mouseY >= 20 && mouseY <= 60) {
      herr = 1; //selecciona cada herramienta cuando se precionan los botones correspondientes
    }

    if (mouseX <= 190 && mouseX >= 150 && mouseY >= 10 && mouseY <= 76) {
      herr = 2;
    }

    if (mouseX <= 299 && mouseX >= 220 && mouseY >= 12 && mouseY <= 69) {
      herr = 3;
    }

    if (mouseX <= 430 && mouseX >= 330 && mouseY >= 10 && mouseY <= 75) {
      herr = 4;
    }

    if (mouseX <= 500 && mouseX >= 460 && mouseY >= 30 && mouseY <= 70) {
      herr = 5;
    }

    if (mouseX <= 570 && mouseX >= 530 && mouseY >= 30 && mouseY <= 70) {
      herr = 6;
    }

    if (mouseX <= 645 && mouseX >= 595 && mouseY >= 30 && mouseY <= 70) {
      herr = 7;
    }

    if (mouseX <= 680 && mouseX >= 640 && mouseY >= 30 && mouseY <= 70) {
      herr = 8;
    }

    if (mouseX <= 750 && mouseX >= 710 && mouseY >= 30 && mouseY <= 70) {
      herr = 9;
    }

    if (mouseX <= 820 && mouseX >= 780 && mouseY >= 30 && mouseY <= 70) {
      herr = 10;
    }


    if (mouseX <= 60 && mouseX >= 20 && mouseY >= 70 && mouseY <= 110) {
      col = 1; //selecciona cada color cuando se hace click en los botones de colores
    }

    if (mouseX <= 60 && mouseX >= 20 && mouseY >= 120 && mouseY <= 160) {
      col = 2;
    }

    if (mouseX <= 60 && mouseX >= 20 && mouseY >= 170 && mouseY <= 210) {
      col = 3;
    }

    if (mouseX <= 60 && mouseX >= 20 && mouseY >= 220 && mouseY <= 260) {
      col = 4;
    }

    if (mouseX <= 60 && mouseX >= 20 && mouseY >= 270 && mouseY <= 310) {
      col = 5;
    }

    if (mouseX <= 60 && mouseX >= 20 && mouseY >= 320 && mouseY <= 360) {
      col = 6;
    }

    if (mouseX <= 60 && mouseX >= 20 && mouseY >= 370 && mouseY <= 410) {
      col = 7;
    }

    if (mouseX <= 60 && mouseX >= 20 && mouseY >= 420 && mouseY <= 460) {
      col = 8;
    }

    if (mouseX <= 60 && mouseX >= 20 && mouseY >= 470 && mouseY <= 510) {
      col = 9;
    }

    if (mouseX <= 60 && mouseX >= 20 && mouseY >= 520 && mouseY <= 560) {
      col = 10;
    }

    if (herr == 1) { //pinta con la herramienta seleccionada
      estrella(mouseX, mouseY);
    } else if (herr == 2) {
      fantasma(mouseX, mouseY);
    } else if (herr == 3) {
      nube(mouseX, mouseY);
    } else if (herr == 4) {
      nave(mouseX, mouseY);
    } else if (herr == 5) {
      puntos(mouseX, mouseY);
    } else if (herr == 6) {
      cruz(mouseX, mouseY);
    } else if (herr == 7) {
      ellipse(mouseX, mouseY, 50, 50);
    } else if (herr == 8) {
      spray(mouseX, mouseY);
    } else if (herr == 9) {
      lineas(mouseX, mouseY);
    } else if (herr == 10) {
      triangulos(mouseX, mouseY);
    }

    if (mouseX <= 60 && mouseX >= 20 && mouseY >= 570 && mouseY <= 610) {
      background(255); // borra el dibujo pintando el fondo de nuevo cuando se hace click en el boton de la X roja
      b = true;
    }
  }

}
