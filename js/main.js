'use script'

import {getFilmes, getFilme, deleteFilme} from "./filmes.js"

function criarCard (filme){

    const button=document.createElement('button')
    button.classList.add('bg-transparent')
    console.log(filme)


    const card = document.createElement('div')
    card.classList.add( 'flex','bg-black', 'p-2', 'pb-10', 'rounded-lg', 'transform', 'hover:scale-105', 'duration-300')
  
    //cria como se fosse a div do titulo
    //const titulo = document.createElement('h2')
    //titulo.textContent = filme.nome

    //cria como se fosse a div da sinopse
    //const texto = document.createElement('textarea')
    //texto.textContent = filme.sinopse

    //pega a iamgem do filme da api
    const capa = document.createElement ('img')
    capa.classList.add('w-capa')
    capa.src = filme.foto_capa

    //(titulo, texto, capa)
    card.append(capa)
    button.append(card)
    button.addEventListener('click',()=> {
        window.location.href='./filme.html?id='+filme.id
    })

    return button
}

async function preencherContainer(){
    const container = document.getElementById('filmes')


    const filmes = await getFilmes()

    filmes.forEach (filme => {
        const card = criarCard(filme)
        container.appendChild(card)
        console.log(card)
    })
}

// async function setIDFilme(){
//     const idFilme=this.id
//     localStorage.setItem('idFilme',idFilme)
//     // window.location.href='./filme.html?id='+filmes.id
// }

preencherContainer()

//tesste

//const films ={
    
       // nome: "À Espera de um Milagre",
       // sinopse: "Um carcereiro tem um relacionamento incomum e comovente com um preso que está no corredor na morte: Coffey, um negro enorme, condenado por ter matado brutalmente duas gêmeas de nove anos. Ele tem tamanho e força para matar qualquer um, mas seu comportamento é completamente oposto à sua aparência. Além de ser simples, ingênuo e ter pavor do escuro, ele possui um dom sobrenatural. Com o passar do tempo, o carcereiro aprende que, às vezes, os milagres acontecem nos lugares mais inesperados.",
        //duracao: "03:00:09",
       // data_lancamento: "2006-08-04",
      //  data_relancamento: "",
      //  foto_capa: "https://play-lh.googleusercontent.com/9kBOBTrvqNFdLmjgX4l6wMwkv3ps4auKnp7gLAARfNUkhF7LMd9SSI4U4_RY-VPVE3X_1vqZElspi93koak",
      //  valor_unitario: 79.99
  //  }

  //deleteFilme ('10')
