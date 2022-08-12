const div = document.querySelector('.conteiner')
const ul = document.createElement('ul');
let texto = document.querySelector('#texto');
let data = document.querySelector('#datahora');
const btn = document.querySelector('#btn');


let lista= [];
let objeto;
function inicia(){
    div.appendChild(ul);
 }
 window.addEventListener('load', inicia())


function pegaInfo(){
    let valorTexto = texto.value;
    let valorData = data.value;
    let objetoTexto = {}
    objetoTexto.evento = valorTexto;
    objetoTexto.data=valorData;
    return objetoTexto;
}


function adicionaArray(){
    objeto = pegaInfo();
    lista.push(objeto)
    console.log(lista);
    return lista;
}



btn.addEventListener('click', ()=>{
    let li = document.createElement('li');
    ul.appendChild(li);

    
    let listaTeste = adicionaArray();
    let trocaElemento;

    let sorted = listaTeste.sort((a,b)=>{
        return a.data.localeCompare(b.data);
     });
    

        for(let i = 0; i< lista.length; i++){
            
             li = ul.children[i];
             li.innerHTML= lista[i].evento + " - " + lista[i].data + " ";
             
             trocaElemento = li;
             console.log(trocaElemento);
            if(sorted){
                ul.replaceChild(trocaElemento, li);
            } 
        }
        
    
    console.log(trocaElemento);
    
})
