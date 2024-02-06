import { FormEvent, useState } from "react";
import Note from "./components/Note"
import { NoteProps } from "./types/propsTypes";

function App() {
  const [notes, setNotes] = useState<NoteProps[]>([]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [date, setDate] = useState("");

  // let nums = [{ a: 1, b: 2 }, { a: 2, b: 3 }, { a: 3, b: 4 }]
  // console.log('spread --> ', ...nums);
  // console.log('normal --> ', nums);

  function AddNote(event: FormEvent) {
    event.preventDefault();

    //יצירת פתק חדש
    let newNote: NoteProps = {
      title: title,
      text: text,
      date: new Date(date)
    }

    // ... --> spread operator -> פורס את המערך
    setNotes([...notes, newNote]);
  }

  function sortByDate(){
    setNotes([...notes.sort((a,b)=>{
      if(a.date > b.date) return 1;
      if(a.date < b.date) return -1;
      return 0;
    })])
  }

  return (
    <>
      <form onSubmit={AddNote}>
        <fieldset>
          <legend>Note Details</legend>
          <section className="grid">
            <div className="form-input">
              <label htmlFor="title">Title</label>
              <input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                id="title" type="text" placeholder="enter note title..." />
            </div>
            <div className="form-input">
              <label htmlFor="text">Text</label>
              <textarea value={text}
                onChange={(event) => setText(event.target.value)}
                id="text" placeholder="enter note text..." />
            </div>
            <div className="form-input">
              <label htmlFor="date">Due To</label>
              <input value={date}
                onChange={(event) => setDate(event.target.value)}
                id="date" type="date" />
            </div>
          </section>
          <button>Add Note</button>
        </fieldset>
      </form>

      <section>
        <button onClick={()=>sortByDate()}>Sort by Date</button>
        {
          (notes.length > 0) ?
            //notes.map((note, index)=> <Note key={index} {...note}/>)
            notes.map((note, index) => <Note key={index} title={note.title} text={note.text} date={note.date} />)
            :
            <p>Good Job!</p>
        }
      </section>


    </>
  )
}

export default App
