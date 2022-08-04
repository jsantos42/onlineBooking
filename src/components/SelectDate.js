import styled from "styled-components";
import Calendar from "react-calendar";

//==============================================================================
// STYLING
//==============================================================================
const CalendarStyling = styled.div`
  .react-calendar {
    width: 350px;
    max-width: 100%;
    background: ${props => props.theme.background};
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125rem;
  }

  .react-calendar__navigation__arrow {
    color: ${props => props.theme.color};
  }

  .react-calendar__navigation__label {
    color: ${props => props.theme.color};
  }

  .react-calendar--doubleView {
    width: 700px;
  }

  .react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
    margin: -0.5em;
  }

  .react-calendar--doubleView .react-calendar__viewContainer > * {
    width: 50%;
    margin: 0.5rem;
  }

  .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
  }

  .react-calendar button:enabled:hover {
    cursor: pointer;
  }

  .react-calendar__navigation {
    display: flex;
    height: 44px;
    margin-bottom: 1em;
  }

  .react-calendar__navigation button {
    min-width: 44px;
    background: none;
  }

  .react-calendar__navigation button:disabled {
    background-color: #f0f0f0;
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #e6e6e6;
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.75rem;
  }

  .react-calendar__month-view__weekdays__weekday {
    padding: 0.5rem;
  }

  .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: bold;
  }

  .react-calendar__month-view__days__day {
    color: ${props => props.theme.color};
  }

  .react-calendar__month-view__days__day--weekend {
    //color: #d10000;
    color: #757575;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: #757575;
  }

  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 2rem 0.5rem;
  }

  .react-calendar__tile {
    max-width: 100%;
    padding: 0.6rem;
    background: none;
    text-align: center;
    line-height: 1rem;
  }

  .react-calendar__tile:disabled {
    background-color: #f0f0f0;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: ${props => props.theme.color};
    color: ${props => props.theme.background};
  }

  .react-calendar__tile--now {
    background: ${props => props.theme.color};
    color: ${props => props.theme.background};
  }

  //.react-calendar__tile--now:enabled:hover,
  //.react-calendar__tile--now:enabled:focus {
  //  background: #ffffa9;
  //}

  .react-calendar__tile--hasActive {
    background: #76baff;
  }

  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #a9d4ff;
  }

  .react-calendar__tile--active {
    background: #006edc;
    color: white;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #1087ff;
  }

  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #e6e6e6;
  }
`

//==============================================================================
// CALENDAR
//==============================================================================
const SelectDate = ({action, value}) => {
    return (
        <CalendarStyling>
            <Calendar onChange={action}
                      value={value}
            />
        </CalendarStyling>
    )
}

export default SelectDate;