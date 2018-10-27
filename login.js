function login(e) {
  e.preventDefault();
  // data = documents.SOMETHING
  // var userInput = document.SOMETHING
  // var passcode = document.SOMETHING

  var mydata = JSON.parse(data);
  for(var i = 0; i < mydata.length; i++) {
    if (mydata[i].email == userInput && mydata[i].password == passcode) {
      return True;
    }
  }
  checkUserInput(input);
}
