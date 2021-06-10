function scrollTo(to, duration = 700) {
    const
        element = document.scrollingElement || document.documentElement,
        start = element.scrollTop,
        change = to - start,
        startDate = +new Date(),
        // t = current time
        // b = start value
        // c = change in value
        // d = duration
        easeInOutQuad = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        },
        animateScroll = function () {
            const currentDate = +new Date();
            const currentTime = currentDate - startDate;
            element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
            if (currentTime < duration) {
                requestAnimationFrame(animateScroll);
            }
            else {
                element.scrollTop = to;
            }
        };
    animateScroll();
}

document.addEventListener('DOMContentLoaded', function () {
    let btn = document.querySelector('#toTop');
    window.addEventListener('scroll', function () {
        // Если прокрутили дальше 559px, показываем кнопку
        if (pageYOffset > 559) {
            btn.classList.add('show');
            // Иначе прячем
        } else {
            btn.classList.remove('show');
        }
    });

    // При клике прокручиываем на самый верх
    btn.onclick = function (click) {
        click.preventDefault();
        scrollTo(0, 400);
    }
});

// preloader
window.onload = function () {
    let preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 1000);
}
// calc buttons
let btnElementary = document.getElementById('btn-elementary');
let btnAlgebra = document.getElementById('btn-algebra');
let btnGeometry = document.getElementById('btn-geometry');
let btnGraphics = document.getElementById('btn-graphics');
function elementaryShow(){
    if(document.getElementById('elementary').classList = 1){
        document.getElementById('elementary').classList.add('show-calc')
        document.getElementById('algebra').classList.remove('show-calc')
        document.getElementById('algebra').classList.remove('1')
        document.getElementById('geometry').classList.remove('show-calc')
        document.getElementById('geometry').classList.remove('1')
        document.getElementById('graphics').classList.remove('show-calc')
        document.getElementById('graphics').classList.remove('1')
    }
    // if(document.getElementById('algebra').classList > 1){
    //     document.getElementById('algebra').classList.remove('show-calc')
    //     document.getElementById('algebra').classList.add('algebra')
    // } 
    // if(document.getElementById('geometry').classList > 1){
    //     document.getElementById('geometry').classList.remove('show-calc')
    //     document.getElementById('geometry').classList.add('geometry')
    // } 
    // if(document.getElementById('graphics').classList > 1){
    //     document.getElementById('graphics').classList.remove('show-calc')
    //     document.getElementById('graphics').classList.add('graphics')
    // } 
}
function algebraShow(){
    if(document.getElementById('algebra').classList = 1){
        document.getElementById('algebra').classList.add('show-calc')
        document.getElementById('elementary').classList.remove('show-calc')
        document.getElementById('elementary').classList.remove('1')
        document.getElementById('geometry').classList.remove('show-calc')
        document.getElementById('geometry').classList.remove('1')
        document.getElementById('graphics').classList.remove('show-calc')
        document.getElementById('graphics').classList.remove('1')
    }  
}
function geometryShow(){
    if(document.getElementById('geometry').classList = 1){
        document.getElementById('geometry').classList.add('show-calc')
        document.getElementById('elementary').classList.remove('show-calc')
        document.getElementById('elementary').classList.remove('1')
        document.getElementById('algebra').classList.remove('show-calc')
        document.getElementById('algebra').classList.remove('1')
        document.getElementById('graphics').classList.remove('show-calc')
        document.getElementById('graphics').classList.remove('1')
    }  
}
function graphicsShow(){
    if(document.getElementById('graphics').classList = 1){
        document.getElementById('graphics').classList.add('show-calc')
        document.getElementById('elementary').classList.remove('show-calc')
        document.getElementById('elementary').classList.remove('1')
        document.getElementById('algebra').classList.remove('show-calc')
        document.getElementById('algebra').classList.remove('1')
        document.getElementById('geometry').classList.remove('show-calc')
        document.getElementById('geometry').classList.remove('1')
    }  
}
// function stopShow(){
//     document.getElementById('elementary').classList.remove('show-calc')
//     document.getElementById('algebra').classList.remove('show-calc')
//     document.getElementById('geometry').classList.remove('show-calc')
//     document.getElementById('graphics').classList.remove('show-calc')
// }
btnElementary.onclick = elementaryShow;
btnAlgebra.onclick = algebraShow;
btnGeometry.onclick = geometryShow;
btnGraphics.onclick = graphicsShow;
// Elementary
let btnElementaryCalc = document.querySelector('.elementary-calc')
// function elementaryShowCalc(){
//     document.getElementById('elementary-wrap').classList.add('show-wrap');
// }

