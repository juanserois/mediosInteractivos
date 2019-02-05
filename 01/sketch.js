function setup() {

  createCanvas(200, 220);
  noStroke(); // hace que las figuras no tengan borde
  background(250); // lo dejé así para que se vea el canvas para que se note la proporción y ubicacion de las formas
  
  fill(255,0,0); //relleno rojo para el "boomereng"
  beginShape(); //crea la forma de "boomereng"
  vertex(108, 9);
  vertex(91, 25.5);
  vertex(110.5, 20.5);
  vertex(142.5, 40);
  endShape(CLOSE); //cada vertice de la figura con coordenadas (x,y)
  
  fill(150, 120, 50, 150); //relleno amarillo semitrsparente para el cuadrilatero amarillo grande de fondo
  beginShape(); //crea la forma amarilla grande de fondo
  vertex(98, 150);
  vertex(137, 115);
  vertex(107, 68);
  vertex(53, 100);
  endShape(CLOSE);
  
  fill(0); // relleno negro para el triangulo que va encima
  triangle(105 , 40 , 110 , 45 , 140 , 5);// triangulo negro que va encima
  
  fill(255); // relleno blanco para la figura que va encima de las dos anteriores
  beginShape(); //crea la forma que va encima blanca
  vertex(119.5, 25.5);
  vertex(123, 28);
  vertex(125.3, 24.6);
  vertex(122.7, 22.2);
  endShape(CLOSE);
  
  fill(0); //relleno negro para el fondo del "ajedrez"
  quad(126, 48, 132, 50,135.5, 41, 129, 38); //fondo del "ajedrez"
  
  ellipse(114, 84, 22, 22); //crea el circulo negro que va más afuera cerca al centro de la pintura
  
  beginShape(); //crea la forma larga que atravieza casi toda la figura en diagonal
  vertex(39, 160);
  vertex(41, 163);
  vertex(151, 63);
  vertex(165, 48);
  endShape(CLOSE);
  
  fill(255); //color blanco para el circulo de adentro
  ellipse(114, 84, 15, 15); //crea el circulo blanco dentro del anterior
  fill(255, 0 ,0); //color rojo para el circulo pequeño del centro
  ellipse(115, 83, 3, 3); //crea el circulo del centro
  
  fill(145, 170, 230, 150); //relleno azul semitransparente para el cuadrilatero azul que va encima de la linea negra
  beginShape(); //crea la forma azul que va encima de la linea negra
  vertex(65, 118);
  vertex(67, 130);
  vertex(83, 124);
  vertex(72, 112);
  endShape(CLOSE);
  
  noFill();
  stroke(106, 67, 129);// color de la curva morada
  curve(120, 70, 115, 124, 142, 88, 87, 143);
 
 
 fill(0); //la forma negra que atravieza de arriba izq hacia abajo derecha
 noStroke();
  beginShape(); 
  vertex(67, 95);
  vertex(71, 79);
  vertex(92, 101);
  vertex(101, 96);
  vertex(110, 102);
  vertex(71, 79);
  vertex(163, 156);
  vertex(107, 107);
  vertex(102, 108);
  vertex(41, 163);
  vertex(39, 160);
  vertex(86, 108);
  vertex(72, 89);
  vertex(72, 98);
  endShape(CLOSE);

 

}