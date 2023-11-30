import { useState } from "react"
import {
  Box,
  Button,
  Text,
} from '@chakra-ui/react';

function App() {

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <Box
        maxW="600px"
        mx="auto"
        mt="20"
        p="6"
        bg="white"
        rounded="md"
        boxShadow="lg"
        textAlign="center"
      >
        <Text fontSize="2xl" mb="4">
          Contador: {count}
        </Text>
        <Button onClick={handleIncrement} mb={{ base: 2, md: 0 }} mr={{ base: 0, md: 2 }}>
          Incrementar
        </Button>
        <Button
          onClick={handleDecrement}
          mb={{ base: 2, md: 0 }}
          isDisabled={count === 0} >
          Decrementar
        </Button>
      </Box>
    </>
  )
}

export default App
