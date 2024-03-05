import "../styles/globals.css";
import { WalletConnectProvider } from "../components/WalletConnectProvider";
import "../styles/globals.css";
import Navbar from "../components/Navbar/Navbar";
import "@solana/wallet-adapter-react-ui/styles.css";
import "../components/Dice/styles.scss";
import { UserDataProvider } from '../hooks/handleData'
import Footer from "../components/Footer/Footer";

function MyApp({ Component, pageProps }) {

  return (
    <WalletConnectProvider>
      <UserDataProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer/>
      </UserDataProvider>
    </WalletConnectProvider>
  );
}

export default MyApp;
