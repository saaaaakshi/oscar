import { useState, createContext } from "react";

const SharingContext = createContext();

function SharingProvider({ children }) {
  const [show, setShow] = useState(true);
  const [dark, setDark] = useState(true);
  const [themeNo, setTheme] = useState(1);

  return (
    <SharingContext.Provider
      value={{ show, setShow, dark, setDark, themeNo, setTheme }}
    >
      {children}
    </SharingContext.Provider>
  );
}

export { SharingProvider };
export default SharingContext;
