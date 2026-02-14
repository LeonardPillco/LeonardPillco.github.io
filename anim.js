// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Quien iba a pensar", time: 14 },
  { text: "Que me iba a juiciar", time: 16 },
  { text: "Y que algun dia yo diria", time: 20 },
  { text: "Te encontre, ya encontre", time: 22 },
  { text: "La mujer que por tanto tiempo habia esperado", time: 27 },
  { text: "y no se", time: 29 },
  { text: "si creer ", time: 30.5 },
  { text: "que en verdad existe o es que estoy alucinando", time: 34 },
  { text: "no hace falta ver sus alas pa‘ creer ", time: 37 },
  { text: "Que ella es el ángel que Dios me mandó", time: 40 },
  { text: "pa‘ que me cuidara...", time: 42 },
  { text: "Y es que esa carita", time: 44 },
  { text: "ese pelo, esa cinturita", time: 46 },
  { text: "Esos ojitos tan bonitos", time: 48 },
  { text: "esa boquita rosadita", time: 50 },
  { text: "Me hace sentir el dueño del mundo", time: 53 },
  { text: "ay, ay, ay - Quién lo creería", time: 55 },
  { text: "que yo me enamoraría así, así", time: 58 },
  { text: "Y es que por ti", time: 60 },
  { text: "Hago lo que sea, niña linda", time: 62 },
  { text: "Porque me has cambiado", time: 64 },
  { text: "Y le has dado color a mi vida", time: 66 },
  { text: "Definitivamente estoy enamorado", time: 72 },
  { text: "Y no hay nadie que me contradiga", time: 74 },
  { text: "Gracias a Dios", time: 76 },
  { text: "Que me mandó", time: 78 },
  { text: "Quien le va a dar sentido a mi vida", time: 82 },
  { text: "Ella es", time: 84 },
  { text: "Ella es", time: 84.5 },
  { text: "Ella es", time: 87 },
  { text: "Realmente el amor de mi vida", time: 92 },
  { text: "Te encontré, ya encontré", time: 94 },
  { text: "La mujer que por tanto tiempo había esperado", time: 97 },
  { text: "Y no se", time: 101 },
  { text: "si creer", time: 102 },
  { text: "Que en verdad existe o es que estoy alucinando", time: 104 },
  { text: "Que en verdad existe o es que estoy alucinando", time: 106 },
  { text: "No hace falta ver sus alas", time: 108 },
  { text: "pa' creer", time: 109 },
  { text: "Que ella es el ángel que Dios me mandó.", time: 111 },
  { text: "Que ella es el ángel que Dios me mandó.", time: 112 },
  { text: "pa‘ que me cuidara...", time: 113 },
  { text: "Y es que esa carita", time: 115 },
  { text: "ese pelo, esa cinturita", time: 117 },
  { text: "Esos ojitos tan bonitos", time: 119 },
  { text: "esa boquita rosadita", time: 121 },
  { text: "esa boquita rosadita", time: 122 },
  { text: "Aun recuerdas nuestra musica mi amor??", time: 125 },
  { text: "Aun recuerdas nuestra musica mi amor??", time: 127 },
  { text: "Este detalle lo he hecho con mucho amor para ti...", time: 129 },
  { text: "Este detalle lo he hecho con mucho amor para ti...", time: 131 },
  { text: "No todo es fisico, aveces solo es necesario un poco de imaginacion", time: 135 },
  { text: "No todo es fisico, aveces solo es necesario un poco de imaginacion", time: 137 },
  { text: "Y wualaaaa...", time: 140 },
  { text: "Con codigos te he demostrado mi amor <3 ", time: 143 },
  { text: "Con codigos te he demostrado mi amor <3 ", time: 145 },
  { text: "Te dejo disfrutar nuestra canción ", time: 147 },
  { text: "TE AMO 3 MILLONES MI REYNA ", time: 152 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);