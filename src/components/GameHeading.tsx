import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  }  ${gameQuery.searchText || ""}`;
  return (
    <Heading paddingBottom={5} as={"h1"} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
