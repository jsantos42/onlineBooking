const SelectPractitioner = ({practitioners, action}) => {
    const practitionersArray = practitioners.map(i =>
        <div key={i.name}>
            <label htmlFor={i.name}>Dr. {i.name}</label>
            <input type={'checkbox'}
                   name={'practitioners'}
                   id={i.name}
                   onChange={action}
                   defaultChecked/>
        </div>
    )

    return <div>{practitionersArray}</div>
}

export default SelectPractitioner;