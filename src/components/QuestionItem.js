import React from "react";

function QuestionItem({ question, onDeleteQuestion, onQuestionUpdated }) {
  const { id, prompt, answers, correctIndex } = question;

  function handleIndexChange(event) {
    // add fetch request
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        'correctIndex': event.target.value,
      }),
    })
      .then((r) => r.json())
      .then((updatedItem) => onQuestionUpdated(updatedItem));  
    }


  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));


  function handleDeleteClick() {
    // Call onDeleteQuestion, passing the deleted question
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDeleteQuestion(question));
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleIndexChange}>{options}</select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
