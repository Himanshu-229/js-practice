const randomcolor = ()=>{
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i=0;i<6;i++){
      color +=  hex[Math.floor(Math.random()*16)]
    }
    return color
};
 let interval;
const startChangingColor = ()=>{
    if(!interval){
        interval = setInterval(changeColor,1000)
    }
     
     function changeColor(){   
        document.body.style.background= randomcolor()
     }
}

const stopChangingColor = ()=>{
     clearInterval(interval)
     interval = null;
}

document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',stopChangingColor)


