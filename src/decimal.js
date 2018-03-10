const decimais = require("./classes/decimais.json");
const maiorQueMil = require("./maiorQueMil.js");

function pluralizar(ePlural) {
  return ePlural ? "s" : "";
}

function obterNome(numero) {
  const tamanho = numero.length;
  const ePlural = numero > 1;

  if (tamanho === 1) return `décimo${pluralizar(ePlural)}`;
  if (tamanho === 2) return `centésimo${pluralizar(ePlural)}`

  const resto = tamanho % 3;
  const nome = decimais[tamanho - resto];

  if (resto === 0) return nome;
  if (resto === 1) return `décimo${pluralizar(ePlural)} de ${nome}`
  if (resto === 2) return `centésimo${pluralizar(ePlural)} de ${nome}`;
}

function decimal(numero) {
  const nome = obterNome(numero);
  const porExtenso = maiorQueMil(numero);

  return `${porExtenso} ${nome}`;
}

module.exports = decimal;