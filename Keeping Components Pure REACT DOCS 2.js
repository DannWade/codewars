// Two Profile components are rendered side by side with different data. Press “Collapse” on the first profile, and then “Expand” it. You’ll notice that both profiles now show the same person. This is a bug.

// Find the cause of the bug and fix it.

import Panel from './Panel.js';
import { getImageUrl } from './utils.js';

export default function Profile({ person }) {
 let currentPerson = person;
  return (
    <Panel>
      <Header currentPerson = {currentPerson}/>
      <Avatar currentPerson = {currentPerson} />
    </Panel>
  )
}

function Header({currentPerson}) {
  return <h1>{currentPerson.name}</h1>;
}

function Avatar({currentPerson}) {
  return (
    <img
      className="avatar"
      src={getImageUrl(currentPerson)}
      alt={currentPerson.name}
      width={50}
      height={50}
    />
  );
}