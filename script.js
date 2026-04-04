const produtos = [
  { nome: "Placa de Vídeo RTX 3060", preco: "R$ 2.500", categoria: "GPU" },
  { nome: "Processador Ryzen 7", preco: "R$ 1.800", categoria: "CPU" },
  { nome: "Memória RAM 16GB", preco: "R$ 450", categoria: "RAM" },
  { nome: "SSD NVMe 1TB", preco: "R$ 600", categoria: "Armazenamento" },
  { nome: "Placa de Vídeo RTX 3060", preco: "R$ 2.500", categoria: "GPU" },
  { nome: "Processador Ryzen 7", preco: "R$ 1.800", categoria: "CPU" },
  { nome: "Memória RAM 16GB", preco: "R$ 450", categoria: "RAM" },
  { nome: "SSD NVMe 1TB", preco: "R$ 600", categoria: "Armazenamento" },
  { nome: "Placa de Vídeo RTX 3060", preco: "R$ 2.500", categoria: "GPU" },
  { nome: "Processador Ryzen 7", preco: "R$ 1.800", categoria: "CPU" },
  { nome: "Memória RAM 16GB", preco: "R$ 450", categoria: "RAM" },
  { nome: "SSD NVMe 1TB", preco: "R$ 600", categoria: "Armazenamento" },
  { nome: "Placa de Vídeo RTX 3060", preco: "R$ 2.500", categoria: "GPU" },
  { nome: "Processador Ryzen 7", preco: "R$ 1.800", categoria: "CPU" },
  { nome: "Memória RAM 16GB", preco: "R$ 450", categoria: "RAM" },
  { nome: "SSD NVMe 1TB", preco: "R$ 600", categoria: "Armazenamento" },
];

const visor = document.getElementById("visor");

produtos.forEach((produto) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `Nome: ${produto.nome}
  Preço: ${produto.preco}
  Categoria: ${produto.categoria}`;

  visor.appendChild(card);
});


const pesquisa = document
  .getElementById("pesquisa")
  .addEventListener("input", function () {
    const filtrados = produtos.filter((produto) => {
      return produto.nome.toLowerCase().includes(this.value.toLowerCase());
    });
    visor.textContent = "";
    filtrados.forEach((filtrado) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `Nome: ${filtrado.nome}
  Preço: ${filtrado.preco}
  Categoria: ${filtrado.categoria}`;

      visor.appendChild(card);
    });

    if (filtrados.length === 0) {
      visor.textContent = "Putz! Não encontramos esse item no estoque.";
      visor.classList.add("erro");
    } else {
      visor.classList.remove("erro");
    }
  });
