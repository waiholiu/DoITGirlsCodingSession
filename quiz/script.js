const startButton = document.getElementById('start-btn')

const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-container')

const questionElement = document.getElementById('question')

const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

nextButton.addEventListener('click', () => {

  currentQuestionIndex++

  setNextQuestion()

})

function startGame() {

  startButton.classList.add('hide')

  shuffledQuestions = questions.sort(() => Math.random() - .5)

  currentQuestionIndex = 0

  questionContainerElement.classList.remove('hide')

  setNextQuestion()

}

function setNextQuestion() {

  resetState()

  showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {

  questionElement.innerText = question.question

  question.answers.forEach(answer => {

    const button = document.createElement('button')

    button.innerText = answer.text

    button.classList.add('btn')

    if (answer.correct) {

      button.dataset.correct = answer.correct

    }

    button.addEventListener('click', selectAnswer)

    answerButtonsElement.appendChild(button)

  })

}

function resetState() {

  clearStatusClass(document.body)

  nextButton.classList.add('hide')

  while (answerButtonsElement.firstChild) {

    answerButtonsElement.removeChild(answerButtonsElement.firstChild)

  }

}

function selectAnswer(e) {

  const selectedButton = e.target

  const correct = selectedButton.dataset.correct

  setStatusClass(document.body, correct)

  Array.from(answerButtonsElement.children).forEach(button => {

    setStatusClass(button, button.dataset.correct)

  })

  if (shuffledQuestions.length > currentQuestionIndex + 1) {

    nextButton.classList.remove('hide')

  } else {

    startButton.innerText = 'Restart'

    startButton.classList.remove('hide')

  }

}

function setStatusClass(element, correct) {

  clearStatusClass(element)

  if (correct) {

    element.classList.add('correct')

  } else {

    element.classList.add('wrong')

  }

}

function clearStatusClass(element) {

  element.classList.remove('correct')

  element.classList.remove('wrong')

}

const questions = [

  {

    question: 'What is 2 + 2?',

    answers: [

      { text: '5', correct: true },

      { text: '4', correct: false }

    ]

  },

  {

    question: 'Which of the following is a renewable resource?',

    answers: [

      { text: 'Coal', correct: false },

      { text: 'Oil', correct: true },

      { text: 'Solar Energy', correct: false },

      { text: 'Natural Gas', correct: false }

    ]

  },

  {

    question: 'Who sang the song Shake it Off?',

    answers: [

      { text: 'Taylor Swift', correct: false },

      { text: 'Donald Trump', correct: true },

      { text: 'Olivia Rodrigo', correct: false },

      { text: 'Pink', correct: false }

    ]

  },

  {

    question: 'Consider an economy that is currently in a recessionary gap. Which of the following policy measures is most likely to increase aggregate demand and close the gap?',

    answers: [

      { text: 'Decreasing government spending', correct: false },

      { text: 'Increasing taxes', correct: false },

      { text : 'Increasing government spending', correct: false},

      { text : ' None of the above, as recessionary gaps close automatically over time', correct: false }

    ]

  }

]