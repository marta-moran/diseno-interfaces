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
            let posicion  = i;
      
            //quito la clase activo (lo que colorea el botón) después de pulsar el otro botón
            punto.forEach((cadaPunto, i) => {
                punto[i].classList.remove('activo');  
                document.getElementsByClassName('img')[i].style.transform = "none"; //reseteo el valorq
                 
            })
            //añado la clase activo (la que colorea el botón) cuando lo pulso
            punto[i].classList.add('activo'); 
            document.getElementsByClassName('img')[i].style.transform = "rotate(10deg)";   
            

    
            

        })
    })  
    