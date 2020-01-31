import React, { createContext, useState, useReducer } from "react";

import * as Actions from "./Actions";
import Reducer from "./Reducer";

import useKeyboard from "../Hooks/useKeyboard";

export const EditContext = createContext();

const EditingProvider = props => {
  const [editable, setEditable] = useState(true);

  useKeyboard();

  return (
    <>
      <EditContext.Provider value={{ editable, setEditable }}>
        {props.children}
      </EditContext.Provider>
    </>
  );
};

export default EditingProvider;
