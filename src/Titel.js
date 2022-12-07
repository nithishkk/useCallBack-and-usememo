import React from 'react';

const Titel = () => {
  console.log('Title is Rendering');
  return (
    <div>
      <h1>Title is appere here </h1>
    </div>
  );
};
// export default Titel;
export default React.memo(Titel);