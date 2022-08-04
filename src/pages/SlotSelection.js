import {useState, useEffect} from "react";
import SelectPractitioner from "../components/SelectPractitioner";
import SelectDate from "../components/SelectDate";
import SelectHour from "../components/SelectHour";
import {practitioners} from "../data";

// This has to remain outside of component, otherwise the toggling of the
// checkboxes will produce no effect on the SelectHour component.
const checkablePractitioners = practitioners.map(i => {
    i.checked = true;
    return i;
})

//==============================================================================
// SLOTSELECTION PAGE
//==============================================================================
//
const SlotSelection = ({treatment}) => {
    const [date, setDate] = useState(new Date());
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        setDoctors(checkablePractitioners
            .filter(i => i.treatments.includes(treatment)));
    }, [treatment])

    const updateCheckingStatus = (e) => {
        setDoctors(doctors.map(i => {
            if (i.name === e.target.id)
                i.checked = e.target.checked;
            return i;
        }))
    }

    return (
        <>
            <SelectPractitioner action={updateCheckingStatus} practitioners={doctors}/>
            <SelectDate action={setDate} value={date}/>
            <SelectHour practitioners={doctors.filter(i => i.checked)}
                        date={date}/>
        </>
    )

}
export default SlotSelection;

