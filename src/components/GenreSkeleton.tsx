import { HStack, ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <ListItem>
      <HStack>
        <Skeleton width={"32%"} height={"32px"} />
        <SkeletonText width={"68%"} />
      </HStack>
    </ListItem>
  );
};

export default GenreSkeleton;
