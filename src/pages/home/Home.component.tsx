import * as React from "react";
import Directory from "../../components/directory/Directory.component";
import HomeContainer from "./Home.styles";

interface Props {}

const Home: React.FunctionComponent<Props> = () => {
  return (
    <HomeContainer>
      <Directory />
    </HomeContainer>
  );
};

export default Home;
