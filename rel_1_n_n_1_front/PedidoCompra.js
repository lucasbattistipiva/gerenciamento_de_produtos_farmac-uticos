const baseUrl = "http://localhost:3000";

// Cadastrar Pedido/Compra
document.getElementById("formPedido").addEventListener("click", () => {
  const data = document.getElementById("data").value;
  const nomePed = document.getElementById("nomePed").value;
  const nomeForn = document.getElementById("nomeForn").value;
  const quantidadeProd = document.getElementById("quantidadeProd").value;
  const fornecedorId = document.getElementById("fornecedorId").value;
  const produtoId = document.getElementById("produtoId").value;

  const valores = {
    data: data,
    nomePed: nomePed,
    nomeForn: nomeForn,
    quantidadeProd: quantidadeProd,
    fornecedorId: fornecedorId,
    produtoId: produtoId,
  };

  fetch(`${baseUrl}/pedidocompra`, {
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
      console.error("Erro ao cadastrar Pedido", err);
      alert("Erro ao cadastrar Pedido");
    });
});

//Atualizar Pedido/compra
document.getElementById("form-atualizar").addEventListener("click", () => {
  const codPedido = document.getElementById("codPedidoUpdate").value;
  const data = document.getElementById("dataUpdate").value;
  const nomePed = document.getElementById("nomePedUpdate").value;
  const nomeForn = document.getElementById("nomeFornUpdate").value;
  const quantidadeProd = document.getElementById("quantidadeProdUpdate").value;
  const fornecedorId = document.getElementById("fornecedorIdUpdate").value;
  const produtoId = document.getElementById("produtoIdUpdate").value;

  const valores = {
    codPedido: codPedido,
    data: data,
    nomePed: nomePed,
    nomeForn: nomeForn,
    quantidadeProd: quantidadeProd,
    fornecedorId: fornecedorId,
    produtoId: produtoId
  };

  fetch(`${baseUrl}/pedidocompra`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(valores),
  }).then((resposta) => {
    if (resposta.ok) {
      alert("Pedido atualizado com sucesso!");
    } else {
      alert("Erro ao atualizar Pedido");
    }
    resposta.json();
  });
});

// Listar Produtos
document.getElementById("listarPedidos").addEventListener("click", () => {
  const listaPedidos = document.getElementById("listaPedidos");
  listaPedidos.innerHTML = "";
  fetch(`${baseUrl}/pedidocompras`)
    .then((resposta) => resposta.json())
    .then((pedidos) => {
      pedidos.forEach((pedido) => {
        const li = document.createElement("li");
        li.innerHTML = `ID: ${pedido.codPedido}, Data: ${pedido.data}, Nome do Pedido: ${pedido.nomePed}, 
        Nome do Fornecedor: ${pedido.nomeForn}, Quantidade do Produto : ${pedido.quantidadeProd}, ID do Fornecedor: ${pedido.fornecedorId}, ID do Produto: ${pedido.produtoId} `;
        listaPedidos.appendChild(li);
      });
    });
});

// Consultar Produto
document.getElementById("consultarPedido").addEventListener("click", () => {
  const codPedido = document.getElementById("consultaCodPedido").value;
  const resultadoConsulta = document.getElementById("resultadoConsulta");
  fetch(`${baseUrl}/pedidocompra?codPedido=${codPedido}`)
    .then((resposta) => {
      // caso a resposta não estar correta , mostrar error message do backend
      if (!resposta.ok) {
        return resposta.json().then((err) => {
          throw new Error(err.message);
        });
      }
      return resposta.json();
    })
    .then((pedido) => {
      resultadoConsulta.innerHTML = `ID: ${pedido.codPedido}, Data: ${pedido.data}, Nome do Pedido: ${pedido.nomePed}, 
        Nome do Fornecedor: ${pedido.nomeForn}, Quantidade do Produto : ${pedido.quantidadeProd}, ID do Fornecedor: ${pedido.fornecedorId}, ID do Produto: ${pedido.produtoId} `;
    })
    .catch((err) => {
      resultadoConsulta.innerHTML = err.message;
    });
});

// Deletar Produto
document.getElementById("deletarPedido").addEventListener("click", () => {
  const pedidoId = document.getElementById("pedidoIdDeletar").value;

  fetch(`${baseUrl}/pedidocompra/${pedidoId}`, {
    method: "DELETE",
  })
    .then((resposta) => resposta.json())
    .then((dados) => {
      document.getElementById("resultadoDeletar").textContent = dados.message;
    });
});
