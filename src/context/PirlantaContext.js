// new
import React, {useState} from 'react';
// new

const PirlantaContext = React.createContext([]);
function PirlantaContextProvider(props) {
  // new
  const [pirlanta, setPirlanta] = useState([]);
  return (
    // new
    <PirlantaContext.Provider value={{pirlanta, setPirlanta}}>
      {props.children}
    </PirlantaContext.Provider>
  );
}
export {PirlantaContext, PirlantaContextProvider};
