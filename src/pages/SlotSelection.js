import {useState} from "react";
import SelectPractitioner from "../components/SelectPractitioner";
import SelectDate from "../components/SelectDate";
import SelectHour from "../components/SelectHour";
import {practitioners} from "../data";

const checkablePractitioners = practitioners.map(i => {
    i.checked = true
    return i;
})

//==============================================================================
// SLOTSELECTION PAGE
//==============================================================================
const SlotSelection = () => {
    const [date, setDate] = useState(new Date());
    const [doctors, setDoctors] = useState(checkablePractitioners);


    const filterDoctors = (e) => {}
    //     doctors.some(i => {
    //         if (i.name === e.target.id) {
    //             i.checked = e.target.checked;
    //             return true;
    //         }
    //     })
    //             //search for doctor with name e.target.id
    //             // set his checked as e.target.checked
    //             // setDoctors(doctors.filter(i => i.checked === true));
    //     console.log(doctors);
    //     }
    //
        // console.log(e.target.id, e.target.checked, e)

    return (
        <>
            <SelectPractitioner practitioners={doctors} action={filterDoctors}/>
            <SelectDate action={setDate} value={date}/>
            <SelectHour/>
        </>
    )

}
export default SlotSelection;

