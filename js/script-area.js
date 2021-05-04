// Annimanzione cercio 
function cicle(){
    //svg
    const  svg = document.querySelector('.giga-svg');
    const svgSms= document.querySelector('.sms-svg');
    // last child  circle 
    const cicleGiga = svg.children[1];
    const cicleSms = svgSms.children[1];

    // calcolo valore riempimento
    //giga icon 
    let valueGiga = 350 - (350 *15) /100;
    // sms icon
    let valueSms = 350 - (350 *10) /100;

    if(cicleGiga.style.strokeDashoffset == '350px'|| cicleGiga.style.strokeDasharray == '350px' ){
        // giga icon 
       cicleGiga.style.strokeDashoffset=`${valueGiga}`; 
       cicleGiga.style.transition= 'all 1.4s ease';
       // sms icon    
       cicleSms.style.strokeDashoffset=`${valueSms}`;
       cicleSms.style.transition= 'all 1.4s ease';   
    }else{
        //giga icon 
        cicleGiga.style.strokeDashoffset= `${valueGiga}`;
        cicleGiga.style.transition= 'all 1.4s ease';  
        // sms icon 
        cicleSms.style.strokeDashoffset=`${valueSms}`;
        cicleSms.style.transition= 'all 1.4s ease';  
    }
   
}
// start animation 
setInterval(() => {window.onload=cicle(); }, 200);


// menu area personale 
function menuAreaPersonal(){
    // user burger
    const userMenu = document.querySelector('.user-burger');
    // icon burger 
    let iconMenu = document.querySelector('.user-burger > img');
    //user section 
    const userSection = document.querySelector('.user-section');
    userMenu.addEventListener('click', () => {
        if(userSection.style.right == '-347px'){
            userSection.style.right = '0px';
            iconMenu.style.transform = "rotate(0deg)";
        }else{
            userSection.style.right = '-347px';
            iconMenu.style.transform = "rotate(180deg)";
        }
    });
}
menuAreaPersonal();