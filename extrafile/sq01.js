const question = document.querySelector('#question');

const choices = Array.from(document.querySelectorAll('.choice-text')); const progressText = document.querySelector('#progressText');

const scoreText = document.querySelector('#score');

const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}

let acceptingAnswers = true

let score=0

let questionCounter = 0

let availableQuestions = []

let questions = [
  {
    question:'পদার্থের ক্ষুদ্রতমা কণা কি?',
    
    choice1: 'পরমাণু',
    choice2: 'অণু',
    choice3: 'মূলক',
    choice4: 'যৌগ',
    answer: 2,
},

{
question:"পানিতে অক্সিজেন ও হাইড্রোজেনের অনুপাত কত?",

  choice1: "১:২",
  choice2: "২:১",
  choice3: "৩:৪",
  choice4: "০:১", 
  answer: 1,
},

{
  question: "অস্টিওলজি অর্থ কী?",

  choice1: "কোষ বিষয়ক চিকিৎসা বিজ্ঞান",
  choice2: "অস্থি বিষয়ক চিকিৎসা বিজ্ঞান",
  choice3: "হাড় বিষয়ক চিকিৎসা বিজ্ঞান",
  choice4: "ভ্রুণ বিষয়ক চিকিৎসা বিজ্ঞান",
  answer: 3,
},

{
  question: "পদার্থের স্থায়ী মূল কণিকা",

  choice1: "ইলেকট্রোন, প্রোটন ও নিউট্রন",
  choice2: "ইলেক্ট্রন",
  choice3: "প্রোটন",
  choice4: "নিউট্রন",
  answer: 1,
},

{
  question: "রসায়ন বিজ্ঞানে ‘রকসল্ট’ নামে পরিচিত",

  choice1: "পটাসিয়াম ক্লোরাইড",
  choice2: "সালফিউরিক এসিড",
  choice3: "ম্যাগনেসিয়াম ক্লোরাইড",
  choice4: "সোডিয়াম ক্লোরাইউ",
  answer: 4,
},

{
  question: "ম্যালকোলজিতে নিচের কোনটি নিয়ে আলোচনা করা হয়?",

  choice1: "শামুক-ঝিনুক",
  choice2: "সামুদ্রিক মাছ",
  choice3: "শৈবাল-ছত্রাক",
  choice4: "ব্যাকটেরিয়া",
  answer: 1,
},


{
  question: "তেজস্ক্রিয় রশ্মিতে থাকে",

  choice1: "X-ray কনিকা",
  choice2: "আইসোটোপ",
  choice3: "আলফা, বিটা ও গামা কনিকা",
  choice4: "গামা রশ্মি",
  answer: 3,
},


{
  question: "কপারের অপর নাম",

  choice1: "স্বর্ণ",
  choice2: "লোহা",
  choice3: "তামা",
  choice4: "নিকেল",
  answer: 3,
},


{
  question: "হোমিওপ্যাথির আবিষ্কারক কে?",

  choice1: "মোসলে হেনরি",
  choice2: "কোপারনির্কাস",
  choice3: "জন ডাল্টন",
  choice4: "এস সি এফ হ্যানিমেন",
  answer: 4,
},



{
  question: "পদার্থের পরমাণুর প্রোটন সংখ্যা ও পারমাণবিক সংখ্যা",

  choice1: "পরস্পর অসমান",
  choice2: "পরস্পর সমান",
  choice3: "প্রোটন সংখ্যা দ্বিগুণ",
  choice4: "কোনোটিই নয়",
  answer: 2,
},

{
  question: "টুথপেস্টের প্রধান উপাদান",

  choice1: "সিলিকন ও ম্যাগনেসিয়াম",
  choice2: "ক্যালসিয়াম ও ম্যাগনেসিয়াম",
  choice3: "পাউডার ও ম্যাগনেসিয়াম",
  choice4: "সাবান ও পাউডার",
  answer: 4,
},


{
  question: "প্রাণিজগতের উৎপত্তি ও বংশ সম্বন্ধীয় বিদ্যাকে কী বলে?",

  choice1: "ইভোলিউশন",
  choice2: "ইভোলিউশন পিরিয়ড ",
  choice3: "ইভোলারি",
  choice4: "কোনোটিই নয়",
  answer: 1,
},

{
  question: "পৃথিবী ও উহার নিকটস্থ মধ্যকার বস্তুর আকর্ষণ বলকে কি বলে?",

  choice1: "অভিকর্ষ বল",
  choice2: "মহাকর্ষ বল",
  choice3: "আর্কষণ বল",
  choice4: "সবল নিউক্লিও বল",
  answer: 1,
},

{
  question: "ভূ-পৃষ্ঠে যে ধাতু সবচেয়ে বেশি আছে",

  choice1: "ম্যাগনেসিয়াম",
  choice2: "সিলিকল",
  choice3: "অ্যালুমিনিয়াম",
  choice4: "অক্সিজেন",
  answer: 3,
},


{
  question: "ডুমুরের পুংরেণুর সাথে স্ত্রীরেণুর সংযোগ স্থাপনের মাধ্যম",

  choice1: "মাছি",
  choice2: "মৌমাছি",
  choice3: "লাল পিঁপড়া",
  choice4: "কালো পিঁপড়া",
  answer: 4,
},


{
  question: "বরফ গলনের সুপ্ত তাপ কত?",

  choice1: "৬০ ক্যালরি",
  choice2: "৭০ ক্যালরি",
  choice3: "৮০ ক্যালরি",
  choice4: "৯০ ক্যালরি",
  answer: 3,
},



{
  question: "সাবানের রাসায়নিক নাম কি?",

  choice1: "পটাসিয়াম সাবান",
  choice2: "সোডিয়াম সাবান",
  choice3: "সোডিয়াম স্টিয়ারেট",
  choice4: "পটাসিয়াম স্টিয়ারেট",
  answer: 3,
},

{
  question: "ব্যাকটেরিয়া আবিষ্কার করেন কে?",

  choice1: "লিউয়েন হুক",
  choice2: "ডাল্টন",
  choice3: "অ্যারিষ্টটল",
  choice4: "হ্যালিক্স",
  answer: 1,
},



{
  question: "সেন্টিগ্রেড তাপমাত্রায় শব্দের গতি কত?",

  choice1: "৩৩৩ মিটার/সেকেন্ড",
  choice2: "৩৩২ মিটার/সেকেন্ড",
  choice3: "৩৩৫ মিটার/সেকেন্ড",
  choice4: "৩২১ মিটার/সেকেন্ড",
  answer: 2,
},


{
  question: "যে পানিতে সাবান সহজে ফেনা উৎপাদন কে?",

  choice1: "মৃদু পানিতে",
  choice2: "তীব্র এসিড পানিতে",
  choice3: "মৃদু ক্ষারীয় পানিতে",
  choice4: "নিরপেক্ষ পানিতে",
  answer: 1,
}



]



const SCORE_POINTS = 100
const MAX_QUESTIONS = 20

startGame = () => {
questionCounter = 0
score = 0
availableQuestions = [...questions]
getNewQuestion()

}

getNewQuestion = () => {

if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
localStorage.setItem('mostRecentScore', score)

return window.location.assign('end.html')

}

questionCounter++
progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`


const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
currentQuestion = availableQuestions[questionsIndex]
question.innerText = currentQuestion.question

choices.forEach(choice => {
const number = choice.dataset['number']
choice.innerText = currentQuestion['choice' + number]
})

availableQuestions.splice(questionsIndex, 1)

acceptingAnswers = true
}



choices.forEach(choice => {

      choice.addEventListener('click', e =>{
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
          incrementScore(SCORE_POINTS)

        }

            selectedChoice.parentElement.classList.add(classToApply)

            setTimeout(() => {
              
              selectedChoice.parentElement.classList.remove(classToApply)
                getNewQuestion()

            }, 1000)

          })

      })
incrementScore = num => {

      score +=num

      scoreText.innerText = score

    }

    startGame()
