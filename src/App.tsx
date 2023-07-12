import "./App.css";
import Terminal from "./components/terminal";

const getYear = () => {
  return new Date().getFullYear();
};

const welcomeMessage = "Welcome to my site.\n"+
"Type 'menu' to view a list of available commands.\n";

  const bannerCondensed =`
  ██████╗ ██████╗ ██╗   ██╗ █████╗ ███╗   ██╗    ███╗   ███╗ █████╗ ██████╗ ████████╗██╗███╗   ██╗███████╗███████╗
  ██╔══██╗██╔══██╗╚██╗ ██╔╝██╔══██╗████╗  ██║    ████╗ ████║██╔══██╗██╔══██╗╚══██╔══╝██║████╗  ██║██╔════╝╚══███╔╝
  ██████╔╝██████╔╝ ╚████╔╝ ███████║██╔██╗ ██║    ██╔████╔██║███████║██████╔╝   ██║   ██║██╔██╗ ██║█████╗    ███╔╝ 
  ██╔══██╗██╔══██╗  ╚██╔╝  ██╔══██║██║╚██╗██║    ██║╚██╔╝██║██╔══██║██╔══██╗   ██║   ██║██║╚██╗██║██╔══╝   ███╔╝  
  ██████╔╝██║  ██║   ██║   ██║  ██║██║ ╚████║    ██║ ╚═╝ ██║██║  ██║██║  ██║   ██║   ██║██║ ╚████║███████╗███████╗
  ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝    ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝╚═╝  ╚═══╝╚══════╝╚══════╝
  `
  getYear();

const prompt = "visitante@terminal~$:";

function App() {
  return (
    <Terminal
      welcomeMessage={welcomeMessage}
      banner={bannerCondensed}
      terminalPrompt={prompt}
    />
  );
}

export default App;