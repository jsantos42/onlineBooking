import {useState} from "react";
import SelectPractitioner from "../components/SelectPractitioner";
import SelectDate from "../components/SelectDate";
import SelectHour from "../components/SelectHour";
import {practitioners} from "../data";

const checkablePractitioners = practitioners.map(i => {
    i.checked = true;
    return i;
})

//==============================================================================
// SLOTSELECTION PAGE
//==============================================================================
//
const SlotSelection = () => {
    const [date, setDate] = useState(new Date());
    const [doctors, setDoctors] = useState(checkablePractitioners);

    const updateCheckingStatus = (e) => {
        setDoctors(doctors.map(i => {
            if (i.name === e.target.id)
                i.checked = e.target.checked;
            return i;
        }))
    }
    console.log(date.getUTCDay())

    return (
        <>
            <SelectPractitioner action={updateCheckingStatus}/>
            <SelectDate action={setDate} value={date}/>
            <SelectHour practitioners={doctors.filter(i => i.checked)}
                        date={date}/>
        </>
    )

}
export default SlotSelection;

