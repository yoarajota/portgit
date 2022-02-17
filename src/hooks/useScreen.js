import { createContext, useContext, useEffect, useState } from "react";
import Default from "../components/body/default";

const ScreenContext = createContext({});

export function ScreenProvider({ children }) {
    const [screen, setScreen] = useState(<Default />);

    return (
        <ScreenContext.Provider value={{ screen, setScreen }}>
            {children}
        </ScreenContext.Provider>
    );
}

export function useScreen() {
    const context = useContext(ScreenContext);

    return context;
}