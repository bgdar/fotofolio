import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";

type Theme = "light" | "dark";

interface GlobalState {
  theme: Theme;
  toggletheme: () => void;
  showTerminal: boolean;
  toggleShowTerminal: () => void;
}

const globalState: React.Context<GlobalState | undefined> = createContext<
  GlobalState | undefined
>(undefined);

export const GlobalStateProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [showTerminal, setShowTerminal] = useState<boolean>(false);

  const toggletheme = () => {
    console.log("toggle theme di jalanakn ");
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  const toggleShowTerminal = () => {
    console.info("toggle show terminal di jalankan");
    setShowTerminal(!showTerminal);
  };

  useEffect(() => {
    // if (theme === "light") {
    //   document.documentElement.classList.remove("dark");
    //   document.documentElement.classList.add("light");
    // } else if (theme === "dark") {
    //   document.documentElement.classList.remove("light");
    //   document.documentElement.classList.add("dark");
    // }
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.classList.toggle("light", theme === "light");
  }, [theme]);

  useEffect(() => {
    // handle key untuk toogle terminal
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.shiftKey && event.key.toLocaleLowerCase() === "t") {
        event.preventDefault();
        // toggleShowTerminal();
        setShowTerminal((prev) => !prev);
      }
    };

    // tambahkkan event ke document
    document.addEventListener("keydown", handleKeyDown);
    // bersihkan event listener saat component unmount
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <globalState.Provider
      value={{ theme: theme, showTerminal, toggletheme, toggleShowTerminal }}
    >
      {children}
    </globalState.Provider>
  );
};
// custom Hook
export const useGlobalState = (): GlobalState => {
  const context = useContext(globalState);

  if (context === undefined) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};
