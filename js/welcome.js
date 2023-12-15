const select = document.getElementById('dif')

const controlloDifficoltà = function() {
  if (select.value === 'hard') {
    let numeroDomande = 10
    return numeroDomande
  }
  else if (select.value === 'medium') {
    let numeroDomande = 7
    return numeroDomande
  }
  else   {
    let numeroDomande = 5
    return numeroDomande
  }
}

const formReference = document.getElementsByTagName('form')[1]
formReference.addEventListener('submit', function (e) {
  e.preventDefault()
  console.log(select.value)
  controlloDifficoltà()
  window.location.href = './benchmark.html'+'?domande ='+ controlloDifficoltà()
})

