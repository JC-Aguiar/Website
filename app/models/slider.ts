var imagem: string = "";
const fps: number = 250;
const esquerda = $("#seta-esquerda");
const direita = $("#seta-direita");
esquerda.on("click", slider);
direita.on("click", slider);

function slider(): void {
    var slideTimer = setInterval(slideImage, fps);
}
 

function slideImage(): void {
    console.log("oi");
}

// $(function(){
//     $(".bootstrap-carousel").removeAttr("hidden");
//     $(".bootstrap-item").removeAttr("hidden");
// });