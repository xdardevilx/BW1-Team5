const select = document.getElementById('dif')

let numeroDomande = 0

const controlloDifficoltà = function() {
  if (select.value === 'hard') {
     numeroDomande = 10
    
  }
  else if (select.value === 'medium') {
     numeroDomande = 7
    
  }
  else   {
     numeroDomande = 5
    
  }
  return numeroDomande
}



const navigaBenchmark = function() {
  const formReference = document.getElementsByTagName('form')[1]
formReference.addEventListener('submit', function (e) {
  e.preventDefault()
  console.log(select.value)
  controlloDifficoltà()
  console.log(controlloDifficoltà())
  window.location.href = './benchmark.html'+'?domande='+ numeroDomande
})
}
navigaBenchmark()

