import * as yup from "yup";

const clienteShape = yup.object().shape({
  nome: yup.string().required("Nome é obrigatório"),
  cpf: yup.string().required("Cpf é obrigatório"),
  data_nasc: yup
    .date()
    .max(
      new Date().toLocaleDateString(),
      "Não é possivel incluir uma data futura"
    )
    .required("Data de nascimento é obrigatório"),
  telefone: yup.string(),
  ativo: yup.number().required("Ativo é obrigatório"),
});

export default clienteShape;
