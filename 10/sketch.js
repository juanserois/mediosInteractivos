var tablaEducation

var numfilas;
var numColumnas;
var contador = 1;
var ratioPrev = 0;

function preload() {
  tablaEducation = loadTable('assets/education.csv', 'csv', 'header');
}

function setup() {
  createCanvas(windowWidth, 1400);
  background(0);

  numFilas = tablaEducation.getRowCount();
  numColumnas = tablaEducation.getColumnCount();


  for (var i = 0; i < numFilas; i++) {
    color = (map (contador, 0, 10 , 0 ,255))
    color = (map (color, 0, 500 , 0 ,255))
    print (color)
    var pais = tablaEducation.getString(i, 1);
    if (pais == "Colombia") {
      var ano = tablaEducation.getNum(i, 2);
      var serie = tablaEducation.getString(i, 3);
      var valor = tablaEducation.getString(i, 4);
      var splitString = split(valor, ',');
      valor = float(splitString[0] + splitString[1]);

      fill(255-color/2, color, color/2);
      if (contador % 3 == 1) {
        text(ano, 10, 30 * contador);
        text(serie, 50, 30 * contador);
        var ancho = map(valor, 1000, 7000, 0, width - 100);
        rect(380, 30 * contador - 8, ancho, 20)
        fill(255);
        if (color > 200)
        fill(0);
        text ( valor, 385 ,30 * contador +7)
        
      } else {
        splitString = split(serie, '(');
        if (splitString[1] == "male)") {
          ratioPrev = valor;
        }
        if (splitString[1] == "female)") {
          text("Female to male percentage", 10, 30 * contador - 30);
          var percentage = (valor / ratioPrev) * 100;
          text(percentage + " %", 380, 30 * contador- 30);
         
        }
      }
      contador++;
    }
  }
}

function draw() {
  // background(220);
}