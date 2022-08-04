import {useState} from "react";
import styled, {ThemeProvider} from "styled-components";
import TreatmentSelection from "../pages/TreatmentSelection";
import SlotSelection from "../pages/SlotSelection";
import Nav from "./Nav";
import GlobalStyle from "../components/GlobalStyle";
import {darkTheme, lightTheme} from "../theme";
import moon from '../res/themeSwitches/moon.png'
import sun from '../res/themeSwitches/sun.png'

//==============================================================================
// STYLING
//==============================================================================
const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  gap: 5rem;
  padding: 3rem;
`

//==============================================================================
// APP CONTAINER
//==============================================================================
function App() {
    const [slotsVisible, setSlotsVisible] = useState(false);
    const [themeData, setThemeData] = useState({
        theme: darkTheme,
        themeSwitcher: sun,
    });
    const [treatment, setTreatment] = useState('');

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
        setTreatment(e.target.value);
    }

    return (
        <ThemeProvider theme={themeData.theme}>
            <GlobalStyle/>
            <Nav themeData={themeData} onSwitchTheme={switchTheme}/>
            <Main>
                <TreatmentSelection onChange={treatmentSelected}/>
                {slotsVisible
                    ? <SlotSelection treatment={treatment}/>
                    : null}
            </Main>
        </ThemeProvider>
    );
}

export default App;
