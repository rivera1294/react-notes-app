import React, { useContext } from 'react';
import Note from './Note';
import NotesContext from '../context';

export default function NoteList() {
  const { state } = useContext(NotesContext);

  return (
    <div className='notes-container'>
      {state.notes.map((note, i) => {
        return <Note note={note} key={i} />;
      })}
    </div>
  );
}
