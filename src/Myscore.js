import axios from 'axios';
import React from 'react';

export default function Myscore() {
          const myHeaders = new Headers();
          const requestOptions = {
                    method: "GET",
                    headers: myHeaders,
                    redirect: "follow"
                  };                  
          myHeaders.append("Cookie", "csrftoken=hBU6TebSlEEsEbNEtu7DH1JwnUuWmuae")
          // axios.get('http://127.0.0.1:7002/calculate_score',{ headers: myHeaders})
          // .then(response => {
          // // Handle successful response
          // console.log(response.data); // Data returned by the endpoint
          // })
          // .catch(error => {
          // // Handle error
          // console.error('Error fetching data:', error);
          // });
          const score= fetch("http://127.0.0.1:8000/calculate_score", requestOptions)
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.error(error));

          
          // const myHeaders = new Headers();
          //                     myHeaders.append("Cookie", "csrftoken=hBU6TebSlEEsEbNEtu7DH1JwnUuWmuae");

          //                     const requestOptions = {
          //                     method: "GET",
          //                     headers: myHeaders,
          //                     redirect: "follow"
          //                     };

          //                     const mydata=
          //                               fetch("http://127.0.0.1:7002/calculate_score", requestOptions)
          //                               .then((response) => response.text())
          //                               .then((result) => console.log('result',result))
          //                               .catch((error) => console.error(error));
          return (
                    <div>
                              {/* {mydata} */}
                    </div>
          )
}