function setup() {
  // todos los triangulos son blancos, el fondo es un cuadrado café con otro amarillo adentro
  // cada triángulo mide 10
  createCanvas(320, 320);
  noStroke();
  c = color (`#4c453a`); //color café del fondo de toda la imagen
  fill (c) ;
  rect(0, 0, 320, 320); // fondo grande de toda la imagen

  c = color (`#FEC533`); // color amarillo para el cuadrado central
  fill (c) ;
  rect(80, 80, 160, 160); // cuadrado central amarillo

  fill (255) ; //color blanco para los triángulos

  function cuadrante(a, b, c, d, e, f) { //función que dibuja todos los triángulos de un cuadrante
    y1= b;
    y2= d;
    y3= f;
    for ( i = 0; i < 8; i ++) { // el for grande que recorre las 8 filas
      x1 = a;
      x2 = c;
      x3 = e; // reinicia las coordenadas x

      if (i == 0 || i == 4) { // existen 4 casos de filas posibles, cada if de la variable i denota un caso

        for (j = 0; j < 8; j++) { //for de la primera y quinta fila

          if (j == 0 || j==1 || j==4|| j==5) {

            triangle(x1, y1, x2, y2, x3, y3);
          } else {
            triangle(x1, y1, x2 - 10, y2 + 10, x3, y3);
          }
          x1 += 10;
          x2 += 10;
          x3 += 10;
        }
      }

      if (i == 1 || i == 5) { //for de la segunda y sexta fila

        for (k = 0; k < 8; k++) {

          if (k == 0 || k == 3 || k == 4|| k == 7) {
            triangle(x1, y1, x2, y2, x3, y3);
          } else {
            triangle(x1, y1, x2 - 10, y2 + 10, x3, y3);
          }
          x1 += 10;
          x2 += 10;
          x3 += 10;
        }
      }

      if (i == 2 || i == 6) {//for de la tercera y septima fila

        for (m = 0; m < 8; m++) {

          if (m == 2 || m == 3 || m == 6|| m == 7) {
            triangle(x1, y1, x2, y2, x3, y3);
          } else {
            triangle(x1, y1, x2 - 10, y2 + 10, x3, y3);
          }
          x1 += 10;
          x2 += 10;
          x3 += 10;
        }
      }

      if (i == 3 || i == 7) {//for de la cuarta y octaba fila

        for (n = 0; n < 8; n++) {

          if (n == 1 || n == 2 || n == 5|| n == 6) {
            triangle(x1, y1, x2, y2, x3, y3);
          } else {
            triangle(x1, y1, x2 - 10, y2 + 10, x3, y3);
          }
          x1 += 10;
          x2 += 10;
          x3 += 10;
        }
      }

      y1 += 10;
      y2 += 10;
      y3 += 10; // avance de y para saltar a una nueva fila
    }
  }


  cuadrante(0, 0, 10, 0, 10, 10);
  cuadrante(160, 0, 170, 0, 170, 10);
  cuadrante(80, 80, 90, 80, 90, 90);
  cuadrante(0, 0, 10, 0, 10, 10);
  cuadrante(240, 80, 250, 80, 250, 90);
  cuadrante(0, 160, 10, 160, 10, 170);
  cuadrante(160, 160, 170, 160, 170, 170);
  cuadrante(80, 240, 90, 240, 90, 250);
  cuadrante(240, 240, 250, 240, 250, 250);
}

// soy plenamente concsiente que no es la forma más eficiente, pero despues de pensarlo un rato no se me ocurrió como hacerlo mejor

function draw() {
}
