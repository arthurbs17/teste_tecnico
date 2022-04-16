const isNumber = (str) => {
  return !isNaN(str);
};

const verifyCpfServices = (cpf: string) => {
  let validCpf = "";
  for (let i = 0; i < cpf.length; i++) {
    if (isNumber(cpf[i])) {
      validCpf += cpf[i];
    }
  }
  return validCpf;
};

export default verifyCpfServices;
