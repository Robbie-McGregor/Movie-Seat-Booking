const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const count = document.getElementById('count')
const total = document.getElementById('total')
const movieSelect = document.getElementById('movie')

let ticketPrice = +movieSelect.value;

//Update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.container .seat.selected')
    count.innerText = selectedSeats.length
    total.innerText = `$${(selectedSeats.length * ticketPrice).toFixed(2)}`
}





//Event Listeners
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected')

        updateSelectedCount()
    }
})

movieSelect.addEventListener('change', (e) => {
    ticketPrice = +e.target.value
    updateSelectedCount()
})