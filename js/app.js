
//primeira coisa que faremos é olhar o html , e em seguida criar uma função para os botões adicionar e limpar 

//essas variaveis criamos e citamos para quando iniciarmos o codigo aparecam zeradas
let totalGeral;

//como para limpar precisamos que tudo fique zerado apenas chamamos a função para zerar tudo para iniciarmos as comprar
limpar();

function adicionar () {
    //recuperar valores nome do produto , quantidade e valor 
    // para testar tentar sempre emitir um alert para ver se a variavel está pegando as informações 
    //usamos o split para separar as informações que estam na mesma tag html 
    //o split separa as informações em um array a partir do ponto delimitado 
     let produto = document.getElementById('produto').value; 
     let nomeProduto = produto.split('-')[0];
     let valorUnitario = produto.split('R$')[1];
     let quantidade = document.getElementById('quantidade').value;
     //calcular o preço, o nosso subtotal por produto 
     //varificar com um alert se está realizando a conta do valor
     let valor = quantidade * valorUnitario;
     //para adicionar os produtos no carrinho pegaremos os valores da lista de produtos 
     //na section aonde está o id só temos 1 produto que é o celular
     // para mudarmos isso precisaremos usar o innerHtml para mexer com o html interno desse elemento adicionando uma nova tag section 
     // concatenar com o carrinho com o + 
     //adicionar no carrinho 
     let carrinho = document.getElementById('lista-produtos');
     carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span>${nomeProduto} <span class="texto-azul">${valor}</span>
        </section>`;
    //atualizar o valor total 
    totalGeral = totalGeral + valor;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    //zerar a quantidade quando adicionamos no carrinho 
    document.getElementById('quantidade').value = 0;

}


function limpar(){
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '' ;
    document.getElementById('valor-total').textContent = 'R$ 0';
}