var tablaEducation; //variable de la tabla csv

var img; //variable de la imagen de fondo

var numfilas; //numero de filas de la tabla
var numColumnas; //numero de columnas de la tabla 
var contador = 1; //contador que uso para graficar los datos
var ratioPrev = 0; // variable que guarda el ratio de hombres en cada caso para hacer el calculo

function preload() {
  tablaEducation = loadTable('assets/education.csv', 'csv', 'header'); //carga de la tabla
  img = loadImage('assets/colombia.jpg'); //carga de la imagen
}

function setup() {
  createCanvas(1200, 1350); //canvas
  image(img, 0, 0, 1200, 1350); //imagen de fondo
  background(0, 0, 0, 200); //fondo negro semitransparente  

  numFilas = tablaEducation.getRowCount(); //sacar el numero de final de la tabla
  numColumnas = tablaEducation.getColumnCount(); //sacar el numero de columnas de la tabla


  for (var i = 0; i < numFilas; i++) { //for para recorrer las filas de la tabla
    color = (map(contador, 0, 10, 0, 255)); //calculos para relacionar el contador y el color
    color = (map(color, 0, 500, 0, 255)); //areglo del color ya que con un map no funciona
    var pais = tablaEducation.getString(i, 1); // el pais de la tabla
    if (pais == "Colombia") { //solo si el pais es colombia se hace el resto
      var ano = tablaEducation.getNum(i, 2); //se sacan los datos necesarios 
      var serie = tablaEducation.getString(i, 3);
      var valor = tablaEducation.getString(i, 4);
      var splitString = split(valor, ','); //se arregla el valor quitando la coma intermedia
      valor = float(splitString[0] + splitString[1]); //se convierte en float el valor de nuevo

      fill(255 - color / 2, color, color / 2); //color de los elementos de la gráfica
      if (contador % 3 == 1) { // si contador % 3 == 1 son las filas de la cantidad de alumnos
        text(ano, 10, 30 * contador); //se imprime el año
        text(serie, 50, 30 * contador); //se imprime la serie (el titulo de la info)
        var ancho = map(valor, 1000, 7000, 0, width - 100); //map para que el valor quede bien representado en pantalla
        rect(380, 30 * contador - 8, ancho, 20) //rectangulo que representa la cantidad de alumnos
        fill(255); 
        if (color > 200) //cambia el color del numero para que se vea bien en todos los colores de las barras
          fill(0);
        text(valor, 385, 30 * contador + 7) //se inprime dentro de cada barra el valor que está representando

      } else {
        splitString = split(serie, '('); //se separa el string para saber cual es el ratio de hombres y mujeres
        if (splitString[1] == "male)") { //si es es de hombres lo guarda en la variable para hecer el calculo despues
          ratioPrev = valor;
        }
        if (splitString[1] == "female)") { 
          text("Female to male percentage", 10, 30 * contador - 30); //si es el de mujeres imprime el texto
          var percentage = (valor / ratioPrev) * 100; //hace el calculo del porcentaje con el valor guardado
          text(percentage + " %", 380, 30 * contador - 30); //imprime el porcentaje

        }
      }
      contador++; //aumenta el contador 
    }
  }
}

function draw() {
  // background(220);
}
