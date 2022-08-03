import {slots} from "../data";
import styled from "styled-components";

const StyledTable = styled.table`

  td, th {
    text-align: center;
    padding: 0.5rem;
  }

  .tHeader {
    background: #006edc;
  }
`

const SelectHour = ({practitioners, date}) => {
    const getFreeSlots = (currentSlot) => practitioners.map(i =>
        i.freeSlots.includes(currentSlot) && i.utcWorkingDays.includes(date.getUTCDay())
            ? <td key={i.name}><button>Book</button></td>
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