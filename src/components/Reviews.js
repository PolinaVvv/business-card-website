import { Button, Box, Stack } from '@chakra-ui/react'
import { useState } from 'react'

export default function TextSlider() {
  const words = [
    {
      id: 0,
      value:
        'Даня берёт свою камеру и тут понеслось: что видит – то и фотографирует, ловит момент. Также подсказывает какую позу можно принять, куда посмотреть, как встать. Дружеская, приятная атмосфера и крутой результат – в этом вся суть!',
      name: 'Евгений',
    },
    {
      id: 1,
      value:
        'Обычно мне делают 1000 фотографий, и потом я полдня выбираю «ту самую». А Даня сделает мне пару снимков, и они получаются потрясающими… Не знаю, что это – мастерство или магия, но мне очень нравится!) Обожаю совмещать прогулки с фотосессией!',
      name: 'Полина',
    },
    {
      id: 2,
      value:
        '3 Бла бла бла классный фотки, фотограф огонь и всё такое. Бла бла бла классный фотки, фотограф огонь и всё такое. Бла бла бла классный фотки, фотограф огонь и всё такое.',
      name: 'Кирилл',
    },
  ]
  const [wordData, setWordData] = useState(words[0].value)
  const handleClick = (index) => {
    const wordSlider = words[index].value
    setWordData(wordSlider)
  }
  return (
    <Stack
      px={{ base: '0.5em' }} // заполнение встроенного начала + заполнение встроенного конца
      align='center'
      minH={{ base: '75vh', lg: '50vh' }}
      maxW='70vw'
      direction={{ base: 'column', lg: 'row' }}
      spacing={{ base: '1em', lg: '2em' }} // интервал между к-либо элементами
    >
      {/* <Spacer /> */}
      <Stack
        direction={{ base: 'row', lg: 'column' }}
        spacing={{ base: '1em', lg: '3em' }} // интервал между к-либо элементами
      >
        {words.map((data, i) => (
          <Button
            variant='outline'
            color='white'
            fontWeight='500'
            fontSize={{ base: 'xs', lg: 'xl' }}
            size={{ base: 'xs', lg: 'lg' }}
            colorScheme='orange' // цвет при тыке
            _hover={{ bg: 'rgba(202, 200, 185, 0.5)' }}
            borderRadius='0em'
            borderColor='rgb(202 200 185)'
            border='0.17em solid'
            width={{ lg: '190px' }}
            key={i}
            onClick={() => handleClick(i)}
          >
            {words[i].name}
          </Button>
        ))}
      </Stack>
      <Box
        color='white'
        fontWeight='500'
        fontSize={{ base: 'md', lg: '3xl' }}
        textAlign={{ lg: 'start' }}
      >
        {wordData}
      </Box>
    </Stack>
  )
}
