var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('learn')
    .pauseFor(1000)
    .deleteAll()
    .typeString('design')
    .pauseFor(1000)
    .deleteAll()
    .typeString('code')
    .pauseFor(1000)
    .deleteAll()
    .typeString('develop')
    .pauseFor(1000)
    .deleteAll()
    .typeString('try out new')
    .pauseFor(1000)
    .start();