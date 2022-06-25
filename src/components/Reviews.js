import { Button, Box, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'

export default function TextSlider() {
  const words = [
    {
      id: 0,
      value:
        'Даня берёт свою камеру и тут понеслось: что видит – то и фотографирует, ловит момент. Также подсказывает какую позу можно принять, куда посмотреть, как встать. Дружеская, приятная атмосфера и крутой результат – в этом вся суть!',
    },
    {
      id: 1,
      value:
        'Обычно мне делают 1000 фотографий, и потом я полдня выбираю «ту самую». А Даня сделает мне пару снимков, и они получаются потрясающими… Не знаю, что это – мастерство или магия, но мне очень нравится!) Обожаю совмещать прогулки с фотосессией!',
    },
    {
      id: 2,
      value:
        '3 Бла бла бла классный фотки, фотограф огонь и всё такое. Бла бла бла классный фотки, фотограф огонь и всё такое. Бла бла бла классный фотки, фотограф огонь и всё такое.',
    },
  ]
  const [wordData, setWordData] = useState(words[0].value)
  const handleClick = (index) => {
    const wordSlider = words[index].value
    setWordData(wordSlider)
  }
  return (
    <Stack
      align='center'
      minH='40vh'
      maxW='60vw'
      direction={{ base: 'column', lg: 'row' }}
    >
      <Stack direction={{ base: 'row', lg: 'column' }}>
        {words.map((data, i) => (
          <Button key={i} onClick={() => handleClick(i)}>
            {i + 1}
          </Button>
        ))}
      </Stack>

      <Box
        color='rgb(15,12,11)'
        fontWeight='500'
        fontSize={{ base: 'xl', lg: '2xl' }}
      >
        {wordData}
      </Box>
    </Stack>
  )
}
