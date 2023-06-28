// This form switches between two modes: in the editing mode, you see the inputs, and in the viewing mode, you only see the result. The button label changes between “Edit” and “Save” depending on the mode you’re in. When you change the inputs, the welcome message at the bottom updates in real time.

// Your task is to reimplement it in React in the sandbox below. For your convenience, the markup was already converted to JSX, but you’ll need to make it show and hide the inputs like the original does.

// Make sure that it updates the text at the bottom, too!

import { useState } from 'react';
export default function EditProfile() {
   const [editMode, setMode] = useState(false);
   const [firstName, setFirst] = useState('Jane');
   const [lastName, setLast] = useState('Jacobs');
   const [modeName, setModeName] = useState('Edit');
  function submitButt(){setMode(!editMode)}
  return (
    <form onSubmit={submitButt}>
      <label>
        First name:{' '}
        <b>{editMode && firstName}</b>
        <input />
      </label>
      <label>
        Last name:{' '}
        <b>{editMode && lastName}</b>
        <input />
      </label>
      <button>
        {!editMode ? 'Edit Profile' : 'Save Profile'}
      </button>
      <p><i>{editMode && "Hello, Jane Jacobs"}</i></p>
    </form>
  );
}