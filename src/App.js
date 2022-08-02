import {ThemeProvider} from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import {darkTheme, lightTheme} from "./theme";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TreatmentSelection from "./pages/TreatmentSelection";
import {useState} from "react";
import SlotSelection from "./pages/SlotSelection";

function App() {
    const [slotsVisible, setSlotsVisible] = useState(false);

    return (
        <ThemeProvider theme={darkTheme}>
            <GlobalStyle/>
            <TreatmentSelection onChange={() => setSlotsVisible(true)}/>
            {slotsVisible ? <SlotSelection /> : null}
            {/*<BrowserRouter>*/}
            {/*    <Routes>*/}
                    {/*<Route path={'/'} element={<TreatmentSelection/>}/>*/}
                    {/*<p>saaaa</p>*/}
                {/*</Routes>*/}
            {/*</BrowserRouter>*/}
        </ThemeProvider>
    );
}

export default App;
