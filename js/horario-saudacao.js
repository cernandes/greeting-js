function carregar() {
  var msg = window.document.getElementById("msg");
  var foto = window.document.getElementById("imagem");
  var data = new Date();
  var horas = data.getHours();
  var minutos = data.getMinutes();
  var segundos = data.getSeconds();

  if (horas < 10) {
    horas = '0' + horas;
  }
  if (minutos < 10) {
    minutos = '0' + minutos;
  }
  if (segundos < 10) {
    segundos = '0' + segundos;
  }
  var horario = horas + ":" + minutos + ":" + segundos;
  msg.innerHTML = `Agora são ${horario} `;

  if (horas >= 0 && horas < 12) {
    foto.src = "img/fotomanha.png";
    document.body.style.background = "#b0c4a9";
    greating.innerHTML = "Bom dia!";
  } else if (horas >= 12 && horas < 18) {
    foto.src = "img/fototarde.png";
    document.body.style.background = "#fa6700";
    greating.innerHTML = "Boa tarde!";
  } else {
    foto.src = "img/fotonoite.png";
    document.body.style.background = "#242841";
    greating.innerHTML = "Boa noite!";
  }
}

window.setInterval("carregar()", 1000);
