import ReactQuill from 'react-quill';
import {useRef, useEffect} from 'react';
import {useOutletContext, useNavigate, useParams} from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';

function EditNote() {
    const [notes, setNotes, currentNote, index, setIndex] = useOutletContext();
    const {number} = useParams();
    const changeURL = useNavigate();
    const findCurrentNote = notes.find(note => note.id === currentNote);
    const noteTitle = useRef();
    const noteDate = useRef();
    const noteContent = useRef();
    let formattingDate = new Date(notes[index].date);
    let formattedDate = formattingDate.toISOString().slice(0,16);

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
            setNotes(notes.filter((note) => note.id !== currentNote));
            changeURL("/");
        }
    }

    const saveNote = () => {
        let curIndex = getIndex();

        notes[curIndex].title = noteTitle.current.value;
        notes[curIndex].date = noteDate.current.value;
        notes[curIndex].content = noteContent.current.value;
        localStorage.setItem("storedNotes", JSON.stringify(notes))
    }

    return (
        <div className = "notes">
            <div className = "note-info">
                <div className = "note-info-inner">
                    <textarea rows = "1" type = "text" id = "note-title-edit" defaultValue = {notes[index].title} ref = {noteTitle}></textarea>
                    <input type = "datetime-local" id = "note-date-edit" defaultValue = {formattedDate} ref = {noteDate}></input>
                </div>
                <div className = "note-buttons">
                    <div className = "note-save clickable" onClick={()=> {changeURL("/notes/" + number); saveNote()}}>Save</div>
                    <div className = "note-delete clickable" onClick ={()=>deleteNote()}>Delete</div>
                </div>
            </div>
            <div className = "note-contents">
                <ReactQuill
                    value = {notes[index].content}
                    placeholder= "Start Typing Here..."
                    ref = {noteContent}
                    modules = {{
                        clipboard: {
                            matchVisual: false
                        }
                    }}
                />
            </div>
        </div>
    );
}

export default EditNote;