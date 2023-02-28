const btn1=document.getElementById("tab1");
const btn2=document.getElementById("tab2");
const btn3=document.getElementById("tab3");


let arr = ["Tab1 with soft transitioning effect!", "Tab2 with soft Transition Heading", "Tab3 with soft My Heading" ]
const head = document.querySelector('.head');
const p1 =  document.querySelector('.cp1')
const p2 =  document.querySelector('.cp2')


// Buttton1
btn1.addEventListener('click',()=>{
        btn2.classList.remove("active");
        btn3.classList.remove("active");
        btn1.classList.add("active");
        
        head.innerHTML=arr[0]
        p1.innerHTML= 'What is text message marketing? Text message marketing is the ongoing process of communicating business news, sales'
        p2.innerHTML='What is text message marketing? Text message marketing is the ongoing process of communicating business'
})

// Buttton2
btn2.addEventListener('click',()=>{
    
        btn1.classList.remove("active");
        btn3.classList.remove("active");
        btn2.classList.add("active");
    
        head.innerHTML=arr[1]
        p2.innerHTML= 'What is text message marketing? Text message marketing is the ongoing process of communicating business news, sales'
        p1.innerHTML='What is text message marketing? Text message marketing is the ongoing process of communicating business news, sales'
})

// Buttton3
btn3.addEventListener('click',()=>{
        btn1.classList.remove("active");
        btn2.classList.remove("active");
        btn3.classList.add("active");
    
        head.innerHTML=arr[2]
        p1.innerHTML= 'What is text message marketing? Text message marketing is the ongoing process of communicating business news, sales'
        p2.innerHTML='promotions or other relevant information to your customers via SMS (short message service) text messages on their mobile devices.'
    })