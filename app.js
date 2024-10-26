

//   AOS.init();

function showsidebar(){
    const side = document.querySelector('.sidebar')
    side.style.display = 'flex'
}
function hidesidebar(){
    const side = document.querySelector('.sidebar')
    side.style.display = 'none'
    
}

const nav = document.querySelector('.nav')
window.onscroll=()=>{
    if(window.scrollY>=100){
        nav.classList.add("active");
      
        
    }
    else{
        nav.classList.remove("active")
    }
}


const basic_form = document.querySelector('.contact-form');
const Fname = document.querySelector('.name');
const Email = document.querySelector('.email');
const sub = document.querySelector('.subject');
const mess = document.querySelector('.message');
const button = document.querySelector('.btn');
button.addEventListener('click' , (e)=>{
    e.preventDefault()

    if(Fname.value == ''){
        document.querySelector('.name-error').innerHTML='Enter your name';
    }

    if(!Email.value.includes('@') || !Email.value.includes('.com')){
        document.querySelector('.email-error').innerHTML='Invalid Email';
    }

    if(sub.value == ''){
        document.querySelector('.subject-error').innerHTML='Enter your subject';
    }
    if(mess.value == ''){
        document.querySelector('.message-error').innerHTML='Enter your message';
    }


})