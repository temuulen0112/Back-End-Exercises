const fs = require("fs");
const request = require("request");

request.post(
  {
    url: "https://gorest.co.in/public/v1/users",
    body: JSON.stringify({
      "name": "daaraadBnashdePONPON",
      "email": "inYpurArea@gmail.com",
      "gender": "male",
      "status": "active",
    }),
    headers: {
      "content-type": "application/json",
      "Accept": "application/json",
      "Authorization": "Bearer 1257a1bf4ad81fb1eccc71349cc74ea71c81d523a3338741ba4ab2db6c49c45a",
    },
  },
  function (error, response, body) {
    const data = JSON.parse(body).data;
    let name = data.name;
    let email = data.email;
    let gender = data.gender;
    let status = data.status;

    let content = `name: ${name} \n email: ${email} \n gender: ${gender} \n status: ${status}`;
    fs.writeFileSync("/Users/mstars_lab1_07/Desktop/Node-Experience/response.txt", content, { flag: "a+" }, (err) => {
        if (err) {
          console.error(error);
          return;
        } else {
          console.log(response);
        }
      }
    );
  }
);
