import React, { useState } from "react";
import axios from "axios";
import Answer from "./Answer";
import { useNavigate } from 'react-router-dom';
import Myscore from "./Myscore";

export default function Question() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [score, setMyscore] = useState(0);

  const navigate = useNavigate();

    const goToAnswer = () => {
        navigate('/Answer');
    }

  const handleInputChange = (event) => {
    setQuestion(event.target.value);
  };
  const handleInputChange1 = (event) => {
    setAnswer(event.target.value);
  };
  const handleInputChange2 = (event) => {
    setMyscore(event.target.value);
    console.log('...', score)
  };

  const handleSubmit2 = async (event) => {

    const myHeaders = new Headers();
                           
          myHeaders.append("Cookie", "csrftoken=hBU6TebSlEEsEbNEtu7DH1JwnUuWmuae")

          const raw = JSON.stringify({
            "quest_text": question,
            "Answer_text": answer
          });
          const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
          }; 

          fetch("http://127.0.0.1:8000/calculate_score", requestOptions)
          .then((response) => response.text())
          .then((result) => setMyscore(result))
          .catch((error) => console.error(error));

  }
  const handleSubmit1 = async (event) => {
    // event.preventDefault();
    const myHeaders1 = new Headers();
      myHeaders1.append("Content-Type", "application/json");
      myHeaders1.append("Cookie", "csrftoken=hBU6TebSlEEsEbNEtu7DH1JwnUuWmuae");

      const raw1 = JSON.stringify({
        "Answer_text": answer,
        "Ans_category" : "Conceptual"
      });
  

      const requestOptions1 = {
          method: "POST",
          headers: myHeaders1,
          body: raw1,
          redirect: "follow"
      }
      fetch("http://127.0.0.1:8000/createanswer", requestOptions1)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
  }
  const handleSubmit = async (event) => {
      event.preventDefault();
    
      const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "csrftoken=hBU6TebSlEEsEbNEtu7DH1JwnUuWmuae");

      
      const raw = JSON.stringify({
      "quest_text": question
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    }
    fetch("http://127.0.0.1:8000/question", requestOptions)
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.error(error));

    handleSubmit1()
    handleSubmit2()
    }
   


    

      // My Score


      

      


  //   try {
  //     const response = await axios.post(
  //       "http://127.0.0.1:8006/question",
  //       { question }
  //     );
  //     console.log("Question saved:", response.data);
  //     // Reset the question field after successful submission
  //     setQuestion("");
  //   } catch (error) {
  //     console.error("Error saving question:", error);
  //   }
  // };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
  <div style={{ textAlign: 'center' }}>
    <h2>Question</h2>
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
      <textarea
        value={question}
        onChange={handleInputChange}
        placeholder="Type your question here..."
        rows={2}
        cols={30}
        required
      ></textarea>
      <br />
      <h2>Answer</h2>
      <textarea
        value={answer}
        onChange={handleInputChange1}
        placeholder="Type your Answer here..."
        rows={2}
        cols={30}
        required
      ></textarea>
      <br />
      <button type="submit" style={{ margin: '10px' }}>Get Score</button>
      <br />
      <h2>Score</h2>
      <textarea
        value={score}
        onChange={handleInputChange2}
        placeholder="The score is.."
        rows={2}
        cols={30}
      ></textarea>
    </form>
  </div>
</div>

  );
}
