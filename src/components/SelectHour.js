import {slots} from "../data";
import styled from "styled-components";

const StyledTable = styled.table`

  td, th {
    text-align: center;
  }

  .tHeader {
    background: #006edc;
    padding: 0.8rem;
  }
`

const SelectHour = ({practitioners, date, onBooking}) => {
    const getFreeSlots = (currentSlot) => practitioners.map(i =>
        i.freeSlots.includes(currentSlot) && i.utcWorkingDays.includes(date.getDay())
            ? <td key={i.name}>
                <button onClick={() => onBooking(date, currentSlot, i.name)}>
                    Book
                </button>
            </td>
            : <td key={i.name}></td>
    );

    const headers = practitioners.map(i =>
        <th key={i.name} className={'tHeader'}>Dr. {i.name}</th>
    );

    const rows = slots.map(currentSlot => {
        return (
            <tr key={currentSlot}>
                <th className={'tHeader'}>{currentSlot}h</th>
                {getFreeSlots(currentSlot)}
            </tr>
        )
    });

    return (
        <StyledTable>
            <thead>
            <tr>
                <th/>
                {headers}
            </tr>
            </thead>
            <tbody>
            {rows}
            </tbody>
        </StyledTable>
    )
};

export default SelectHour;