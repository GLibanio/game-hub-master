import { Badge } from "@chakra-ui/react";

interface GameCriticScoreProps {
  score: number;
}

const GameCriticScore = ({ score }: GameCriticScoreProps) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge colorScheme={color} borderRadius={5} fontSize={"14px"} paddingX={2}>
      {score}
    </Badge>
  );
};

export default GameCriticScore;
