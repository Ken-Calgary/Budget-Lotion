import ReactQuill from "react-quill";
import {useOutletContext, useNavigate, useParams} from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';

function SelectedNote() {
    const [notes, setNotes, currentNote, index, setIndex] = useOutletContext();
    const changeURL = useNavigate();
    const {number} = useParams();
    const findCurrentNote = notes.find(note => note.id === currentNote);

    const getIndex = () => {
        for(let i = 0; i < notes.length; i++) {
            if (notes[i].id === currentNote) {
                return i;
            }
        }
    };
    
    const deleteNote = () => {
        let answer = window.confirm("Are you sure?");

        if (answer) {
            let index = getIndex();
            console.log(currentNote)
            setNotes(notes.filter((note) => note.id !== currentNote));
            changeURL("/");
        }
    }
    return (
        <div className = "notes">
            <div className = "note-info">
                <div className = "note-info-inner">
                    <h3 className = "note-title">{findCurrentNote.title}</h3>
                    <p className = "note-date">
                        {new Date(findCurrentNote.date).toLocaleDateString("default", {
                                month: "long",
                                day: "2-digit",
                                year: "numeric",
                                hour: "numeric",
                                minute: "2-digit"
                            })}
                    </p>
                </div>
                <div className = "note-buttons">
                    <div className = "note-save clickable" onClick={() => {changeURL("/notes/" + number + "/edit"); setIndex(getIndex()) }}>Edit</div>
                    <div className = "note-delete clickable" onClick={() => {deleteNote()}}>Delete</div>
                </div>
            </div>
            <div className = "contents">
                <ReactQuill
                    readOnly = {true}
                    value = {findCurrentNote.content}
                    modules = {{
                        toolbar: false 
                    }}
                />
            </div>
        </div>
    );
}

export default SelectedNote;