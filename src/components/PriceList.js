import { Box, Heading, Text } from '@chakra-ui/react'

export default function Price({ heading, text }) {
  return (
    <Box
      backgroundColor='rgba(202, 200, 185)'
      minH={{ base: '70vh', lg: '70vh' }}
      w={{ lg: '23vw' }}
      px={{ base: '1em', lg: '1em' }}
      align='center'
      color='rgb(48,42,38)'
    >
      <Heading
        fontWeight='500'
        size={{ base: 'lg', lg: 'lg' }}
        mt='0.5em'
        mb='1em'
        minH='11vh'
      >
        {heading}
      </Heading>

      <Text
        fontWeight='500'
        fontSize={{ base: 'lg', lg: 'xl' }}
        minH={{ base: '44vh', lg: '40vh' }}
      >
        {text}
      </Text>
      <Text fontWeight='500' fontSize={{ base: 'lg', lg: 'xl' }}>
        Цена: договорная
      </Text>
    </Box>
  )
}
