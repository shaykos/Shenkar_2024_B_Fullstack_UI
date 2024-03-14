import React, { useState } from 'react'

export default function NotesForm({ addNote }: any) {
    const [text, setText] = useState('');

    function saveNote(event: any) {
        event.preventDefault();
        addNote(text);
    }

    return (
        <>
            <form data-test="form" onSubmit={saveNote}>
                <input type="text" placeholder='note to add...' value={text}
                    onChange={(event) => setText(event.target.value)} />
                <button type="submit">add note</button>
            </form>
        </>
    )
}
