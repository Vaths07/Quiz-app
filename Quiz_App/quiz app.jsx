mport React, { useState } from 'react';

const QuizApp = () => {
  const questions = [
    { q: "2 + 2 = ?", a: "4", o: ["3", "4", "5", "6"] },
    { q: "Capital of France?", a: "Paris", o: ["Berlin", "Madrid", "Paris", "Rome"] }
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (opt) => setSelected(opt);

  const confirmAnswer = () => {
    if (!selected) return alert("Select an option!");
    if (selected === questions[current].a) setScore(score + 2);
    else setScore(score - 1);
    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
        setSelected("");
      } else {
        setShowResult(true);
      }
    }, 500);
  };
