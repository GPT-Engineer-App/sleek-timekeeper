import { Container, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Index = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString('sv-SE', { hour12: false }));
  const [date, setDate] = useState(new Date().toLocaleDateString('sv-SE', { year: 'numeric', month: '2-digit', day: '2-digit' }));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('sv-SE', { hour12: false }));
      setDate(new Date().toLocaleDateString('sv-SE', { year: 'numeric', month: '2-digit', day: '2-digit' }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Container
      centerContent
      maxW="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      padding="0"
      bg="gray.800"
      color="white"
    >
      <VStack spacing={4}>
        <Text fontSize={{ base: "6xl", md: "9xl" }} fontFamily="monospace">
          {time.toLocaleTimeString()}
        </Text>
        <Text fontSize={{ base: "md", md: "xl" }}>
          {date}
        </Text>
      </VStack>
    </Container>
  );
};

export default Index;