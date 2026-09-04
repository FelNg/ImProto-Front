import type { Person } from './Interfaces'

export default function DataEditor() {

    return (
        <>
            <form>
                <div className='editor' id='title'>
                    <p className='editor' id='title'>Add/Edit Data</p>
                </div>
                <div className='editor'>
                    <label className='editor' htmlFor='entryId'>ID</label>
                    <input className='editor' name='entryId' />
                </div>
                <div className='editor'>
                    <label className='editor' htmlFor='entryLastName'>Last Name</label>
                    <input className='editor' name='entryLastName' />
                </div>
                <div className='editor'>
                    <label className='editor' htmlFor='entryFirstName'>First Name</label>
                    <input className='editor' name='entryFirstName' />
                </div>
                <div className='editor'>
                    <label className='editor' htmlFor='entryAge'>Age</label>
                    <input className='editor' name='entryAge' />
                </div>
                <div className='editor' id='buttons'>
                    <button>Refresh Table</button>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    )
}