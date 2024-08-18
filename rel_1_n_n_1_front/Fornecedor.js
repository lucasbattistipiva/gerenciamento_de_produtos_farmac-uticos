const baseUrl = "http://localhost:3000";

// Cadastrar Produto
document.getElementById("formFornecedor").addEventListener("click", () => {
  const nomeFornecedor = document.getElementById("nomeFornecedor").value;
  const cnpj = document.getElementById("cnpj").value;

  const valores = {
    nomeFornecedor: nomeFornecedor,
    cnpj: cnpj
  };

  fetch(`${baseUrl}/fornecedor`, {
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
      console.error("Erro ao cadastrar Fornecedor", err);
      alert("Erro ao cadastrar Fornecedor");
    });
});

//Atualizar Produto
document.getElementById('form-atualizar').addEventListener('click', () => {
    const codFornecedor = document.getElementById('codFornecedorUpdate').value;
    const nomeFornecedor = document.getElementById("nomeFornecedorUpdate").value;
    const cnpj = document.getElementById("cnpjUpdate").value;
  
    const valores = {
      codFornecedor: codFornecedor, 
      nomeFornecedor: nomeFornecedor, 
      cnpj:cnpj
    }
  
    fetch('http://localhost:3000/fornecedor', {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(valores)
    })
    .then(resposta =>{
      if (resposta.ok) {
        alert('Fornecedor atualizado com sucesso!');
    } else {
        alert('Erro ao atualizar Fornecedor');
    }
     resposta.json()})
      
  
    
  });

// Listar Produtos
document.getElementById("listarFornecedores").addEventListener("click", () => {
  const listaFornecedores = document.getElementById("listaFornecedores");
  listaFornecedores.innerHTML = "";
  fetch(`${baseUrl}/fornecedores`)
    .then((resposta) => resposta.json())
    .then((fornecedores) => {
      fornecedores.forEach((fornecedor) => {
        const li = document.createElement("li");
        li.innerHTML = `ID: ${fornecedor.codFornecedor}, Nome: ${fornecedor.nomeFornecedor}, CNPJ: ${fornecedor.cnpj}`;
        listaFornecedores.appendChild(li);
      });
    });
});

// Consultar Produto
document.getElementById("consultarFornecedor").addEventListener("click", () => {
  const nomeFornecedor = document.getElementById("consultaNomeFornecedor").value;
  const resultadoConsulta = document.getElementById("resultadoConsulta");
  fetch(`${baseUrl}/fornecedor?nomeFornecedor=${nomeFornecedor}`)
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
      resultadoConsulta.innerHTML = `ID: ${dados.codFornecedor}, Nome: ${dados.nomeFornecedor}, CNPJ: ${dados.cnpj}`;
    })
    .catch((err) => {
      resultadoConsulta.innerHTML = err.message;
    });
});

// Deletar Produto
document.getElementById("deletarFornecedor").addEventListener("click",  () => {
    const fornecedorId = document.getElementById("fornecedorIdDeletar").value;

    fetch(`${baseUrl}/fornecedor/${fornecedorId}`, {
      method: "DELETE",
    })
    .then(resposta => resposta.json())
    .then(dados=>{
        document.getElementById("resultadoDeletar").textContent = dados.message;
    })
  });
