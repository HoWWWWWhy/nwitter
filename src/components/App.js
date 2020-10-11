import React, { useState } from "react";
import AppRouter from "components/Router";
import { firebaseAuth } from "firebase";

const App = () => {
  //console.log(firebaseAuth.currentUser);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return <AppRouter isLoggedIn={isLoggedIn} />;
};

export default App;
