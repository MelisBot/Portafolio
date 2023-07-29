
let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 65,
});

typewriter
// 1000 milisegundos es 1 segundo
  .pauseFor(1000)
  .typeString('Lic. Computación')
  .deleteChars(20)
  .typeString('Melissa Jiménez')
  .pauseFor(300)
  .deleteChars(20)
  .start();