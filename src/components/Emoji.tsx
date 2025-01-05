import bullsEye from "../assets/images/bulls-eye.webp";
import thumbsUp from "../assets/images/thumbs-up.webp";
import meh from "../assets/images/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface EmojiProps {
  rating: number;
}

const Emoji = ({ rating }: EmojiProps) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "Meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "Recommended", boxSize: "25px" },
    5: { src: bullsEye, alt: "Exception", boxSize: "30px" },
  };

  return <Image {...emojiMap[rating]} marginBottom={2} />;
};

export default Emoji;
