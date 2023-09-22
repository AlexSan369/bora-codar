const balloon = document.getElementById('air-balloon');
const cloudOne = document.getElementById('cloudOne');
const cloudTwo = document.getElementById('cloudTwo');
const cloudThree = document.getElementById('cloudThree');
const cloudFour = document.getElementById('cloudFour');
const cloudFive = document.getElementById('cloudFive');
const javascript = document.getElementById('javascript');
const react = document.getElementById('react');
const graphql = document.getElementById('graphql');

function move() {
    /*  */
    console.log(window.scrollY)
    const incrementer =  window.scrollY;


    // Valor 10% de bottom na folha CSS
    // a cada incrementer multiplica-se 0.1
    balloon.style.bottom = 10 + incrementer * 0.1 + '%';
    
    cloudOne.style.bottom = 40 + incrementer * 0.10 + '%';
    cloudOne.style.marginLeft = 1 + incrementer * 0.10 + '%';
    cloudTwo.style.bottom = 80 + incrementer * 0.14 + '%';
    cloudTwo.style.marginLeft = 1 + incrementer * 0.15 + '%';
    cloudThree.style.bottom = 60 + incrementer * 0.14 + '%';
    cloudThree.style.marginLeft = 1 + incrementer * -0.15 + '%';
    cloudFour.style.bottom = 70 + incrementer * 0.16 + '%';
    cloudFour.style.marginRight = 40 + incrementer * -2.2 + '%';
    cloudFive.style.bottom = 60 + incrementer * 0.15 + '%';
    cloudFive.style.marginLeft = 1 + incrementer * 0.10 + '%';
    javascript.style.left = 20 + incrementer * -2.2 + '%'
    react.style.left = 26 + incrementer * -1.5 + '%'
    graphql.style.left = 32 + incrementer * -1 + '%'
}

/* Espião scroll */
window.addEventListener('scroll', move)
