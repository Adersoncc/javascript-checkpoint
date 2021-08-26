function tempoPorPedido(produto, tempo) {
  let pipoca = 10
  let macarrao = 8
  let carne = 15
  let feijao = 12
  let brigadeiro = 8

  const msg1 = 'Tempo insuficiente!'
  const msg2 = 'Prato pronto, bom apetite!!!'
  const msg3 = 'A comida queimou!'
  const msg4 = 'kabum!!!'
  const msg5 = 'Prato inexistente, porfavor digite novamente!'

  if (produto === 1) {
    if (tempo < pipoca) {
      console.log(msg1)
    } else if (tempo >= pipoca && tempo <= pipoca * 2) {
      console.log(msg2)
    } else if (tempo > pipoca * 2 && tempo <= pipoca * 3) {
      console.log(msg3)
    } else if (tempo > pipoca * 3) {
      console.log(msg4)
    }
  } else if (produto === 2) {
    if (tempo < macarrao) {
      console.log(msg1)
    } else if (tempo >= macarrao && tempo <= macarrao * 2) {
      console.log(msg2)
    } else if (tempo > macarrao * 2 && tempo <= macarrao * 3) {
      console.log(msg3)
    } else if (tempo > macarrao * 3) {
      console.log(msg4)
    }
  } else if (produto === 3) {
    if (tempo < carne) {
      console.log(msg1)
    } else if (tempo >= carne && tempo <= carne * 2) {
      console.log(msg2)
    } else if (tempo > carne * 2 && tempo <= carne * 3) {
      console.log(msg3)
    } else if (tempo > carne * 3) {
      console.log(msg4)
    }
  } else if (produto === 4) {
    if (tempo < feijao) {
      console.log(msg1)
    } else if (tempo >= feijao && tempo <= feijao * 2) {
      console.log(msg2)
    } else if (tempo > feijao * 2 && tempo <= feijao * 3) {
      console.log(msg3)
    } else if (tempo > feijao * 3) {
      console.log(msg4)
    }
  } else if (produto === 5) {
    if (tempo < brigadeiro) {
      console.log(msg1)
    } else if (tempo >= brigadeiro && tempo <= brigadeiro * 2) {
      console.log(msg2)
    } else if (tempo > brigadeiro * 2 && tempo <= brigadeiro * 3) {
      console.log(msg3)
    } else if (tempo > brigadeiro * 3) {
      console.log(msg4)
    }
  } else if (produto < 1 || produto > 5) {
    console.log(msg5)
  }
}

//==========PAINEL DO MICROONDAS========
const menu = `
    1 - Pipoca – 10 segundos (padrão);\n
    2 - Macarrão – 8 segundos (padrão);\n
    3 - Carne – 15 segundos (padrão);\n
    4 - Feijão – 12 segundos (padrão);\n
    5 - Brigadeiro – 8 segundos (padrão);
    `
//====PORFAVOR PRESSIONE O NÚMERO DO PEDIDO SEGUIDO DO TEMPO DE PREPARO====//
//===EXEMPLO
//tempoPorPedido(digite o numero aqui, digite o numero aqui)
//tempoPorPedido(2, 18)
//===========   ||,||   ===============//
tempoPorPedido(4,)
