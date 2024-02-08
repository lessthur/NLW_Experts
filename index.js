const perguntas = [
  {
    pergunta: "Qual é o órgão responsável pela filtragem do sangue no corpo humano?",
    respostas: [
      "Fígado",
      "Rim",
      "Pulmão"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o nome do tecido que reveste internamente os ossos longos?",
    respostas: [
      "Tendão",
      "Cartilagem",
      "Medula Óssea"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o nome do ácido encontrado no estômago humano?",
    respostas: [
      "Ácido Cítrico",
      "Ácido Sulfúrico",
      "Ácido Clorídrico"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o nome do músculo que separa a cavidade torácica da abdominal?",
    respostas: [
      "Músculo Esternocleidomastoideo",
      "Músculo Diafragma",
      "Músculo Esquelético"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o nome do hormônio responsável pelo controle do nível de açúcar no sangue?",
    respostas: [
      "Insulina",
      "Adrenalina",
      "Testosterona"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do tecido responsável pela transmissão de impulsos nervosos no corpo?",
    respostas: [
      "Epitélio",
      "Nervo",
      "Neurônio"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o nome do osso que forma o calcanhar?",
    respostas: [
      "Tíbia",
      "Fêmur",
      "Calcâneo"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o nome do órgão responsável pela produção de insulina no corpo?",
    respostas: [
      "Pâncreas",
      "Fígado",
      "Baço"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do fluido que lubrifica as articulações no corpo humano?",
    respostas: [
      "Sangue",
      "Linfático",
      "Sinovial"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o nome da glândula que regula o metabolismo no corpo humano?",
    respostas: [
      "Pituitária",
      "Tireoide",
      "Suprarrenal"
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

