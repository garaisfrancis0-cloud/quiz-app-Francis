export const questions = [
  {
    id: 1,
    question: 'What does JSX stand for?',
    options: ['JavaScript XML', 'Java Syntax Extension', 'JSON XML', 'JavaScript Extension'],
    correctAnswer: 'JavaScript XML',
  },
  {
    id: 2,
    question: 'Which hook is used to manage state in a function component?',
    options: ['useReducer', 'useState', 'useMemo', 'useEffect'],
    correctAnswer: 'useState',
  },
  {
    id: 3,
    question: 'Which HTML attribute is used to pass a CSS class to a React element?',
    options: ['className', 'class', 'cssClass', 'classList'],
    correctAnswer: 'className',
  },
  {
    id: 4,
    question: 'What is the correct way to render a list in React?',
    options: [
      'Using map() and a key prop',
      'Using forEach() only',
      'Using innerHTML',
      'Using a while loop',
    ],
    correctAnswer: 'Using map() and a key prop',
  },
  {
    id: 5,
    question: 'Which method is used to update state based on the previous value?',
    options: ['setState(value)', 'setState(() => value)', 'updateState()', 'state = value'],
    correctAnswer: 'setState(() => value)',
  },
  {
    id: 6,
    question: 'What does the React useEffect hook allow you to do?',
    options: [
      'Create components',
      'Perform side effects after render',
      'Style elements',
      'Render strings',
    ],
    correctAnswer: 'Perform side effects after render',
  },
  {
    id: 7,
    question: 'Which keyword is used to create a component in React?',
    options: ['function', 'const', 'class', 'new'],
    correctAnswer: 'function',
  },
  {
    id: 8,
    question: 'How do you pass data from a parent component to a child component?',
    options: ['Using props', 'Using refs', 'Using events', 'Using CSS'],
    correctAnswer: 'Using props',
  },
  {
    id: 9,
    question: 'Which of these is a valid React fragment syntax?',
    options: ['<></>', '<Fragment></Fragment>', '<div></div>', '<[]></[]>'],
    correctAnswer: '<></>',
  },
  {
    id: 10,
    question: 'What is the purpose of a key prop in a list rendered by React?',
    options: [
      'To identify unique items during updates',
      'To change the color of the item',
      'To define the CSS class',
      'To compute the score',
    ],
    correctAnswer: 'To identify unique items during updates',
  },
]
