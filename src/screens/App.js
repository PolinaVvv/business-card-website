import {
  Button,
  Flex,
  Spacer,
  Heading,
  Stack,
  Center,
  Text,
  Image,
  Box,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react'
import { Carousel } from 'react-carousel-minimal'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useRef } from 'react'

// Componet
import MenuDrawer from '../components/MenuDrawer'
import Menu from '../components/Menu2'
import TextSlider from '../components/Reviews'

// Fonts
import '@fontsource/montserrat/400.css'

// Imgs
import legsAndFire from '../assets/imgs/legs_and_fire2.jpg'
import danya from '../assets/imgs/danya2.png'
import girl from '../assets/imgs/girl2.jpg'
import polina from '../assets/imgs/polina.png'
import kiryaCamera from '../assets/imgs/kirya_camera.jpg'
import dron from '../assets/imgs/dron.jpg'
import retro from '../assets/imgs/retro.jpg'
import kiryaSmoke from '../assets/imgs/kirya_smoke.jpg'
import saypink from '../assets/imgs/saypink.jpg'
import church1 from '../assets/imgs/church1.jpg'
import church2 from '../assets/imgs/church2.jpg'
import dust from '../assets/imgs/dust.jpg'
import kiryaSits from '../assets/imgs/kirya_sits.jpg'
import vasim from '../assets/imgs/vasim.jpg'
import polina2 from '../assets/imgs/bulochka_sidit_ustavshaya_pod_pledikom.jpg'
import kirya from '../assets/imgs/kirya.jpg'

