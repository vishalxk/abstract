import { Fragment } from "react";
import Navigation from "./Navigation";
import Search from "./Search";
import Information from "./Information";
import Footer from "./Footer";
import GlobalStyles from "./GlobalStyles";

export default function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Navigation />
      <Search />
      <Information />
      <Footer />
    </Fragment>
  );
}
