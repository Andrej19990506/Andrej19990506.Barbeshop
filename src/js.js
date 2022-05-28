const footerSocialImg = document.querySelectorAll(".social-item__img");
const mediaQuvery = window.matchMedia('(max-width: 768px)');




function footerRemoveImg(){
    if(mediaQuvery.matches){
        footerSocialImg[0].src = '/img/Vk.png';
        footerSocialImg[1].src = '/img/facebook.png';
        footerSocialImg[2].src = '/img/instagrams.png';
    }
}

console.log(footerRemoveImg())
