// -----------------------------------------------------------------------------------------------
// PROVA DE CONCEITO | REDUX - uma abordagem prática
// -----------------------------------------------------------------------------------------------

// Adicionamos a biblioteca 'colors' apenas para melhorar a visualização de mensagens no prompt de commando do NODE. Ela não é necessária para a utilização do REDUX.
const colors = require("colors");

// Primeiro precisamos importar o REDUX. Como iremos rodar diretamente no NODE importaremos a biblioteca utilizando 'require('...')'.
const redux = require("redux");

// Aqui definimos um valor inicial para a nossa STORE... que ainda será criada mais a frente.
const initialState = {
  counter: 0
};

// # REDUCER #
// Ele é o único responsável por atualizar o status da STORE. É aqui também implementaremos a nossa lógica. Usaremos o inicialState como valor inicial para nossa STORE caso contrario o valor será UNDEFINED.
const rootReducer = (state = initialState, action) => {
  if (action.type === "INC_COUNTER") {
    return {
      ...state,
      counter: state.counter + 1
    };
  }

  if (action.type === "ADD_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.value
    };
  }
  return state;
};

// # STORE #
// Agora precisamos criar nossa STORE que por trás dos panos nada mais é que um objeto global disponível para todos e passamos o nosso REDUCER como parâmetro.
const createStore = redux.createStore;
const store = createStore(rootReducer);

console.log(colors.black.bgBlue("Inicial State:", store.getState()));
console.log("--------------------------------");

// # SUBSCRIBE #
// Subscrevemos a store para escutarmos quaisquer modificações feitas nela e disparar uma função específica - no caso abaixo apenas um console.log().
store.subscribe(() => {
  console.info(colors.black.bgYellow("[Subscription] :", store.getState()));
});

// # ACTIONS #
// Definimos nossas actions
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 10 });

console.log("--------------------------------");
console.log(colors.black.bgGreen("Current State:", store.getState()));

// Pronto! Tudo que você precisa fazer é navegar até essa pasta via PROMPT DE COMANDO e executar >> node redux-basic.js
// E o resultado aperecera :D
