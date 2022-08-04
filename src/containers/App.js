import {useEffect, useState} from "react";
import styled, {ThemeProvider} from "styled-components";
import TreatmentSelection from "../pages/TreatmentSelection";
import SlotSelection from "../pages/SlotSelection";
import Nav from "./Nav";
import GlobalStyle from "../components/GlobalStyle";
import {darkTheme, lightTheme} from "../theme";
import moon from '../res/themeSwitches/moon.png'
import sun from '../res/themeSwitches/sun.png'
import FinalForm from "../pages/FinalForm";

//==============================================================================
// STYLING
//==============================================================================
const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  padding: 3rem;
`

const SucessMessage = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  color: green;
`

const Booking = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  gap: 5rem;
`

//==============================================================================
// APP CONTAINER
//==============================================================================
function App() {
    const [slotsVisible, setSlotsVisible] = useState(false);
    const [formVisible, setFormVisible] = useState(false);
    const [themeData, setThemeData] = useState({
        theme: darkTheme,
        themeSwitcher: sun,
    });
    const [treatment, setTreatment] = useState('');
    const [slot, setSlot] = useState({});
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => window.scroll(0, 0), [submitted]);

    const switchTheme = () => {
        if (themeData.theme.name === 'light')
            setThemeData({
                theme: darkTheme,
                themeSwitcher: sun,
            });
        else
            setThemeData({
                theme: lightTheme,
                themeSwitcher: moon,
            });
    }

    const treatmentSelected = (e) => {
        if (!slotsVisible)
            setSlotsVisible(true);
        setTreatment(e.target.id);
    }

    const slotSelected = (date, hour, doctor) => {
        if (!formVisible)
            setFormVisible(true);
        setSlot({
            date: date,
            time: hour,
            practitioner: doctor,
        });
    }

    const onSubmit = (e) => {
        const bookingInfo = {
            firstName: e.target.firstName.value,
            familyName: e.target.familyName.value,
            birthday: e.target.birthday.value,
            sex: e.target.sex.value,
            email: e.target.email.value,
            date: slot.date,
            time: slot.time,
            practitioner: slot.practitioner,
            treatment: treatment,
        }
        console.log(bookingInfo);
        e.preventDefault();
        setSubmitted(true);
    }

    return (
        <ThemeProvider theme={themeData.theme}>
            <GlobalStyle/>
            <Nav themeData={themeData} onSwitchTheme={switchTheme}/>
            {submitted
                ? <SucessMessage>
                    <h2>Your booking was successful!</h2>
                    <h3>You'll receive a confirmation e-mail.</h3>
                </SucessMessage>
                : <Main>
                    <TreatmentSelection treatment={treatment} onChange={treatmentSelected}/>
                    <Booking>
                        {slotsVisible
                            ? <SlotSelection treatment={treatment} onBooking={slotSelected}/>
                            : null}
                        {formVisible
                            ? <FinalForm onSubmit={onSubmit}/>
                            : null}
                    </Booking>
                </Main>
            }
        </ThemeProvider>
    );
}

export default App;
