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

 function gerarId(){
    return Math.floor(Math.random() * 3000);
}

function pegaInfo(){
    let valorTexto = texto.value;
    let valorData = data.value;
    let id;
    let objetoTexto = {}
    objetoTexto.id= gerarId();
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

function mostraElementos(){
    let listaTeste = adicionaArray();
    let objeto = pegaInfo();
    let trocaElemento;
    let li = document.createElement('li');

    ul.appendChild(li);
    
    let sorted = listaTeste.sort((a,b)=>{
        return a.data.localeCompare(b.data);
     });
    
     
        for(let i = 0; i<= listaTeste.length; i++){
           
            let btnRemove = document.createElement('a');
            let x = document.createTextNode('X');
            btnRemove.setAttribute('href', '#');
            btnRemove.appendChild(x);
            
            li = ul.children[i];
            li.setAttribute("id", `${listaTeste[i].id}`)
            li.innerHTML=" " + listaTeste[i].evento + " - " + "No dia: " + listaTeste[i].data + " " ;
             trocaElemento = li;
             let indice = listaTeste[i].id;
            if(sorted){
                ul.replaceChild(trocaElemento, li);
                
            }
            btnRemove.setAttribute('onclick', 'removeElemento('+ indice +')')
            console.log(indice)
            li.appendChild(btnRemove);
        }
       

}



function removeElemento(indice){
    console.log(indice)
    let confirm = window.confirm("Tem certeza que deseja remover essa atividade?");
    
    if(confirm){

        let li= document.getElementById('' + indice + '')
       
            if(li){
                
                ul.removeChild(li);
            }

            console.log(li)
         }
     
    
}


btn.addEventListener('click', ()=>{

    mostraElementos();
    
    
    
})
