var imagem = "";
const fps = 250;
const esquerda = $("#seta-esquerda");
const direita = $("#seta-direita");
esquerda.on("click", slider);
direita.on("click", slider);
function slider() {
    var slideTimer = setInterval(slideImage, fps);
}
function slideImage() {
    console.log("oi");
}
