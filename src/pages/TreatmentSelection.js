import {treatments} from "../data";
import styled from "styled-components";

//==============================================================================
// STYLING
//==============================================================================
const Grid = styled.div`
  gap: 2rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Cell = styled.div`
  width: 280px;
  text-align: center;
  padding: 1rem;

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
const TreatmentSelection = ({onChange}) => {
    // By placing the label tags on the outside of the Cell, clicking on the
    //Cell will select the button!
    const treatmentArray = treatments.map(i => {
        return (
            <label key={i.name} htmlFor={i.name}>
                <Cell>
                    <div>
                        {i.name}
                        <input type={'radio'}
                               name={'treatment'}
                               value={i.name}
                               id={i.name}
                               onChange={onChange}/>
                        <Info>{i.description}</Info>
                        <Info>Price: {i.price}€</Info>
                    </div>
                </Cell>
            </label>
        )
    })
    return (<Grid>
            {treatmentArray}
        </Grid>
    )
};

export default TreatmentSelection;

