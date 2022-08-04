import {useState, useEffect} from "react";
import SelectPractitioner from "../components/SelectPractitioner";
import SelectDate from "../components/SelectDate";
import SelectHour from "../components/SelectHour";
import {practitioners} from "../data";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";

//==============================================================================
// STYLING
//==============================================================================
const Vertical = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
`


//==============================================================================
// SLOT SELECTION PAGE
//==============================================================================
// This has to remain outside of component, otherwise the toggling of the
// checkboxes will produce no effect on the SelectHour component.
const checkablePractitioners = practitioners.map(i => {
    i.checked = true;
    return i;
})

const SlotSelection = ({treatment, onBooking}) => {
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
        <Vertical>
            <SectionTitle>2. Please pick a slot to book</SectionTitle>
            <SelectPractitioner action={updateCheckingStatus} practitioners={doctors}/>
            <SelectDate action={setDate} value={date}/>
            <SelectHour practitioners={doctors.filter(i => i.checked)}
                        date={date}
                        onBooking={onBooking}/>
        </Vertical>
    )

}
export default SlotSelection;

