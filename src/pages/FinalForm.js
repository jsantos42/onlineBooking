import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";

//==============================================================================
// STYLING
//==============================================================================
const FormDiv = styled.div`
  min-width: 280px;
  width: 500px;
`

const Form = styled.form`
  margin: 2rem;
  display: flex;
  //width: 100%;

  fieldset {
    border: none;
    width: 100%;
  }

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
            <SectionTitle>3. Fill in the form to finish your booking</SectionTitle>
            <Form onSubmit={onSubmit}>

                    <div className={'col gap'}>
                        <div className={'row'}>
                            <label htmlFor={'Male'}>Male</label>
                            <input type={'radio'} name='sex' id={'Male'} required/>
                            <label htmlFor={'Female'}>Female</label>
                            <input type={'radio'} name='sex' id={'Female'} required/>
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
                               value={'Submit booking'}
                               className={'submitForm'}
                        />
                    </div>
            </Form>
        </FormDiv>
    )
}

export default FinalForm;