let optionEl = document.querySelector('.el-option');
function calculatorEl(){
    let num1 = +document.querySelector('.el-input-1').value
    let num2 = +document.querySelector('.el-input-2').value
    let s = 0
    if(optionEl.value == "+"){
        s = num1+num2;
    }
    else if(optionEl.value == "-"){
        s = num1-num2;
    }
    else if(optionEl.value == "*"){
        s = num1*num2;
    }
    else if(optionEl.value == "/"){
        s = num1e/num2;
    }
    document.querySelector('.result-elementary').textContent = s;
}
btnElementaryCalc.onclick = calculatorEl;
// Algebra
// квадратне рівняння
function quadraticFunc() {
    let in1 = document.querySelector(".quadr-input-1");
    let in2 = document.querySelector(".quadr-input-2");
    let in3 = document.querySelector(".quadr-input-3");
    let result = document.querySelector(".result-quadratic");

    let a = +in1.value;
    let b = +in2.value;
    let c = +in3.value;
    let D = (b * b) - (4 * a * c);
    if (D < 0) {
        result.textContent = "Розв'язків нема. Від'ємний дискримінант";
    }
    else if (D > 0) {
        let x1 = (-b - Math.sqrt(D)) / (2 * a);
        let x2 = (-b + Math.sqrt(D)) / (2 * a);
        result.textContent = "x1 = " + x1 + " x2 = " + x2;
    }
    else if (D == 0) {
        let x = -b / (2 * a);
        result.textContent = "x = " + x;
    }
    else {
        result.textContent = "Щось не пішло :(";
    }
}
   
document.querySelector(".quadratic-calc").onclick = quadraticFunc;

// степінь
function powerFunc(){
    let num1 = +document.querySelector(".power-input-1").value;
    let num2 = +document.querySelector(".power-input-2").value;
    document.querySelector(".result-power").textContent = Math.sqrt(num1, num2);
}
document.querySelector('.power-calc').onclick = powerFunc
// корінь
function sqrtFunc(){
    let num1 = +document.querySelector(".sqrt-input-1").value;
    let num2 = +document.querySelector(".sqrt-input-2").value;
    let s = num1
    let i = 0
    while(i<num2-1){
        s = num1*s;
        i++;
    }
    document.querySelector(".result-sqrt").textContent = s
    s = 0;
    i = 0;
    num2 = 0;
    num1 = 0;
}
document.querySelector(".sqrt-calc").onclick = sqrtFunc;
// btnAlgebra
let quadraticEquation = document.querySelector('.quadratic-equation'),
    power = document.querySelector('.power'),
    sqrt = document.querySelector('.sqrt')
    quadraticEquationWrap = document.querySelector('.quadratic-equation-wrap'),
    powerWrap = document.querySelector('.power-wrap'),
    sqrtWrap = document.querySelector('.sqrt-wrap');
    

    quadraticEquation.onclick = () => {
    powerWrap.classList.remove('show-wrap')
    quadraticEquationWrap.classList.toggle('show-wrap')
}

