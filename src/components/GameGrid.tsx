import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "../App";

interface GameGridProps {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: GameGridProps) => {
  const { error, data, isLoading } = useGames(gameQuery);

  {
    if (error) return <Text color={"tomato"}>{error}</Text>;
  }

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding={"10px"}
      spacing={7}
    >
      {isLoading &&
        Array(10)
          .fill(1)
          .map((_number, key) => <GameCardSkeleton key={key} />)}
      {data.map((game) => (
        <Box key={game.id}>
          <GameCard key={game.id} game={game} />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
