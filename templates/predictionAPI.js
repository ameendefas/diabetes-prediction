function onClickedPredict() {

  // fetch('http://127.0.0.1:5000/predict?Age=20&Pregnancies=1&Glucose=1&BloodPressure=1&SkinThickness=1&BMI=1&DiabetesPedigreeFunction=1&Insulin=1')
  // .then(response => response.json())
  // .then(data => {
  //   console.log(data); // Print the fetched JSON data
  //   // Do something with the data
  // })
  // .catch(error => {
  //   console.error('Error:', error);
  // });

  const url = "http://127.0.0.1:5000/predict";

  $.get(url, {
    Age: parseFloat($('#Age').val()),
    Pregnancies: parseFloat($('#Pregnancies').val()),
    Glucose: parseFloat($('#Glucose').val()),
    BloodPressure: parseFloat($('#BloodPressure').val()),
    SkinThickness: parseFloat($('#SkinThickness').val()),
    BMI: parseFloat($('#BMI').val()),
    DiabetesPedigreeFunction: parseFloat($('#DiabetesPedigreeFunction').val()),
    Insulin: parseFloat($('#Insulin').val()),
    //partial: parseFloat($('#partial').val()),
    //alopecia: parseFloat($('#alopecia').val())
  }, function (response, status) {

    if (response.label === 0) {
      prediction.innerHTML = "<h3>You don't have Diabetes.<br>Keep living healthy. ☺</h3>";
    }
    else if (response.label === 1) {
      prediction.innerHTML = "<h3>You have Diabetes.<br>Consult with a doctor.</h3>"
    }
    else {
      prediction.innerHTML = "<h3>Please provide all the information.</h3>"
    }
  });
}