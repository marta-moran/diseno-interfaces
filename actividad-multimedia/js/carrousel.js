'use strict'
const grande = document.querySelector('.grande');
const punto = document.querySelectorAll('.punto');

//cuando hago click en cada punto
    //saber la posicion de ese punto
    //aplicar un transform translateX al grande
    //quitar la clase activo a todos los puntos
    // añadir la clase activo al punto que hemos hecho clic


    punto.forEach( ( cadaPunto , i )=> {
        // Asignamos un CLICK a cadaPunto
        punto[i].addEventListener('click',()=>{
    
                
            //posicion es 0 el transformX es 0 
            //posicion es 1 transformX es 1
            //operacion = posicion * -50 (cuando multiplico por 0 es 0 y cuando multiplico por 1 es -50) -> da el numero exacto del transform en el ejeX
    
            let posicion  = i;
            let operacion = posicion * -50;
    
           // grande.style.transform = `translateX(${ operacion }%)`;

            //quito la clase activo (lo que colorea el botón) después de pulsar el otro botón
            punto.forEach((cadaPunto, i) => {
                punto[i].classList.remove('activo');  
                document.getElementsByClassName('img')[i].style.transform = "none";
                 
            })
            //añado la clase activo (la que colorea el botón) cuando lo pulso
            punto[i].classList.add('activo'); 
            document.getElementsByClassName('img')[i].style.transform = "rotate(10deg)";   
            

    
            

        })
    })  
    