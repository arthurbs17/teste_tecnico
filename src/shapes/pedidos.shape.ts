import * as yup from "yup";

const pedidoShape = yup.object().shape({
  produto: yup.string().required("Nome do produto é obrigatório"),
  valor: yup.number().required("Valor é obrigatório"),
  data: yup.string(),
  ativo: yup.number().required("Ativo é obrigatório"),
});

export default pedidoShape;