power.onclick = () => {
    powerWrap.classList.toggle('show-wrap');
    quadraticEquationWrap.classList.remove('show-wrap')
    sqrtWrap.classList.remove('show-wrap')

}
sqrt.onclick = () => {
    sqrtWrap.classList.toggle('show-wrap');
    quadraticEquationWrap.classList.remove('show-wrap')
    powerWrap.classList.remove('show-wrap')

}
// geometry
function geoChooseCos(){
        document.getElementById('geo-cos').classList.toggle('show-wrap')
        document.getElementById('kvadrat').classList.remove('show-wrap')
        document.getElementById('krug').classList.remove('show-wrap')
        document.getElementById('pryamokutnik').classList.remove('show-wrap')
}
function geoChooseKvadrat(){
        document.getElementById('kvadrat').classList.toggle('show-wrap')
        document.getElementById('geo-cos').classList.remove('show-wrap')
        document.getElementById('krug').classList.remove('show-wrap')
        document.getElementById('pryamokutnik').classList.remove('show-wrap')
}
function geoChooseKrug(){
        document.getElementById('krug').classList.toggle('show-wrap')
        document.getElementById('geo-cos').classList.remove('show-wrap')
        document.getElementById('kvadrat').classList.remove('show-wrap')
        document.getElementById('pryamokutnik').classList.remove('show-wrap')
}
function geoChoosePryamokutnik(){
        document.getElementById('pryamokutnik').classList.toggle('show-wrap')
        document.getElementById('geo-cos').classList.remove('show-wrap')
        document.getElementById('kvadrat').classList.remove('show-wrap')
        document.getElementById('krug').classList.remove('show-wrap')
}
document.querySelector('.geo-button-choose-cos').onclick = geoChooseCos
document.querySelector('.geo-button-choose-kvadrat').onclick = geoChooseKvadrat
document.querySelector('.geo-button-choose-krug').onclick = geoChooseKrug
document.querySelector('.geo-button-choose-pryamokutnik').onclick = geoChoosePryamokutnik
// cosMath
let geoCosInput = document.querySelector('.geo-input-1')
let geoCosSelector = document.querySelector('.geo-option-cos')
function geoCosMath(){
    let s = 0
    if(geoCosSelector.value == "cos"){
        s = Math.cos(geoCosInput.value)
    }
    else if(geoCosSelector.value == "sin"){
        s = Math.sin(geoCosInput.value)
    }
    else if(geoCosSelector.value == "tg"){
        s = Math.tan(geoCosInput.value)
    }
    else if(geoCosSelector.value == "ctg"){
        s = Math.cos(geoCosInput.value)/Math.sin(geoCosInput.value)
    }
    document.querySelector('.result-geo').textContent = s;
}
document.querySelector('.geo-calc').onclick = geoCosMath
// kvadrat
function getChooseKvadratPloscha(){
    document.getElementById('geo-kvadrat-ploscha').classList.toggle('show-wrap')
    document.getElementById('geo-kvadrat-diagonal').classList.remove('show-wrap')
    document.getElementById('geo-kvadrat-perimetr').classList.remove('show-wrap')
}
function getChooseKvadratDiagonal(){
    document.getElementById('geo-kvadrat-diagonal').classList.toggle('show-wrap')
    document.getElementById('geo-kvadrat-ploscha').classList.remove('show-wrap')
    document.getElementById('geo-kvadrat-perimetr').classList.remove('show-wrap')
}
function getChooseKvadratPerimetr(){
    document.getElementById('geo-kvadrat-perimetr').classList.toggle('show-wrap')
    document.getElementById('geo-kvadrat-diagonal').classList.remove('show-wrap')
    document.getElementById('geo-kvadrat-ploscha').classList.remove('show-wrap')
}
document.querySelector('.Ploscha-kvadrat').onclick = getChooseKvadratPloscha
document.querySelector('.Diagonal-kvadrat').onclick = getChooseKvadratDiagonal
document.querySelector('.Perimetr-kvadrat').onclick = getChooseKvadratPerimetr
// kvadrat math
function mathChooseKvadratPloscha(){
    let sum1 = +document.querySelector('.geo-input-kvadrat-ploscha').value
    s = sum1*sum1
    document.querySelector('.result-geo-kvadrat-ploscha').textContent = s;
}
document.querySelector('.geo-calc-kvadrat-ploscha').onclick = mathChooseKvadratPloscha
function mathChooseKvadratDiagonal(){
    let sum1 = +document.querySelector('.geo-input-kvadrat-diagonal').value
    sum2 = Math.sqrt(2, 2)
    s = sum1*sum2
    document.querySelector('.result-geo-kvadrat-diagonal').textContent = s;
}
document.querySelector('.geo-calc-kvadrat-diagonal').onclick = mathChooseKvadratDiagonal
function mathChooseKvadratPerimetr(){
    let sum1 = +document.querySelector('.geo-input-kvadrat-perimetr').value
    s = sum1*4
    document.querySelector('.result-geo-kvadrat-perimetr').textContent = s;
}
document.querySelector('.geo-calc-kvadrat-perimetr').onclick = mathChooseKvadratPerimetr
// krug
function getChooseKrugPloscha(){
    document.getElementById('geo-krug-ploscha').classList.toggle('show-wrap')
    document.getElementById('geo-krug-radius').classList.remove('show-wrap')
    document.getElementById('geo-krug-dovjina').classList.remove('show-wrap')
}
function getChooseKrugRadius(){
    document.getElementById('geo-krug-radius').classList.toggle('show-wrap')
    document.getElementById('geo-krug-ploscha').classList.remove('show-wrap')
    document.getElementById('geo-krug-dovjina').classList.remove('show-wrap')
}
function getChooseKrugDovjina(){
    document.getElementById('geo-krug-dovjina').classList.toggle('show-wrap')
    document.getElementById('geo-krug-radius').classList.remove('show-wrap')
    document.getElementById('geo-krug-ploscha').classList.remove('show-wrap')
}
document.querySelector('.Ploscha-krug').onclick = getChooseKrugPloscha
document.querySelector('.Radius-krug').onclick = getChooseKrugRadius
document.querySelector('.Dovjina-krug').onclick = getChooseKrugDovjina
// krug math
function mathChooseKrugPloscha(){
    let sum1 = +document.querySelector('.geo-input-krug-ploscha').value
    s = 3.14*sum1*sum1
    document.querySelector('.result-geo-krug-ploscha').textContent = s;
}
document.querySelector('.geo-calc-krug-ploscha').onclick = mathChooseKrugPloscha
function mathChooseKrugRadius(){
    let sum1 = +document.querySelector('.geo-input-krug-radius-1').value
    let sum2 = +document.querySelector('.geo-input-krug-radius-2').value
    s = 3.14*sum1*sum1/360*sum2
    document.querySelector('.result-geo-krug-radius').textContent = s;
}
document.querySelector('.geo-calc-krug-radius').onclick = mathChooseKrugRadius
function mathChooseKrugDovjina(){
    let sum1 = +document.querySelector('.geo-input-krug-dovjina').value
    s = 2*3.14*sum1
    document.querySelector('.result-geo-krug-dovjina').textContent = s;
}
document.querySelector('.geo-calc-krug-dovjina').onclick = mathChooseKrugDovjina
// Pryamokutnik
function getChoosePryamokutnikPloscha(){
    document.getElementById('geo-pryamokutnik-ploscha').classList.toggle('show-wrap')
    document.getElementById('geo-pryamokutnik-diagonal').classList.remove('show-wrap')
    document.getElementById('geo-pryamokutnik-perimetr').classList.remove('show-wrap')
}
function getChoosePryamokutnikDiagonal(){
    document.getElementById('geo-pryamokutnik-diagonal').classList.toggle('show-wrap')
    document.getElementById('geo-pryamokutnik-ploscha').classList.remove('show-wrap')
    document.getElementById('geo-pryamokutnik-perimetr').classList.remove('show-wrap')
}
function getChoosePryamokutnikPerimetr(){
    document.getElementById('geo-pryamokutnik-perimetr').classList.toggle('show-wrap')
    document.getElementById('geo-pryamokutnik-diagonal').classList.remove('show-wrap')
    document.getElementById('geo-pryamokutnik-ploscha').classList.remove('show-wrap')
}
document.querySelector('.Ploscha-pryamokutnik').onclick = getChoosePryamokutnikPloscha
document.querySelector('.Diagonal-pryamokutnik').onclick = getChoosePryamokutnikDiagonal
document.querySelector('.Perimetr-pryamokutnik').onclick = getChoosePryamokutnikPerimetr
// Pryamokutnik math
function mathChoosePryamokutnikPloscha(){
    let sum1 = +document.querySelector('.geo-input-pryamokutnik-ploscha-1').value
    let sum2 = +document.querySelector('.geo-input-pryamokutnik-ploscha-2').value
    s = sum1*sum2
    document.querySelector('.result-geo-pryamokutnik-ploscha').textContent = s;
}
document.querySelector('.geo-calc-pryamokutnik-ploscha').onclick = mathChoosePryamokutnikPloscha
function mathChoosePryamokutnikDiagonal(){
    let sum1 = +document.querySelector('.geo-input-pryamokutnik-diagonal-1').value
    let sum2 = +document.querySelector('.geo-input-pryamokutnik-diagonal-2').value
    s = sum1*sum1+sum2*sum2
    document.querySelector('.result-geo-pryamokutnik-diagonal').textContent = s;
}
document.querySelector('.geo-calc-pryamokutnik-diagonal').onclick = mathChoosePryamokutnikDiagonal
function mathChoosePryamokutnikPerimetr(){
    let sum1 = +document.querySelector('.geo-input-pryamokutnik-perimetr-1').value
    let sum2 = +document.querySelector('.geo-input-pryamokutnik-perimetr-2').value
    s = sum1*2+sum2*2
    document.querySelector('.result-geo-pryamokutnik-perimetr').textContent = s;
}
document.querySelector('.geo-calc-pryamokutnik-perimetr').onclick = mathChoosePryamokutnikPerimetr