import {practitioners} from "../data";

const SlotSelection = () => {
    const practitionersArray = practitioners.map(i => {
        return (
            <div key={i.name}>
                <label htmlFor={i.name}>Dr. {i.name}</label>
                <input type={'checkbox'} name={'practitioners'} id={i.name} defaultChecked/>
            </div>
        )
    })
    return <>{practitionersArray}</>

}
export default SlotSelection;

