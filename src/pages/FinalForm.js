import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";

//==============================================================================
// STYLING
//==============================================================================
const FormDiv = styled.div`
  min-width: 250px;
  width: 400px;
`

const Form = styled.form`
  margin: 2rem;
  display: flex;
  //width: 100%;

  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    //width: 100%;
  }

  .col {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .halfGap {
    gap: 0.5rem;
  }

  .gap {
    gap: 1rem;
  }

  .center {
    align-items: center;
  }

  .submitForm {
    padding: 0.5rem 1rem;
    background: #006edc;
    color: white;
    border: none;
    border-radius: 25px;
    font-weight: 800;

    &:hover {
      box-shadow: 0 0 5px ${props => props.theme.color};
    }

    &:active {
      box-shadow: 0 0 5px black inset;
    }
  }
`

//==============================================================================
// FINAL FORM PAGE
//==============================================================================
/*
 Upon submission, the form should output the values  to the console,
 clear the form and show a success page
 */
const FinalForm = ({onSubmit}) => {
    return (
        <FormDiv>
            <SectionTitle>Please fill in the form</SectionTitle>
            <Form onSubmit={onSubmit}>
                <div className={'col gap center'}>
                    <div className={'row'}>
                        <label htmlFor={'Male'}>Male</label>
                        <input type={'radio'} name='sex' value={'Male'} required/>
                        <label htmlFor={'Female'}>Female</label>
                        <input type={'radio'} name='sex' value={'Female'} required/>
                    </div>

                    <div className={'col halfGap'}>
                        <label htmlFor={'firstName'}>First Name:</label>
                        <input type={'text'} id={'firstName'} required/>
                    </div>

                    <div className={'col halfGap'}>
                        <label htmlFor={'familyName'}>Family Name:</label>
                        <input type={'text'} id={'familyName'} required/>
                    </div>

                    <div className={'col halfGap'}>
                        <label htmlFor={'birthday'}>Birthday:</label>
                        <input type={'date'} id={'birthday'} required/>
                    </div>

                    <div className={'col halfGap'}>
                        <label htmlFor={'email'}>Email:</label>
                        <input type={'email'} id={'email'} required/>
                    </div>
                    <input type={'submit'}
                           value={'Submit Booking'}
                           className={'submitForm'}
                    />
                </div>
            </Form>
        </FormDiv>
    )
}

export default FinalForm;
