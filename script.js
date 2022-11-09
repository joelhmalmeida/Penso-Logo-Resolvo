function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

  function result(){
   document.getElementById('result').innerHTML = getRndInteger(1,10);
}





