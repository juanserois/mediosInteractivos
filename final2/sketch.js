var tabla; //variable para cargar la tabla

var colombia; //variables de las banderas de los países
var china;
var usa;
var brazil;

var mundo; //variable del mundo para seleccionar
var soldado; //soldado que representa 100´000 
var map; //fonfdo de la animación
var rotate; //icono para que la gente sepa que debe rotar el ipad

var titulo; //fuente

var right; //botones para avanzar, retroceder y reiniciar
var left;
var restart;

var xColombia; //coordenadas x y y de las banderas
var yColombia;
var xChina;
var yChina;
var xUsa;
var yUsa;
var xBrazil;
var yBrazil;

var INTRODUCCION = 0; //constantes que representan los estados
var INSTRUCCIONES = 1;
var INTERACCION = 2;
var COMPARACION = 3;

var COLOMBIA = 0; //constantes que representan los paises
var CHINA = 1;
var BRAZIL = 2;
var USA = 3;

var estado = INTRODUCCION; //estaso incial

var cantidad; //dato leido de la tabla para hacer los calculos necesarios
var pais; //pais seleccionado en un determinado momento

function preload() { //se carga la tabla, las imagenes y la fuente.
  tabla = loadTable('assets/tabla.csv', 'csv', 'header');
  map = loadImage('assets/map.jpg');
  rotate = loadImage('assets/rotate-ipad.png');
  colombia = loadImage('assets/colombia.png');
  china = loadImage('assets/china.png');
  usa = loadImage('assets/united-states.png');
  brazil = loadImage('assets/brazil.png');
  mundo = loadImage('assets/worldwide.png');
  soldado = loadImage('assets/soldier.png');
  right = loadImage('assets/right.png');
  left = loadImage('assets/left.png');
  money = loadImage('assets/money.png');
  restart = loadImage('assets/restart.png');
  titulo = loadFont('assets/titulo.ttf');

}

function touchMoved() { //desabilita el scroll
  return false;
}

function touchEnded() { //se usa para cambiar los primeros estados donde se puede tocar cualquier parte
  if (estado == INTRODUCCION) {
    estado = INSTRUCCIONES;
    return false; //return false para que solo pase un estado a la vez y salga del método
  }

  if (estado == INSTRUCCIONES) {
    estado = INTERACCION;
    return false;
  }

}

function setup() {
  createCanvas(windowWidth, windowHeight); //canvas del tamaño del dispositivo

  xColombia = width / 2 - 64; //variables de posicion de las banderas se inicializan
  yColombia = 30;
  xChina = width - 178;
  yChina = height / 2 - 64;
  xUsa = 50
  yUsa = height / 2 - 64;
  xBrazil = width / 2 - 64;
  yBrazil = height - 158

  cantidad = 0;
  textAlign(CENTER, CENTER); //alineación para todos los textos
  fill(255);
  noStroke();
  textFont(titulo);
}

