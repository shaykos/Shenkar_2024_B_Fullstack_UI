import React, { useState } from 'react';
import { note } from '../types/noteTypes';
import NoteDetails from '../components/NoteDetails';
import NotesForm from '../components/NotesForm';

export default function Notes() {
    const [notes, setNotes] = useState<note[]>([])

    function addNotes(text: note) {
        setNotes([...notes, text]);
    }

    if (notes.length == 0)
        return (
            <>
                <h1>Empty notes!</h1>
                <NotesForm addNote={addNotes} />
            </>
        )

    return (
        <>
            <h1>All Notes({notes.length})</h1>
            <NotesForm addNote={addNotes} />
            <div>
                {
                    notes.map((note) => <NoteDetails text={note.text} />)
                }
            </div>
        </>
    )
}
