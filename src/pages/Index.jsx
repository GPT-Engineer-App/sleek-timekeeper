import { Container, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Index = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Container
      centerContent
      maxW="container.xl"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bg="gray.900"
      color="white"
    >
      <VStack spacing={4}>
        <Text fontSize={{ base: "6xl", md: "9xl" }} fontFamily="monospace">
          {time.toLocaleTimeString('sv-SE', { hour12: false })}
        </Text>
        <Text fontSize={{ base: "md", md: "xl" }}>
          {time.toLocaleDateString('sv-SE', { year: 'numeric', month: '2-digit', day: '2-digit' })}
        </Text>
      </VStack>
    </Container>
  );
};

export default Index;