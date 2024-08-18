const baseUrl = "http://localhost:3000";

// Cadastrar Produto
document.getElementById("formProduto").addEventListener("click", () => {
  const nomeProd = document.getElementById("nomeProd").value;
  const quantidade = document.getElementById("quantidade").value;
  const preco = document.getElementById("preco").value;

  const valores = {
    nomeProd: nomeProd,
    quantidade: quantidade,
    preco: preco,
  };

  fetch(`${baseUrl}/produto`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(valores),
  })
    .then((resposta) => resposta.json())
    .then((dados) => {
      console.log(dados);
      // message pra retornar a mensagem do backend
      alert(dados.message);
    })
    .catch((err) => {
      console.error("Erro ao cadastrar Produto", err);
      alert("Erro ao cadastrar Produto");
    });
});

//Atualizar Produto
document.getElementById('form-atualizar').addEventListener('click', () => {
  const codProduto = document.getElementById('codProdutoUpdate').value;
  const nomeProd = document.getElementById('nomeProdUpdate').value;
  const quantidade = document.getElementById('quantidadeUpdate').value;
  const preco = document.getElementById('precoUpdate').value;

  const valores = {
    codProduto: codProduto,
    nomeProd: nomeProd, 
    quantidade: quantidade, 
    preco:preco
  }

  fetch('http://localhost:3000/produto', {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(valores)
  })
  .then(resposta =>{
    if (resposta.ok) {
      alert('Produto atualizado com sucesso!');
  } else {
      alert('Erro ao atualizar produto');
  }
   resposta.json()})
    

  
});

// Listar Produtos
document.getElementById("listarProdutos").addEventListener("click", () => {
  const listaProdutos = document.getElementById("listaProdutos");
  listaProdutos.innerHTML = "";
  fetch(`${baseUrl}/produtos`)
    .then((resposta) => resposta.json())
    .then((produtos) => {
      produtos.forEach((produto) => {
        const li = document.createElement("li");
        li.innerHTML = `ID: ${produto.codProduto}, Nome: ${produto.nomeProd}, Quantidade: ${produto.quantidade}, Preço: ${produto.preco}`;
        listaProdutos.appendChild(li);
      });
    });
});

// Consultar Produto
document.getElementById("consultarProduto").addEventListener("click", () => {
  const nomeProd = document.getElementById("consultaNomeProduto").value;
  const resultadoConsulta = document.getElementById("resultadoConsulta");
  fetch(`${baseUrl}/produto?nomeProd=${nomeProd}`)
    .then((resposta) => {
        // caso a resposta não estar correta , mostrar error message do backend
      if (!resposta.ok) {
        return resposta.json().then((err) => {
          throw new Error(err.message);
        });
      }
      return resposta.json();
    })
    .then((dados) => {
      resultadoConsulta.innerHTML = `ID: ${dados.codProduto}, Nome: ${dados.nomeProd}, Quantidade: ${dados.quantidade}, Preço: ${dados.preco}`;
    })
    .catch((err) => {
      resultadoConsulta.innerHTML = err.message;
    });
});

// Deletar Produto
document.getElementById("deletarProduto").addEventListener("click", async () => {
    const produtoId = document.getElementById("produtoIdDeletar").value;

    fetch(`${baseUrl}/produto/${produtoId}`, {
      method: "DELETE",
    })
    .then(resposta => resposta.json())
    .then(dados=>{
        document.getElementById("resultadoDeletar").textContent = dados.message;
    })
  });
