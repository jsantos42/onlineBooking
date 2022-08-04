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
// Note that working days 1-7 mean Monday-Sunday
const practitioners = [
    {
        name: 'A',
        freeSlots: [8, 9, 10, 11],
        utcWorkingDays: [1, 2, 4, 5],
        treatments: ['Appointment', 'Endoscopy', 'Colonoscopy'],
    },
    {
        name: 'B',
        freeSlots: [9, 14, 17],
        utcWorkingDays: [3, 4],
        treatments: ['Endoscopy', 'Colonoscopy'],
    },
    {
        name: 'C',
        freeSlots: slots,
        utcWorkingDays: [1, 3],
        treatments: ['Appointment', 'Endoscopy', 'Colonoscopy'],
    },
    {
        name: 'D',
        freeSlots: [8, 16],
        utcWorkingDays: [1, 2, 3],
        treatments: ['Colonoscopy'],
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