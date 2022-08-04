import styled from "styled-components";

const FormDiv = styled.div`
  display: block;
  //flex-direction: column;
`

/*
 Upon submission, the form should output the values  to the console,
 clear the form and show a success page
 */
const FinalForm = () => {
    return (
        <FormDiv>
            <form>
                <fieldset>
                    <legend>Form</legend>
                    <div>

                    <label htmlFor={'sex'}>sex</label>
                    <input type={'radio'} id={'sex'} required/>
                    <input type={'radio'} id={'sex'} required/>
                    <label htmlFor={'firstName'}>firstName</label>
                    <input type={'text'} id={'firstName'} required/>
                    <label htmlFor={'familyName'}>familyName</label>
                    <input type={'text'} id={'familyName'} required/>
                    <label htmlFor={'birthday'}>birthday</label>
                    <input type={'date'} id={'birthday'} required/>
                    <label htmlFor={'email'}>email</label>
                    <input type={'email'} id={'email'} required/>
                        </div>
                </fieldset>
            </form>
        </FormDiv>
    )
}

export default FinalForm;
