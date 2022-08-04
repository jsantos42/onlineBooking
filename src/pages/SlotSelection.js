import {useState, useEffect} from "react";
import SelectPractitioner from "../components/SelectPractitioner";
import SelectDate from "../components/SelectDate";
import SelectHour from "../components/SelectHour";
import {practitioners} from "../data";
import styled from "styled-components";

//==============================================================================
// STYLING
//==============================================================================
const Horizontal = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5rem 10rem;
  justify-content: center;
`

const Vertical = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 5rem;
  align-items: center;
`


//==============================================================================
// SLOTSELECTION PAGE
//==============================================================================
// This has to remain outside of component, otherwise the toggling of the
// checkboxes will produce no effect on the SelectHour component.
const checkablePractitioners = practitioners.map(i => {
    i.checked = true;
    return i;
})

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
        <Horizontal>
            <Vertical>
                <SelectPractitioner action={updateCheckingStatus} practitioners={doctors}/>
                <SelectDate action={setDate} value={date}/>
            </Vertical>
            <SelectHour practitioners={doctors.filter(i => i.checked)}
                        date={date}/>
        </Horizontal>
    )

}
export default SlotSelection;

