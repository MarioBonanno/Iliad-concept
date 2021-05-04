function menu(){
    const nav = document.querySelector('.nav');
    const buger= document.querySelector('.buger');
    // addEvent
    buger.addEventListener('click',()=>{
       
        if(nav.style.height=='50px' || buger.classList=="buger" ||buger.classList=="line2"||buger.classList=="line1" ){
            //nav 
            nav.style.height= '340px';
            //buger 
            buger.classList.add('toggle');
        }else{
            //nav
            nav.style.height= '50px';
            //buger
            buger.classList.toggle('toggle');
        } 
    });
}
menu();