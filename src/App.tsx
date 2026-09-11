import DataEditor from './components/DataEditor.tsx'
import DataTable from './components/DataTable.tsx'
import './components/style.css'


export default function App() {
    return (
        <>
            <div className='Title'>
                <h1>ImProto</h1>
            </div>
            <div className="InputContainer">
                <DataEditor />
            </div>
            <div className="TableContainer">
                <DataTable />
            </div>
        </>
    );
}