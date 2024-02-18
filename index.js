const user = {
  _nome: "",
  get getName() {
    return this._nome.toLocaleUpperCase();
  },
  set setName(nome) {
    return (this._nome = nome);
  },
};

{
  const Temperatura = {
    _graus: null,
    get temp() {
      return (this._graus - 32) / 1.8;
    },
    set temp(celsius) {
      this._graus = celsius * 1.8 + 32;
    },
  };

  Temperatura.temp = 30;
  // console.log(Temperatura.temp);
  // console.log(Temperatura.temp);
  // console.log(Temperatura._graus);
}

{
  const area = {
    _area: 0,
    get lado() {
      return this._area;
    },
    set lado(tLado) {
      return (this._area = tLado * 4);
    },
  };
  area.lado = 5;
  // console.log(area._area);
}

{
  const objOriginal = {
    nome: "Lucas",
    sobrenome: "Silva",
  };

  const proxyObj = new Proxy(objOriginal, {
    get(target, propriedade) {
      return target[propriedade];
    },
    set(target, propriedade, novoValor) {
      target[propriedade] = novoValor;
    },
  });

  // console.log(proxyObj.nome);
  proxyObj.nome = "Maria";
  // console.log(proxyObj.nome);
}

{
  const proxiedObject = new Proxy(originalObject, handler);
  const newHandler = {
    get(target, property, receiver) {
      console.log(`GET ${property}`);
      if (property in target) {
        // [A]
        return target[property];
      }
      return "Oops! This property does not exist.";
    },
  };
  console.log(proxiedObject.idade);
}
