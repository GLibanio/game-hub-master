import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}



const genres = {
  action: "Ação",
  indie: "Indie",
  adventure: "Aventura",
  RPG: "RPG",
  strategy: "Estratégia",
  shooter: "Tiro",
  casual: "Casual",
  simulation: "Simulação",
  puzzle: "Puzzle",
  arcade: "Arcade",
  platformer: "Plataforma",
  racing: "Corrida",
  massivelymultiplayer : "Multiplayer",
  sports: "Esportes",
  fighting: "Luta",
  family: "Familia",
  boardgames: "Jogo de Tabuleiro",
  educational: "Educacional",
  card: "Carta"
};


const GenreList = ({ onSelectGenre, selectedGenre }: GenreListProps) => {
  const { data, isLoading, error } = useGenres();
  console.log("Dados carregados:", data);

  if (error) return null;

  return (
    <>
      <Heading marginBottom={3} fontSize={"2xl"}>
        Gênero
      </Heading>
      <List>
        {isLoading &&
          Array(20)
            .fill(1)
            .map((_n, e) => <GenreSkeleton key={e} />)}
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                objectFit={"cover"}
                src={getCroppedImageUrl(genre.image_background)}
              ></Image>
              <Button
                variant={"link"}
                onClick={() => onSelectGenre(genre)}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                whiteSpace={"normal"}
                textAlign={"left"}
              >
                {genres[genre.name.toLowerCase().replace(/\s+/g, "")] || genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
