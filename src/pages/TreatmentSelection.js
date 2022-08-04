import styled from "styled-components";
import {treatments} from "../data";
import SectionTitle from "../components/SectionTitle";

//==============================================================================
// STYLING
//==============================================================================
const Grid = styled.div`
  gap: 2rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 3rem 0;
`

const Cell = styled.div`
  width: 280px;
  text-align: center;
  padding: 1rem;
  background: ${props => props.selected ? '#006edc' : null};

  &:hover {
    background: #006edc;
    color: white;
  }
`

const Info = styled.p`
  font-style: italic;
  opacity: 70%;
  text-align: center;
`


//==============================================================================
// TREATMENT SELECTION PAGE
//==============================================================================
/*  By placing the label tags on the outside of the Cell, clicking on the Cell
    will select the button! Also, notice that by passing a selected prop to
    Cell, we can use styled-components to style it.
 */
const TreatmentSelection = ({treatment, onChange}) => {
    const treatmentArray = treatments.map(i => {
        return (
            <label key={i.name} htmlFor={i.name}>
                <Cell selected={i.name === treatment}>
                    <div>
                        {i.name}
                        <input type={'radio'}
                               name={'treatment'}
                               value={i.name}
                               id={i.name}
                               onChange={onChange}
                               style={{appearance: 'none'}}
                        />
                        <Info>{i.description}</Info>
                        <Info>Price: {i.price}€</Info>
                    </div>
                </Cell>
            </label>
        )
    })
    return (
        <div>
            <SectionTitle>1. What treatment are you looking for?</SectionTitle>
            <Grid>
                {treatmentArray}
            </Grid>
        </div>
    )
};

export default TreatmentSelection;

