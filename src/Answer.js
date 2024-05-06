import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Answer() {
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

    const goToScore = () => {
        navigate('/Myscore');
    }

  const handleInputChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "csrftoken=hBU6TebSlEEsEbNEtu7DH1JwnUuWmuae");

    const raw = JSON.stringify({
      "Answer_text": answer,
      "Ans_category": "Conceptual"
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("http://127.0.0.1:8000/createanswer", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

    // try {
    //   const response = await axios.post(
    //     "http://127.0.0.1:8006/createanswer",
    //     { answer }
    //   );
    //   console.log("Answer saved:", response.data);
    //   // Reset the answer field after successful submission
    //   setAnswer("");
    // } catch (error) {
    //   console.error("Error saving answer:", error);
    // }
    goToScore()

  };

  return (
    <div>
      <h2>Answer:</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleInputChange}
          placeholder="Type your answer here..."
          rows={4}
          cols={50}
          required
        ></textarea>
        <br />
        <button type="submit">Submit Answer</button>
      </form>
    </div>
  );
}
