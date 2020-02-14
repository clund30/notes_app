// const square = function(x) {
//     return  x*x 
// }   

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x
// console.log(square(100));

const event = {
    name: 'Bday party',
    guestList: ['Casey', 'Sydney', 'Auria', 'Rook'],
    printGuestList () {
        console.log('guest list for: ' + this.name)
        // console.log('guest list: ' + this.guestList)

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()