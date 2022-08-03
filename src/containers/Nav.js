import styled from "styled-components";
import ThemeSwitcher from "../components/ThemeSwitcher";

//==============================================================================
// STYLING
//==============================================================================
const StyledNav = styled.nav`
  background: ${props => props.theme.background};
  position: sticky;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 1;
  border-bottom: 1px solid ${props => props.theme.color};
`


//==============================================================================
// NAVBAR COMPONENT
//==============================================================================
const Nav = ({themeData, onSwitchTheme}) => {
    return (
        <StyledNav>
            <ThemeSwitcher src={themeData.themeSwitcher} onClick={onSwitchTheme}/>
        </StyledNav>
    );
}

export default Nav;