const formReference = document.getElementsByTagName('form')[0]
formReference.addEventListener('submit', function (e) {
  e.preventDefault()
  window.location.href = './benchmark.html'
})
