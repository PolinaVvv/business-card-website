import { Button, Container } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

export default function Ex() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = count
  }, [count])
  return (
    <Container>
      {count}
      <Button
        // w={['20px', '600px']}
        w={{ base: '20px', lg: '400px' }}
        onClick={() => {
          setCount((oldCount) => oldCount + 1)
        }}
      >
        Кнопка
      </Button>
      <button style={{ background: 'black' }}> te</button>
    </Container>
  )
}
