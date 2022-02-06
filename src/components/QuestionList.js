import React, {useState,useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions,onDeleteQuestion,onQuestionUpdated}) {
  let questionsToDisplay = questions.map((question) => (
    <QuestionItem
      question={question}
      onDeleteQuestion={onDeleteQuestion}
      onQuestionUpdated={onQuestionUpdated}
      />
  ))

  return (
    <section>
      <h1>Quiz Questions</h1>
      {questionsToDisplay}  
    </section>
  );
}

export default QuestionList;
