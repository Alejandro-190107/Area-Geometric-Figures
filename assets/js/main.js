function areaSquare() {
  var resultSquare = document.getElementById("resultSquare");
  var sideSquare = parseInt(document.getElementById("sideSquare").value);
  let area = sideSquare * sideSquare;

  resultSquare.innerHTML = "El Área Del Cuadrado Es " + area + ' cm<sup>2</sup>';
}

function areaRectangle() {
  var resultRectangle = document.getElementById("resultRectangle");
  var base = parseInt(document.getElementById("baseRectangle").value);
  var height = parseInt(document.getElementById("alturaRectangle").value);
  let area = base * height;

  resultRectangle.innerHTML = "El Área Del Rectángulo Es " + area + ' cm<sup>2</sup>';
}

function areaTriangle() {
  var resultTriangle = document.getElementById("resultTriangle");
  var base = parseInt(document.getElementById("baseTriangle").value);
  var height = parseInt(document.getElementById("alturaTriangle").value);
  let area = base * height / 2;

  resultTriangle.innerHTML = "El Área Del Triángulo Es " + area + ' cm<sup>2</sup>';
}

function areaCircle() {
  var resultCircle = document.getElementById("resultCircle");
  var radioCircle = parseInt(document.getElementById("radioCircle").value);
  let pi = 3.1416; 
  let area = pi * (radioCircle * radioCircle);

  resultCircle.innerHTML = "El Área Del Circulo Es " + area + ' cm<sup>2</sup>';
}