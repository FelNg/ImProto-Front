import type { Person } from './Interfaces'

function Title() {
    return (
        <div className='editor' id='title'>
            <p className='editor' id='title'>Add/Edit Data</p>
        </div>
    )
}

function Field({ inFieldId }: {inFieldId: string}) {
    var labelText: string = '[Was not set properly!]';
    var inputType: string = 'text'; // default value to text

    switch(inFieldId as string) {
        case 'id':
            inputType = 'number';
            labelText = 'ID:';
            break;
        case 'lastName':
            inputType = 'text';
            labelText = 'Last Name:';
            break;
        case 'firstName':
            inputType = 'text';
            labelText = 'First Name:';
            break;
        case 'age':
            inputType = 'number';
            labelText = 'Age:';
            break;
        default:
            throw new Error("Invalid field ID!");
    }

        return (
            <div className='editor'>
                <label className='editor' htmlFor={inFieldId}>{labelText}</label>
                <input className='editor' type={inputType} name={inFieldId} />
            </div>
        )
}

function HandleSubmit(event: {
    target: HTMLFormElement; preventDefault: () => void; 
}) {
    //prever page from refreshing
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const dataObj = Object.fromEntries(formData.entries());
    const person: Person = {
        id: dataObj['id'] as unknown as number,
        lastName: dataObj['lastName'] as string,
        firstName: dataObj['firstName'] as string,
        age: dataObj['age'] as unknown as number
    }
    console.log(person);
}

function Buttons() {

    return (
        <div className='editor' id='buttons'>
            <button type="submit">Submit</button>
        </div>
    )
}

export default function DataEditor() {

    return (
        <>
            <form onSubmit={HandleSubmit}>
                <Title />
                <Field inFieldId='id'/>
                <Field inFieldId='lastName'/>
                <Field inFieldId='firstName'/>
                <Field inFieldId='age'/>
                <Buttons />
            </form>
        </>
    )
}