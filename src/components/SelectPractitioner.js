import styled from "styled-components";

const Horizontal = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: center;
`

// Notice how it starts as defaultChecked, since on SlotSelection
// checkablePractitioners starts with 'checked = true'
const SelectPractitioner = ({action, practitioners}) => {
    const practitionersArray = practitioners.map(i =>
        <div key={i.name}>
            <label htmlFor={i.name}>Dr. {i.name}</label>
            <input type={'checkbox'}
                   name={'practitioners'}
                   id={i.name}
                   onChange={action}
                   defaultChecked
                   />
        </div>
    )

    return <Horizontal>{practitionersArray}</Horizontal>
}

export default SelectPractitioner;