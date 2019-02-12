
var direccion = 1; //dirección del movimiento, se usa para que las variables puedan avanzar y retroceder.
var vx = 0.7; //velocidad en x de la luna/sol
var vy = -0.7; //velocidad en y de la luna/sol
var x = 0; //posicion inicial x de la luna/sol
var y = 100; //posicion inicial y de la luna/sol
var a = 0.00392156862; //aceleración de los objetos
var t = 0; //tiempo para coordinar las 4 partes de la animación
var c = 0; // color que va entre 0 y 255.

function setup() {
  createCanvas(255, 170); //el canvas es de este tamaño ya que así en el tamaño de 9*6cm seria de 72dpi
  noStroke();
}

function draw() {
  c = c + 0.325 * direccion;//este pedazo de código hace que la variable de color oscile entre 0 y 255.
  if ((c < 0) || (c > 255)) {
    direccion = direccion * -1;
  }
  
  
  
  function estaticos(){//en esta función se pintan todos los objetos estáticos que van en las 4 partes de la animación
   
  }
  
//  function drawStar(cx, cy, spikes, outerRadius, innerRadius, col) {//función para dibujar estrellas, tomada de: https://stackoverflow.com/questions/25837158/how-to-draw-a-star-by-using-canvas-html5 con modificaciones propias
//    var rot = Math.PI / 2 * 3;
//    var x = cx;
//    var y = cy;
//    var step = Math.PI / spikes;

//    ctx.noStroke();
//    ctx.beginPath();
//    ctx.moveTo(cx, cy - outerRadius)
//    for (i = 0; i < spikes; i++) {
//        x = cx + Math.cos(rot) * outerRadius;
//        y = cy + Math.sin(rot) * outerRadius;
//        ctx.lineTo(x, y)
//        rot += step

//        x = cx + Math.cos(rot) * innerRadius;
//        y = cy + Math.sin(rot) * innerRadius;
//        ctx.lineTo(x, y)
//        rot += step
//    }
//    ctx.lineTo(cx, cy - outerRadius)
//    ctx.closePath();
//    ctx.lineWidth=5;
//    ctx.strokeStyle='blue';
//    ctx.stroke();
//    ctx.fillStyle='skyblue';
//    ctx.fill();

//}
  
   
    
    
    
  t %= 4;// modulo 4 se asegura que t nunca sea superior a 3 así los tiempos son 0, 1 , 2, 3
  if (t == 0) {//cuando t = 0 se hace la primera parte de la animación es decir la luna va de izq a derecha
    if (x >= 280) {//solo si le objeto salió del canvas se aumenta t y se reinician apropiadamente las variables
      t++;
      x = 0;
      y = 100;
      vx = 0.7;
      vy = -0.7;
    } else {
      fill(c - 255, c - 150, c); //cielo
      rect(0, 0, 255, 100);

      fill(255); //luna
      ellipse(x, y, 40, 40);

      fill(c); //piso
      rect(0, 100, 255, 70);
      
      estaticos();//llama la función que pinta los gráficos estáticos 

      x += vx;//cambia las variables de posicion de acurdo a la formula parabólica
      y += vy;
      vy += a;
    }
  } else if (t == 1) {//se repite lo mismo que el t=0 para el sol
    if (x >= 280) {
      t++;
      x = 255;
      y = 100;
      vy = -0.7;
      vx = -0.7;
    } else {
      fill(c - 255, c - 150, c); //cielo
      rect(0, 0, 255, 100);

      fill(255, 170, 0); //sol
      ellipse(x, y, 40, 40);

      fill(c); //piso
      rect(0, 100, 255, 70);
      estaticos();
      
      x += vx;
      y += vy;
      vy += a;
    }
  } else if (t == 2) {//igual a t = 0 pero el sol se devuelve de derecha a izq
    if (x <= -25) {//cuando sale del canvas por el lado derecho se aumenta t y se reinician las variables
      t++;
      x = 255;
      y = 100;
      vx = -0.7;
      vy = -0.7;
    } else {
      fill(c - 255, c - 150, c); //cielo
      rect(0, 0, 255, 100);

      fill(255, 170, 0); //sol
      ellipse(x, y, 40, 40);

      fill(c); //piso
      rect(0, 100, 255, 70);
      
      estaticos();
      
      x += vx;
      y += vy;
      vy += a;
    }
  } else if (t == 3) {//igual a t = 2 pero para la luna
    if (x <= -25) {
      t++;
      x = 0;
      y = 100;
      vx = 0.7;
      vy = -0.7;
    } else {
      fill(c - 255, c - 150, c); //cielo
      rect(0, 0, 255, 100);
      
      fill(255); //luna
      ellipse(x, y, 40, 40);
      
      fill(c); //piso
      rect(0, 100, 255, 70);
      
      estaticos();
      
      x += vx;
      y += vy;
      vy += a;
    }
  }
}