function draw() {
  fill(255); //reyeno para los textos

  if (estado == INTRODUCCION) { //primer estado

    image(map, 0, 0, width, height); //fondo
    background(0, 0, 0, 150); //tinte negro semitransparente para que las letras se vean bien

    strokeWeight(4);
    textSize(50); // tamaño de letra del título
    
    text("{Milicias del mundo}", width / 2, height / 4); //título
    
    textSize(22);
    
    text("Cuando pensamos en los ejércitos más grandes y poderosos del mundo \n probablemente pensemos en países como: \n Estados Unidos, China o incluso Brasil en el caso de Latinoamérica. \n Sin embargo sorprende ver que en el ejercito colombiano \n haya un porcentage mayor de la población del país \n y se use un mayor porcentaje del PIB del país para financiarlo.", width / 2, height / 2); //descripción inicial
    
    textSize(25);
    
    text("Toca en cualquier parte para continuar", width / 2, height - 30);
  }


  if (estado == INSTRUCCIONES) { //segunda parte solo muestra instrucciones
    image(map, 0, 0, width, height);
    background(0, 0, 0, 150);
    
    textSize(30);
    
    text("Instrucciones", width / 2, 100);
    
    image(rotate, width / 2 - 100, height / 2 - 120, 200, 200); //imagen del ipad rotado
    
    textSize(25);
    noStroke();
    
    text("Desplazar el mundo a una bandera para seleccionar un país \n Rotar el iPad  para ver diferente información", width / 2, height / 2 + 150);
    textSize(25);
    text("Toca en cualquier parte para continuar", width / 2, height - 30);
  }


  if (estado == INTERACCION) { //estado principal de interacción
 
    image(map, 0, 0, width, height);
    background(0, 0, 0, 180);


    image(right, width - 90, height - 90, 80, 80); //flecha para avanzar de estado

    image(colombia, xColombia, yColombia); //imagenes de las banderas
    image(china, xChina, yChina);
    image(usa, xUsa, yUsa);
    image(brazil, xBrazil, yBrazil);

    textSize(25);
    text("Toca en la flecha para continuar", width / 2, height - 30);

    image(mundo, mouseX - 50, mouseY - 50, 100, 100); //mundo para seleccionar se dibuja donde se haya tocado o arrastrado

    if (rotationX > -30 && rotationX < 30 && rotationY < -45 && rotationY > -90) { //si el ipad no se rota se muestra el numero de militares

      if (dist(mouseX, mouseY, xColombia, yColombia) < 120) { //si el mundo esta sobre un país se coge el dato de la tabla y se divide en 100'000 para la representación, este dato se guarda en cantidad
        cantidad = tabla.getNum(23, 2);
        cantidad = ceil(cantidad /= 100000);
        pais = COLOMBIA;
      }

      if (dist(mouseX, mouseY, xChina, yChina) < 120) {
        cantidad = tabla.getNum(11, 2);
        cantidad = ceil(cantidad /= 100000);
        pais = CHINA;
      }
      
      if (dist(mouseX, mouseY, xUsa, yUsa) < 120) {
        cantidad = tabla.getNum(34, 2);
        cantidad = ceil(cantidad /= 100000);
        pais = USA;
      }
      
      if (dist(mouseX, mouseY, xBrazil, yBrazil) < 120) {
        cantidad = tabla.getNum(1, 2);
        cantidad = ceil(cantidad /= 100000);
        pais = BRAZIL;
      }
      
      for (i = 0; i < cantidad; i++) { //el for pinta la cantidad de soldados adecuados los if, hacen el "salto de linea" para que ocupen el espacio adecuado
        if (i <= 9)
          image(soldado, 235 + i * 50, (height / 2 - 100), 50, 50);
        if (i > 9 && i < 20)
          image(soldado, 235 + (i - 10) * 50, (height / 2), 50, 50);
        if (i > 19)
          image(soldado, 235 + (i - 20) * 50, (height / 2 + 100), 50, 50)
      }
      
      textSize(18);

      text("Cada soldado representa 100´000 tropas", width / 2, 200)

    } else if (rotationX > 30 && rotationY > -80 && rotationY < 80) { //si se rota hacia un lado se muestra el porcentage del pib usado para financiar el ejército

      if (dist(mouseX, mouseY, xColombia, yColombia) < 120) {
        cantidad = tabla.getNum(23, 3);
        cantidad = (cantidad /= 100000000000000); //este cálculo tocó hacerlo por un error en los datos que no leía el porcentage correctamente
        pais = COLOMBIA;
      }

      if (dist(mouseX, mouseY, xChina, yChina) < 120) {
        cantidad = tabla.getNum(11, 3);
        cantidad = (cantidad /= 100000000000000);
        pais = CHINA;
      }
      if (dist(mouseX, mouseY, xUsa, yUsa) < 120) {
        cantidad = tabla.getNum(34, 3);
        cantidad = (cantidad /= 100000000000000);
        pais = USA;
      }
      if (dist(mouseX, mouseY, xBrazil, yBrazil) < 120) {
        cantidad = tabla.getNum(1, 3);
        cantidad = (cantidad /= 100000000000000);
        pais = BRAZIL;
      }
      textSize(22);
      text("Gasto percentual del PIB \n usado para  financiar \n las fuerzas armadas: " + cantidad + " %", width / 2, height / 2)
    } else if (rotationX < -30 && rotationY > -80 && rotationY < 80) { // por último si se rota al otro lado se muestra la cantidad de millones de dólares 

      if (dist(mouseX, mouseY, xColombia, yColombia) < 120) {
        cantidad = tabla.getNum(22, 4);
        cantidad *= 0.00031; //tasa de cambio de cada moneda local a dólar usd
        cantidad = ceil(cantidad /= 1000000); //se muestra la cantidad en millones de dólares por simplicidad
        pais = COLOMBIA;

      }

      if (dist(mouseX, mouseY, xChina, yChina) < 120) {
        cantidad = tabla.getNum(11, 4);
        cantidad *= 0.15;
        cantidad = ceil(cantidad /= 1000000);

        pais = CHINA;
      }
      if (dist(mouseX, mouseY, xUsa, yUsa) < 120) {
        cantidad = tabla.getNum(33, 4);
        cantidad = ceil(cantidad /= 1000000);
        pais = USA;
      }
      if (dist(mouseX, mouseY, xBrazil, yBrazil) < 120) {
        cantidad = tabla.getNum(0, 4);
        cantidad *= 0.25;
        cantidad = ceil(cantidad /= 1000000);
        pais = BRAZIL;

      }
      textSize(22);

      text("Gasto total de recursos para financiar \n el ejercito: " + cantidad + " millones de dolares ", width / 2, height / 2);
    } 
    
    else { // si el ipad no se tiene en alguna de las posiciones que muestran información se muestra el mensaje para que el uruasio lo ponga en la orientación correcta
      fill(255, 0, 0);
      textSize(20);
      text("Tome el ipad frente a usted de manera horizontal \n inclinelo hacia los lados para ver diferente información", width / 2, height / 2);

    }

    if (mouseX > width - 90 && mouseY > height - 100) //se verifica si se preciona la flecha para avanzar de estado
      estado = COMPARACION;
  }


  if (estado == COMPARACION) { //estado de comparaciuón entre países
    image(map, 0, 0, width, height);
    background(0, 0, 0, 180);

    image(left, 10, height - 90, 80, 80); //imagen de flecha para volver un estado y poder cambiar de país
    image(restart, width - 90, 10, 80, 80); //imagen para reiniciar la infografía
    var x = "";  //variables auciliares
    var y = 0;
    var z = 0;
    var m = 0;
    var n = 0;
    if (pais == COLOMBIA) { //datos calculados manualmente de cuantos soldados tendria y cuanto dinero invertiria colombia si fuera como el otro país y que tan grande es esa medida respecto al otro país
      x = "Colombia"
      y = 481100;
      z = 0;
      m = 8224;
      n = 0;
    }
    if (pais == USA) {
      x = "USA"
      y = 3487400;
      z = 2.58;
      m = 571616.84
      n = 0.95;
    }
    if (pais == BRAZIL) {
      x = "Brazil"
      y = 2215400;
      z = 3.03;
      m = 96754.85;
      n = 2.27;

    }
    if (pais == CHINA) {
      x = "China"
      y = 14787000;
      z = 5.48;
      m = 657156.67;
      n = 1.59

    }

    textSize(22);
    text("Si Colombia tuviera la misma poblacion de " + x + " tendría: " + y + " soldados.  \n Es decir que tendría un ejército " + z + " veces más grande que " + x + "\n \n" + "Si Colombia tuviera la misma economía de " + x + " tendría: " + m + " millones de dólares. \n Es decir que tendría un ejército " + n + " veces tan rico como el ejército de " + x, width / 2, height / 2); //texto que concatena toda la información
    textSize(25);
    text("Toca en la flecha para seleccionar otro país \n o en el icono de la esquina superior derecha para reiniciar", width / 2, height - 30);

    if (mouseX < 90 && mouseY > height - 100) { //si se toca la flecha izquierda regresa un estado
      estado = INTERACCION;
      return false;
    }

    if (mouseX > width - 90 && mouseY < 100) { //si se toca la flecha curva regresa al principio de la inforgrafía
      estado = INTRODUCCION;
      return false;
    }

  }

}