function App() {
  const textMenu = [
    { text: 'О фотографе', link: 'aboutMe' },
    { text: 'Портфолио', link: 'portfolio' },
    { text: 'Отзывы', link: 'reviews' },
    { text: 'Цены', link: 'aboutMe' },
    { text: 'Контакты', link: 'aboutMe' },
  ]
  const data = [
    { image: kiryaSmoke },
    { image: retro },
    { image: kiryaCamera },
    { image: saypink },
    { image: kiryaSits },
    { image: dust },
    { image: polina },
    { image: church2 },
    { image: dron },
    { image: church1 },
    { image: polina2 },
    { image: vasim },
    { image: girl },
  ]
  // const captionStyle = {
  //   fontSize: '2em',
  //   fontWeight: '200',
  // }
  const slideNumberStyle = {
    fontSize: '1.5em',
    fontWeight: '200',
    color: 'rgba(202, 200, 185, 1)',
  }
  // получаем с помощью onOpen, onClose статус компонента и с помощью isOpen (bool) переводим в открытое или закрытое состояние
  const { isOpen, onOpen, onClose } = useDisclosure()
  // позволяет сохранить некоторый объект, который можно можно изменять и который хранится в течение всей жизни компонента
  const btnRef = useRef()

  return (
    <div
      style={{
        backgroundColor: 'rgba(202, 200, 185, 1)',
      }}
    >
      <Flex
        id='start'
        direction='column' // расставляет в столбец эл флекса
        minH='100vh' // устанавливает минимальную высоту элемента
        maxW='100vw' // Устанавливает ширину содержимого элемента
        px={{ base: '1em', lg: '5em' }} // заполнение встроенного начала + заполнение встроенного конца
        backgroundImage={legsAndFire}
        backgroundRepeat='no-repeat'
        backgroundSize='cover'
        backgroundPosition={{ base: '27% ', lg: 'top' }}
      >
        {/* <IconButton
          as='a'
          display={{ base: 'none', lg: 'flex' }}
          position='fixed'
          bottom={{ base: '0', lg: '3' }}
          right={{ base: '0', lg: '3' }}
          variant='ghost'
          icon={
            <TriangleUpIcon
              boxSize={{ base: '1.5em', lg: '2em' }}
              color='rgb(82 58 55)'
            />
          }
          size='lg'
          href='#start'
        /> */}
        <MenuDrawer isDrawerOpen={isOpen} onDrawerClose={onClose} />
        <IconButton
          id='iconMenu'
          position='fixed'
          top={{ base: '5', lg: '666' }}
          right={{ base: '1.5', lg: '2' }}
          variant='ghost'
          icon={
            <HamburgerIcon
              boxSize={{ base: '1.5em', lg: '2em' }}
              color='white'
            />
          }
          size='lg'
          ref={btnRef}
          onClick={onOpen}
        />
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          flex='1'
          color='rgba(202, 200, 185, 1)'
          pt={{ lg: '3.1em' }} // обивка Верх
          spacing={{ base: '2em', lg: '2em' }} // интервал между к-либо элементами
          justifyContent={{ base: 'normal', lg: 'space-between' }} //определяет, как браузер распределяет пространство между и вокруг элементов контента вдоль главной оси flex контейнера, или вдоль строчной оси grid контейнера
        >
          <Stack
            direction='row'
            spacing='1em' // интервал между к-либо элементами
            marginTop={{ base: '1.5em', lg: '0.1em' }} // поля сверху
            align={{ base: 'center', lg: 'normal' }}
          >
            <Heading
              as='a'
              target='_blank'
              href='https://instagram.com/naitiphoto?igshid=YmMyMTA2M2Y='
              fontWeight='500'
              size={{ base: 'xl', lg: '2xl' }}
              textAlign={{ base: 'left' }} // как линейное содержимое, наподобие текста, выравнивается в блоке его родительского элемента
            >
              @naitiphoto
            </Heading>
            <Spacer />
          </Stack>
          <Stack
            direction='row'
            fontWeight='300'
            spacing='0em'
            fontSize='2xl'
            display={{ base: 'none', lg: 'contents' }}
          >
            {textMenu.map((e) => (
              <Menu link={e.link} key={e} text={e.text} />
            ))}
          </Stack>
        </Stack>
        <Stack
          marginY={{ base: '1em', lg: '6em' }} // поле сверху + поле снизу
          alignItems={{ lg: 'start' }} // выровнять элементы
          direction={{ base: 'column-reverse', lg: 'row' }}
          spacing={{ base: '1em', lg: '0.5em' }} // интервал между к-либо элементами
          flex='1'
        >
          <Center flex='1' marginTop={{ lg: '4em' }}>
            <Button
              colorScheme='orange' // цвет при тыке
              variant='outline'
              borderColor='rgba(143, 91, 55, 1)'
              _hover={{ bg: 'rgba(143 91 55 / 30%)' }}
              size='lg'
              borderRadius='0em'
              border='0.17em solid'
              color='rgba(202, 200, 185, 1)'
              fontWeight='500'
              fontSize='1.3em'
              width='210px'
              height='70px'
            >
              Записаться <br />
              на съёмку
            </Button>
          </Center>
          <Spacer />
          <Heading
            flex='2'
            color='rgba(202, 200, 185, 1)'
            fontWeight='800'
            textAlign='start'
            lineHeight='1.2' // величина пространства между строками
            size='2xl'
          >
            В поисках фотографии <br /> я нахожу нечто более прекрасное, чем
            <br />
            просто мир
          </Heading>
        </Stack>
        <Spacer />
      </Flex>
      <Flex
        id='aboutMe'
        px={{ base: '1em', lg: '5em' }} // заполнение встроенного начала + заполнение встроенного конца
        direction='column' // расставляет в столбец эл флекса
        minH='100vh'
        maxW='100vw'
        pb='3em'
        style={{
          background:
            'linear-gradient(rgba(202, 200, 185, 1)70%, rgb(48,42,38) )',
        }}
      >
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          flex='1'
          pt={{ lg: '2em' }} // обивка Верх
          spacing={{ base: '0.5em', lg: '1em' }} // интервал между к-либо элементами
          align='end' // как элементы располагаются вдоль поперечной оси на текущей строке
          color='rgb(48 42 38)'
        >
          <Heading
            marginTop={{ base: '1em', lg: '0.1em' }} // поля сверху
            fontWeight='700'
            size='2xl'
            textAlign='center' // как линейное содержимое, наподобие текста, выравнивается в блоке его родительского элемента
            flex='2'
            pr={{ base: '1.7em', lg: '0em' }}
            paddingBottom={{ lg: '0.5em' }}
          >
            Обо мне
          </Heading>
          <Spacer />

          <Text
            fontSize={{ base: 'xl', lg: '3xl' }}
            fontWeight='700'
            flex='4'
            paddingTop={{ base: '0em', lg: '0.1em' }}
          >
            Hello World! Меня зовут Даня, и я фотограф.
          </Text>
        </Stack>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          spacing={{ base: '1em', lg: '1em' }} // интервал между к-либо элементами
          align='start' // как элементы располагаются вдоль поперечной оси на текущей строке
        >
          <Box
            boxSize={{ base: 'xxs', lg: 'xl' }}
            mt={{ base: '1em', lg: '1em' }}
            flex='4'
          >
            <Image src={danya} />
          </Box>
          <Stack
            direction={{ base: 'column', lg: 'column' }}
            spacing={{ base: '1em', lg: '1.2em' }} // интервал между к-либо элементами
            fontSize={{ base: 'md', lg: 'xl' }}
            fontWeight='500'
            flex='5'
            color='rgb(48 42 38)'
          >
            <Text mt={{ lg: '3em' }}>
              Профессионально занимаюсь фотографией более 3-х лет.
            </Text>
            <Text>
              <u>Индивидуальный подход </u>к каждому - это не только отличные
              фотографии, но и полученные от встречи эмоции!
            </Text>

            <Text as='u' textAlign='left' pl={{ base: '2em', lg: '15em' }}>
              За что я люблю фотографии?{' '}
            </Text>
            <Text pb={{ base: '4em' }}>
              Фотография - это раскрытие своего творческого потенциала, душевных
              переживаний и эмоций в конкретный момент времени. Также она
              является зеркалом, отражающим всё то, что бережно хранится в
              человеке.
            </Text>
          </Stack>
        </Stack>
      </Flex>

      <Stack
        direction={{ base: 'column', lg: 'row' }}
        id='portfolio'
        minH={{ lg: '100vh' }} // устанавливает минимальную высоту элемента
        maxW='100vw' // Устанавливает ширину содержимого элемента
        px={{ base: '1em', lg: '5em' }} // заполнение встроенного начала + заполнение встроенного конца
        backgroundColor='rgb(48,42,38)'
        align='center'
      >
        <Heading
          fontWeight='700'
          size={{ base: 'xl', lg: '4xl' }}
          color='rgba(202, 200, 185, 1)'
          mr={{ lg: '1em' }}
        >
          Моё портфолио
        </Heading>
        <Carousel
          data={data}
          time={20000}
          width='600px'
          height='600px'
          // captionStyle={captionStyle}
          // radius='10px'
          slideNumber={true}
          slideNumberStyle={slideNumberStyle}
          // captionPosition='bottom'
          automatic={true}
          dots={true} // индикаторы внизу картинок (точки)
          pauseIconColor='white'
          pauseIconSize='40px'
          slideBackgroundColor='rgba(202, 200, 185, 1)'
          slideImageFit='cover' //Устанавливает «подгонку объекта» изображения слайдов,доступные варианты «cover» и «contain»
          // thumbnails={true} //Включает индикаторы эскизов
          // thumbnailWidth='100px' //Ширина миниатюры, по умолчанию 100 пикселей.
          style={{
            textAlign: 'center',
            maxWidth: '90vw',
            maxHeight: '5000px',
            margin: '40px auto',
          }}
        ></Carousel>
      </Stack>
      <Flex
        id='reviews'
        minH='100vh' // устанавливает минимальную высоту элемента
        maxW='100vw' // Устанавливает ширину содержимого элемента
        px={{ base: '1em', lg: '5em' }} // заполнение встроенного начала + заполнение встроенного конца
        backgroundImage={kirya}
        backgroundRepeat='no-repeat'
        backgroundSize='cover'
        backgroundPosition={{ base: '45% ', lg: 'center' }}
        alignItems='center'
        justifyContent='center'
      >
        <Box
          backgroundColor='rgba(202, 200, 185, 0.5)'
          minH='75vh'
          minW='75vw'
          align='center'
        >
          <Heading
            fontWeight='600'
            size={{ base: 'xl', lg: '4xl' }}
            color='white'
            mt='0.3em'
            mb={{ base: '0.5em', lg: '0.2em' }}
          >
            Отзывы
          </Heading>
          <TextSlider />
        </Box>
      </Flex>
    </div>
  )
}

export default App
