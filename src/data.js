//==============================================================================
// TREATMENTS
//==============================================================================
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


//==============================================================================
// SLOTS
//==============================================================================
let slots = []
for (let hour = 8; hour < 18; hour++) {
    if (hour !== 13)
        slots.push(hour);
}


//==============================================================================
// PRACTITIONERS
//==============================================================================
// Note that working days 0-6 mean Monday-Sunday
const practitioners = [
    {
        name: 'A',
        freeSlots: [8, 9, 10, 11],
        utcWorkingDays: [0, 1, 2, 4],
    },
    {
        name: 'B',
        freeSlots: [9, 14, 17],
        utcWorkingDays: [3, 4],
    },
    {
        name: 'C',
        freeSlots: slots,
        utcWorkingDays: [1, 3],
    },
    {
        name: 'D',
        freeSlots: [8, 16],
        utcWorkingDays: [0, 1, 2],
    },
]

// /*
//  Upon submission, the form should output the values  to the console,
//  clear the form and show a success page
//  */
// const form = {
//     sex: '',
//     firstName: '',
//     familyName: '',
//     birthday: '',
//     email: '',
// }

export {treatments, slots, practitioners}