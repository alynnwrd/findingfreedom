const nextButton = document.getElementById('next-btn')
const firstBox = document.get.getElementById ('page1')

nextButton.addEventListener('click', nextPage)

function nextPage() {
    nextButton.classList.add('hide')
    firstBox.classList.remove('hide')
    setNextPage()
}
const getNotes = () =>
  fetch('/api/notes', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
