const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const count = document.getElementById('count')
const total = document.getElementById('total')
const movieSelect = document.getElementById('movie')

let ticketPrice = +movieSelect.value;

function init() {
    if (localStorage.getItem('selectedSeats') !== null){
        const selectedSeats = eval(localStorage.getItem('selectedSeats'))
        selectedSeats.forEach(seat => {
            seats[seat].classList.add('selected')
        });
    } 

    if (localStorage.getItem('selectedMovie') !== null){
        movieSelect.selectedIndex = localStorage.getItem('selectedMovie')
    }
    updateSelectedCount()
}

//Update total and count
function updateSelectedCount() {
    
    const selectedSeats = document.querySelectorAll('.container .seat.selected')
    
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat))

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex))
    
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
    const selectedMovie = e.target.selectedIndex
    localStorage.setItem('selectedMovie', selectedMovie)
    updateSelectedCount()
})





init()