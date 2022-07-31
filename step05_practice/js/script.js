const btn = document.querySelector('.btn-menu')
const nav = document.querySelector('.main-nav')
const emailBtn = document.querySelector('.contact-btn')
// 버튼 클릭을 한다.
// 버튼 이름이 메뉴라고 한다면 숨겨져 있던 nav가 화면에 나타나야 함.
// 버튼 이름이 Close가 되어야 함.

function(){
    emailjs.init("ehdgns07");
}

btn.addEventListener('click', () =>{ 
    nav.classList.toggle('open-menu');
    
    
    if(btn.innerHTML == 'Menu'){
        nav.classList.add('open-menu');
        btn.innerHTML = 'Close'
        

    } else{
        btn.innerHTML = 'Menu';
        nav.classList.remove('open-menu');
    }
    
});

emailBtn.addEventListener('click', ()=> {
    emailBtn
})

function a() {

}