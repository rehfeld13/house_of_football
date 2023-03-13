let players = [
  {
    nome: "Luka Modric",
    imagemJogador: "images/players/Luka Modric - FootyRenders.png",
    logoClube: "images/clubs/Real_Madrid.png",
    valor: 2000000,
    posicao:"meio-campista"
  },
  
  {
    nome: "Mbappe",
    imagemJogador: "images/players/Kylian Mbappé - FootyRenders.png",
    logoClube: "images/clubs/PSG.png",
    valor: 30000000,
    posicao:"atacante"
  },
  
  {
    nome: "Haaland",
    imagemJogador: "images/players/Erling Braut Håland - FootyRenders.png",
    logoClube: "images/clubs/ManchesterCity.png",
    valor: 20000000,
    posicao:"atacante"
  },
  
  {
    nome: "Vinicius Jr",
    imagemJogador: "images/players/Vinícius Júnior - FootyRenders.png",
    logoClube: "images/clubs/Real_Madrid.png",
    valor: 10000000,
    posicao:"atacante"
  },
  
  
  {
    nome: "Courtois",
    imagemJogador: "images/players/Thibaut Courtois - FootyRenders.png",
    logoClube: "images/clubs/Real_Madrid.png",
    valor: 3000000,
    posicao:"goleiro"
  },
  {
    nome: "De Bruyne",
    imagemJogador: "images/players/Kevin De Bruyne - FootyRenders.png",
    logoClube: "images/clubs/ManchesterCity.png",
    valor: 7000000,
    posicao:"meio-campista"
  },
  
  {
    nome: "Karim Benzema",
    imagemJogador: "images/players/Karim Benzema - FootyRenders.png",
    logoClube: "images/clubs/Real_Madrid.png",
    valor: 5000000,
    posicao:"atacante"
  },
  {
    nome: "Neymar Jr",
    imagemJogador: "images/players/Neymar - FootyRenders.png",
    logoClube: "images/clubs/PSG.png",
    valor: 6000000,
    posicao:"atacante"
  },

  {
    nome: "Lionel Messi",
    imagemJogador: "images/players/Lionel Messi - FootyRenders.png",
    logoClube: "images/clubs/PSG.png",
    valor: 5000000,
    posicao:"atacante"
  },


  {
    nome: "Hakimi",
    imagemJogador: "images/players/Achraf Hakimi - FootyRenders.png",
    logoClube: "images/clubs/PSG.png",
    valor: 7000000,
    posicao:"defensor"
  },
  
  
  {
    nome: "Cristiano Ronaldo",
    imagemJogador: "images/players/Cristiano Ronaldo - FootyRenders.png",
    logoClube: "images/clubs/Al-Nassr.png",
    valor: 3000000,
    posicao:"atacante"
  },
  {
    nome: "Casemiro",
    imagemJogador: "images/players/Casemiro - FootyRenders.png",
    logoClube: "images/clubs/ManchesterUnited.png",
    valor: 2000000,
    posicao:"meio-campista"
  },
  
  {
    nome: "Raphael Varane",
    imagemJogador: "images/players/Raphaël Varane - FootyRenders.png",
    logoClube: "images/clubs/ManchesterUnited.png",
    valor: 1500000,
    posicao:"defensor"
  },

  {
    nome: "Alphonso Davies",
    imagemJogador: "images/players/Alphonso Davies - FootyRenders.png",
    logoClube: "images/clubs/Bayern.png",
    valor: 5000000,
    posicao:"defensor"
  },
  
  {
    nome: "Donnarumma",
    imagemJogador: "images/players/Gianluigi Donnarumma - FootyRenders.png",
    logoClube: "images/clubs/PSG.png",
    valor: 4000000,
    posicao:"goleiro"
  },
  {
    nome: "João Cancelo",
    imagemJogador: "images/players/João Cancelo - FootyRenders.png",
    logoClube: "images/clubs/Bayern.png",
    valor: 4000000,
    posicao:"defensor"
  },


  {
    nome: "Gavi",
    imagemJogador: "images/players/Gavi - FootyRenders.png",
    logoClube: "images/clubs/Barcelona.png",
    valor: 9000000,
    posicao:"meio-campista"
  },

  {
    nome: "Jude Bellingham",
    imagemJogador: "images/players/Jude Bellingham - FootyRenders.png",
    logoClube: "images/clubs/Borussia.png",
    valor: 9500000,
    posicao:"meio-campista"
  },

  {
    nome: "Emiliano Martinez",
    imagemJogador: "images/players/Emiliano Martinez The Best FIFA 2022 - FootyRenders.png",
    logoClube: "images/clubs/AstonVilla.png",
    valor: 200000,
    posicao:"goleiro"
  },

  {
    nome: "Virgil van Dijk",
    imagemJogador: "images/players/Virgil van Dijk - FootyRenders.png ",
    logoClube: "images/clubs/Liverpool.png",
    valor: 4000000,
    posicao:"defensor"
  },



]

const sectionPlayers =  document.querySelector('#players')

//FUNÇAO QUE PERCORRE O ARRAY PLAYERS E PARA CADA UM DELES, ADICIONA UM ELEMENTO HTML
function exibirPlayersNaTela(listaPlayers){
  sectionPlayers.innerHTML = ''
  
  listaPlayers.forEach((elemento)=>{
    
    sectionPlayers.innerHTML += `
    
    <div class="player">
    <img class="player-img" src="${elemento.imagemJogador}" alt="">
    <span class="name">${elemento.nome}</span>
    
    <div class="info">
    <img src="${elemento.logoClube}" alt="">
    <span class="market-value"> € ${elemento.valor}</span>
    </div>
    
    <div class="tags">
    <span class="tag">${elemento.posicao}</span>
    </div>
    </div>
    
    `
  })
}

exibirPlayersNaTela(players)


// FUNCAO QUE FILTRA OS ELEMENTOS DE ACORDO COM O SEU VALUE

const buttons = document.querySelectorAll('.btn')

buttons.forEach((elemento)=>{
  elemento.addEventListener('click', filtrarPlayers)
})

function filtrarPlayers(){
  const elementoBtn = document.getElementById(this.id)
  const posicao = elementoBtn.value

  let playersFiltrados = posicao == '' ? posicaoVazia() : filtrarPorCategoria(posicao) 
  
    exibirPlayersNaTela(playersFiltrados)


}

function posicaoVazia(){
  console.log('Error 404: Posição não preenchida')
}

function filtrarPorCategoria(posicao) {
  return players.filter(elemento => elemento.posicao == posicao)
}



const btnOrdenarPorPreco = document.querySelector('#btnOrdernarPorPreco')


btnOrdenarPorPreco.addEventListener('click', ordenarPlayersPorPreco)

function ordenarPlayersPorPreco(){
  playersOrdernados = players.sort((a,b)=>{
    return a.valor - b.valor
  })
  exibirPlayersNaTela(playersOrdernados)
}
