const treatments = [
    {
        name: 'Appointment',
        price: 50,
    },
    {
        name: 'Endoscopy',
        price: 100,
    },
    {
        name: 'Colonoscopy',
        price: 200,
    },
]


let slots = []
for (let hour = 8; hour < 18; hour++) {
    if (hour !== 13)
        slots.push(hour);
}

const practitioners = [
    {
        name: 'A',
        freeSlots: slots,
    },
    {
        name: 'B',
        freeSlots: slots,
    },
    {
        name: 'C',
        freeSlots: slots,
    },
]

/*
 Upon submission, the form should output the values  to the console,
 clear the form and show a success page
 */
const form = {
    sex: '',
    firstName: '',
    familyName: '',
    birthday: '',
    email: '',
}

export {treatments, practitioners}