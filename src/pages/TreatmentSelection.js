import {treatments} from "../data";

const TreatmentSelection = ({onChange}) => {
    const treatmentArray = treatments.map(i => {
        return (
            <div key={i.name}>
                <label htmlFor={i.name}>{i.name}</label>
                <input type={'radio'}
                       name={'treatment'}
                       value={i.name}
                       id={i.name}
                       onChange={onChange}/>
            </div>
        )
    })
    return (<>
            {treatmentArray}
        </>
    )

};

export default TreatmentSelection;

