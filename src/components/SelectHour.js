import {slots} from "../data";
import styled from "styled-components";

const StyledTable = styled.table`
  align-self: flex-start;

  td, th {
    text-align: center;
  }

  .tHeader {
    background: #006edc;
    color: white;
    padding: 0.8rem;
  }

  .book {
    padding: 0.5rem;
    background: ${props => props.theme.color};
    color: ${props => props.theme.background};
    font-weight: 800;
    border: none;
    border-radius: 5px;
    &:hover {
      box-shadow: 0 0 5px ${props => props.theme.color};
      transform: scale(1.1);
    }
    &:active {
      box-shadow: 0 0 5px black inset;
    }
  }
  .
`

const SelectHour = ({practitioners, date, onBooking}) => {
    const getFreeSlots = (currentSlot) => practitioners.map(i =>
        i.freeSlots.includes(currentSlot) && i.utcWorkingDays.includes(date.getDay())
            ? <td key={i.name}>
                <button onClick={() => onBooking(date, currentSlot, i.name)}
                        className={'book'}>
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