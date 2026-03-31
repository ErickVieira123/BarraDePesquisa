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
