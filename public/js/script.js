const nextButton = document.getElementById('next-btn')
const firstBox = document.get.getElementById ('page1')

nextButton.addEventListener('click', nextPage)

function nextPage() {
    nextButton.classList.add('hide')
    firstBox.classList.remove('hide')
    setNextPage()
}
