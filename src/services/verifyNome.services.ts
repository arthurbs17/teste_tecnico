const isNumber = (str) => {
  return !isNaN(str);
};

const verifyNomeServices = (nome: string) => {
  for (let i = 0; i < nome.length; i++) {
    if (isNumber(nome[i]) && nome[i] !== " ") {
      throw new Error("Nome inválido!");
    }
  }
  return nome;
};

export default verifyNomeServices;
