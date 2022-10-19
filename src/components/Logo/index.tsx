import { Box, Text, BoxProps } from "@chakra-ui/react"

interface logoProps extends BoxProps {
  title: string;
}

export default function Logo({ title, ...rest}: logoProps) {
  return (
    <Box {...rest}>
      <Text fontSize="lg" fontWeight="bold">
        {title}
      </Text>
    </Box>
  )
}
