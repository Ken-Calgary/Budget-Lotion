import {useNavigate} from "react-router-dom";
function NoteSidebar({notes, addNote, sidebarVisibility, currentNote, setCurrentNote, setIndex, getIndex} ) {  
    const changeURL = useNavigate();

    if (sidebarVisibility) {
        if(notes.length !== 0) {
            return (
                <div id = "sidebar">
                    <header id = "sidebar-title">
                        <h3 id = "sidebar-header">Notes</h3>
                        <div id = "add-notes" className="clickable" onClick = {()=>addNote()}><p>+</p></div>
                    </header>
            
                    <div id = "sidebar-body" >
                    {notes.map((note) => (
                        <div key={note.id}  className = {`sidebar-note-desc clickable ${note.id === currentNote && "selected"}`} onClick={()=> {setCurrentNote(note.id); changeURL("/notes/" + note.index); setIndex(getIndex(note.id))}}>
                            <h3>{note.title}</h3>
                            <p className = "sidebar-note-date">
                                {new Date(note.date).toLocaleDateString("default", {
                                month: "long",
                                day: "2-digit",
                                year: "numeric",
                                hour: "numeric",
                                minute: "2-digit"
                            })}</p>
                            <div dangerouslySetInnerHTML = {{__html: note.content.substring(0,30) + "..."}}/>
                        </div>
                    ))}
                    </div>
                        
                </div>
            );
        } else {   
            return (
                <div id = "sidebar">
                    <header id = "sidebar-title">
                        <h3 id = "sidebar-header">Notes</h3>
                        <div id = "add-notes" className="clickable" onClick = {addNote}><p>+</p></div>
                    </header>
                    <div id = "sidebar-body" >
                        <p className = "no-notes">No Note Yet</p>
                    </div>
                </div>
            )
        }
    };
}

export default NoteSidebar;