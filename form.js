function nif(dni) {
    let number;
    let letr;
    let character;
    var correct = true;

    number = dni.substr(0,dni.length-1);
    letr = dni.substr(dni.length-1,1);
    number = number % 23;
    character='TRWAGMYFPDXBNJZSQVHLCKET';
    character=character.substring(number,number+1);
    correctID = dni.substr(0,dni.length-1)
    if(character!=letr){
        alert('Incorrect ID');
        correct = false;
    }
  }

  function validateEmail(email){
    correct = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };



  function validateIBAN(iban) {
    var newIban = iban.toUpperCase(),
      modulo = function(divident, divisor) {
        var cDivident = '';
        var cRest = '';
  
        for (var i in divident) {
          var cChar = divident[i];
          var cOperator = cRest + '' + cDivident + '' + cChar;
  
          if (cOperator < parseInt(divisor)) {
            cDivident += '' + cChar;
          } else {
            cRest = cOperator % divisor;
            if (cRest == 0) {
              cRest = '';
            }
            cDivident = '';
          }
  
        }
        cRest += '' + cDivident;
        if (cRest == '') {
          cRest = 0;
        }
        return cRest;
      };
  
    if (newIban.search(/^[A-Z]{2}/gi) < 0) {
      return false;
    }
  
    newIban = newIban.substring(4) + newIban.substring(0, 4);
  
    newIban = newIban.replace(/[A-Z]/g, function(match) {
      return match.charCodeAt(0) - 55;
    });
  
    return parseInt(modulo(newIban, 97), 10) === 1;
  }

