import { Box, Skeleton } from "@chakra-ui/react";

const PlatformSelectorSkeleton = () => {
  return (
    <Box>
      <Skeleton width={"180px"} height={"40px"} borderRadius={10} />
    </Box>
  );
};

export default PlatformSelectorSkeleton;
