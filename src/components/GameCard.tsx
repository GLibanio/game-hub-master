import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import GameCriticScore from "./GameCriticScore";
import getCroppedImageUrl from "../services/image-url";
import GameCardContainer from "./GameCardContainer";
import Emoji from "./Emoji";
import { BiItalic } from "react-icons/bi";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <GameCardContainer>
      <Card size={45} padding={1}>
        <Image src={getCroppedImageUrl(game.background_image)} borderRadius={5} />
        <CardBody>
          <Heading fontSize={"2x1"} marginBottom={3} marginTop={2}>
            {game.name}
          </Heading>
          <p >
          Lançado em: {game.released}
          </p>
          <HStack justifyContent={"space-between"} >
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)} 
            />
            <GameCriticScore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </GameCardContainer>
  );
};

export default GameCard;
