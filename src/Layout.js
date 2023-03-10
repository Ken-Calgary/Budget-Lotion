import React, {useState, useEffect} from "react";
import {v4 as uuidv4} from 'uuid';
import {Outlet, useNavigate, useParams} from "react-router-dom";
import Header from "./Header";
import NoteSidebar from "./NoteSidebar";

function Layout() {
    const [notes, setNotes] = useState(JSON.parse(localStorage.storedNotes));
    const [index, setIndex] = useState(false);
    const [currentNote, setCurrentNote] = useState(false);
    const [numberNote, setNumberNote] = useState(0);
    const [sidebarVisibility, setSidebarVisibility] = useState(true);
    const toggleSidebar = () => {
        setSidebarVisibility(!sidebarVisibility);
    }
    console.log(JSON.parse(localStorage.storedNotes).index);
    const addNote = () => {
      const newNote = {
          id: uuidv4(),
          index: numberNote,
          title: "Untitled",
          content: "",
          date: Date.now(),
      };
      setNumberNote(numberNote + 1);
      setNotes([newNote, ...notes]);
    };
    const getIndex = (note) => {
        for(let i = 0; i < notes.length; i++) {
            if (notes[i].id === note) {
                return i;
            }
        }
    };

    return (
        <>
            <Header toggleSidebar = {toggleSidebar}/>
            <main id = "note-container">
                <NoteSidebar notes = {notes} addNote = {addNote} sidebarVisibility = {sidebarVisibility} currentNote={currentNote} setCurrentNote = {setCurrentNote} setIndex={setIndex} getIndex = {getIndex}/>
                <Outlet context={[notes, setNotes, currentNote, index, setIndex]}/>
            </main>
        </>
    )
}

export default Layout;