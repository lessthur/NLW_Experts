const perguntas = [
    {
      pergunta: "Qual é a palavra-chave utilizada para declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "let",
        "const"
      ],
      correta: 2
    },
    {
      pergunta: "Qual dos seguintes métodos é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "pop()",
        "shift()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função utilizada para converter uma string em um número inteiro em JavaScript?",
      respostas: [
        "parseInt()",
        "parseFloat()",
        "Number()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual operador é utilizado para verificar se dois valores são iguais em valor e tipo em JavaScript?",
      respostas: [
        "==",
        "===",
        "="
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "shift()",
        "splice()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função utilizada para imprimir algo no console em JavaScript?",
      respostas: [
        "print()",
        "log()",
        "console()"
      ],
      correta: 1
    },
    {
      pergunta: "Qual símbolo é usado para comentar uma única linha em JavaScript?",
      respostas: [
        "//",
        "/* */",
        "'"
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para juntar os elementos de um array em uma string em JavaScript?",
      respostas: [
        "join()",
        "concat()",
        "slice()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome da função que é chamada automaticamente quando um objeto é criado em JavaScript?",
      respostas: [
        "start()",
        "init()",
        "constructor()"
      ],
      correta: 2
    },
    {
      pergunta: "Qual função é usada para encontrar a posição de uma substring dentro de uma string em JavaScript?",
      respostas: [
        "search()",
        "indexOf()",
        "find()"
      ],
      correta: 1
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas) {
   quizItem = template.content.cloneNode(true)
      quizItem.querySelector('h3').textContent = item.pergunta
  
    for (let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
  
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
  
        if(estaCorreta){
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
    
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
    quiz.appendChild(quizItem)
  
  }

