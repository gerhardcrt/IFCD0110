//Ejercicio 1 de Agosto 22
let palabra_prohibida = ['mierda', 'caca', 'truño', 'boñiga'];
let numero_PalabrasProhibidas = palabrasProhibidas.length;

let cadena_de_texto = prompt('PALABRAS PROHIBIDAS','');

let cadena_a_minuscula = cadena_de_texto.toLowerCase();

function escribe(cadena,id){
    let element = document.getElementById(id);
    element.innerHTML = cadena;
    element.style.fontSize = '30px';              
    }

    if  (cadena_a_minuscula.replace(palabra_prohibida.toUpperCase())!==cadena_a_minuscula){
        cadena_de_texto == cadena_de_texto.replace(text,'chocolate');
    }  
   
    while(numeroPalabrasProhibidas--) {
       if (text.indexOf(palabrasProhibidas[numeroPalabrasProhibidas])!=-1) {
           text = text.replace(new RegExp(palabrasProhibidas[numeroPalabrasProhibidas], 'ig'), "");
       }
    }
    
/*SIN ACABAR*/
