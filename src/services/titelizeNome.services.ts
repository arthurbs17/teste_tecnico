const titelizeNomeServices = (nome: string) => {
  const words = nome.toLowerCase().split(" ");

  for (let i = 0; i < words.length; i++) {
    let letter = words[i];
    words[i] = letter[0].toLocaleUpperCase() + letter.slice(1);
  }

  return words.join(" ");
};

export default titelizeNomeServices;
