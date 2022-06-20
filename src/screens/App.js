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
} from '@chakra-ui/react'
import { Carousel } from 'react-carousel-minimal'
// import { Link, animateScroll as scroll } from 'react-scroll'

// Fonts
import '@fontsource/montserrat/400.css'
import Menu from '../components/Menu'

// Imgs
import legsAndFire from '../assets/imgs/legs_and_fire2.jpg'
import danya from '../assets/imgs/danya2.png'
// import girl from '../assets/imgs/girl2.png'
// import church3 from '../assets/imgs/church3.jpg'
import polina from '../assets/imgs/polina.png'
// import mayakovskaya from '../assets/imgs/mayakovskaya.jpg'
import kiryaCamera from '../assets/imgs/kirya_camera.jpg'
import dron from '../assets/imgs/dron.jpg'
// import sos from '../assets/imgs/sos.jpg'
import retro from '../assets/imgs/retro.jpg'
import kiryaSmoke from '../assets/imgs/kirya_smoke.jpg'
import saypink from '../assets/imgs/saypink.jpg'
import church1 from '../assets/imgs/church1.jpg'
import church2 from '../assets/imgs/church2.jpg'
import dust from '../assets/imgs/dust.jpg'
// import elka from '../assets/imgs/elka.jpg'
import kiryaSits from '../assets/imgs/kirya_sits.jpg'
// import kiryaStands from '../assets/imgs/kirya_stands.jpg'
import kirya from '../assets/imgs/kirya.jpg'
// import metroChb from '../assets/imgs/metro_chb.jpg'
// import trainCoolColors from '../assets/imgs/train_cool_colors.jpg'
import vasim from '../assets/imgs/vasim.jpg'

function App() {
  const textMenu = [
    { text: 'О фотографе', link: 'aboutMe' },
    { text: 'Портфолио', link: 'portfolio' },
    { text: 'Отзывы', link: 'aboutMe' },
    { text: 'Цены', link: 'aboutMe' },
    { text: 'Контакты', link: 'aboutMe' },
  ]
  const data = [
    { image: polina },
    { image: dust },
    { image: dron },
    { image: church2 },
    { image: vasim },
    { image: church1 },
    { image: retro },
    { image: kiryaCamera },
    { image: kiryaSmoke },
    { image: saypink },
    { image: kiryaSits },
    { image: kirya },
    // { image: sos },
    // { image: church3 },
    // { image: elka },
    // { image: kiryaStands },
    // { image: metroChb },
    // { image: trainCoolColors },
    // { image: mayakovskaya },
    // { image: sos, caption: 'надпись',},
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
  return (
    <div
      style={{
        backgroundColor: 'rgba(202, 200, 185, 1)',
      }}
    >
      <Flex
        direction='column' // расставляет в столбец эл флекса
        minH='100vh' // устанавливает минимальную высоту элемента
        maxW='100vw' // Устанавливает ширину содержимого элемента
        px={{ base: '1em', lg: '5em' }} // заполнение встроенного начала + заполнение встроенного конца
        backgroundImage={legsAndFire}
        backgroundRepeat='no-repeat'
        backgroundSize='cover'
        backgroundPosition={{ base: '27% ', lg: 'top' }}
      >
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          flex='1'
          color='rgba(202, 200, 185, 1)'
          pt={{ lg: '3.1em' }} // обивка Верх
          spacing={{ base: '2em', lg: '2em' }} // интервал между к-либо элементами
          justifyContent={{ base: 'normal', lg: 'space-between' }} //определяет, как браузер распределяет пространство между и вокруг элементов контента вдоль главной оси flex контейнера, или вдоль строчной оси grid контейнера
        >
          <Heading
            marginTop={{ base: '1em', lg: '0.1em' }} // поля сверху
            fontWeight='800'
            size='2xl'
            textAlign={{ base: 'center' }} // как линейное содержимое, наподобие текста, выравнивается в блоке его родительского элемента
          >
            @naitiphoto
          </Heading>
          <Stack
            direction={{ base: 'column', lg: 'row' }}
            fontWeight='300'
            spacing={{ base: '0.1em', lg: '3.4em' }}
            fontSize={{ base: 'xl', lg: '2xl' }}
          >
            {textMenu.map((e) => (
              <Menu link={e.link} key={e} text={e.text} />
            ))}
            {/* <a href='#aboutMe'>
              О фотографе
            </a> */}
          </Stack>
        </Stack>
        <Stack
          marginY={{ base: '1em', lg: '6em' }} // поле сверху + поле снизу
          alignItems={{ lg: 'start' }} // выровнять элементы
          direction={{ base: 'column-reverse', lg: 'row' }}
          spacing={{ base: '1em', lg: '0.5em' }} // интервал между к-либо элементами
          flex='1'
        >
          <Center flex='1' marginTop={{ lg: '4em' }} paddingLeft={{ lg: 'em' }}>
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
            В поисках фотографии <br /> я нахожу нечто более прекрасное, чем{' '}
            <br />
            просто мир
          </Heading>
        </Stack>
        <Spacer />
      </Flex>
      <Flex
        id='aboutMe'
        // backgroundColor='rgba(202, 200, 185, 1)'
        px={{ base: '1em', lg: '5em' }} // заполнение встроенного начала + заполнение встроенного конца
        direction='column' // расставляет в столбец эл флекса
        minH='100vh'
        maxW='100vw'
        pb='3em'
      >
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          flex='1'
          pt={{ lg: '2em' }} // обивка Верх
          spacing={{ base: '0.5em', lg: '1em' }} // интервал между к-либо элементами
          align='end' // как элементы располагаются вдоль поперечной оси на текущей строке
        >
          <Heading
            marginTop={{ base: '1em', lg: '0.1em' }} // поля сверху
            fontWeight='700'
            size='2xl'
            textAlign='center' // как линейное содержимое, наподобие текста, выравнивается в блоке его родительского элемента
            color='rgba(0, 0, 0, 1)'
            flex='2'
            pr={{ base: '1.7em', lg: '0em' }}
            paddingBottom={{ lg: '0.5em' }}
          >
            Обо мне
          </Heading>
          <Spacer />

          <Text
            color='rgba(0, 0, 0, 1)'
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
            // mb={{ lg: '1em' }}
            flex='4'
          >
            <Image src={danya} />
          </Box>
          <Stack
            direction={{ base: 'column', lg: 'column' }}
            spacing={{ base: '1em', lg: '1.2em' }} // интервал между к-либо элементами
            color='rgba(48, 42, 38, 1)'
            fontSize={{ base: 'xs', lg: 'xl' }}
            fontWeight='500'
            flex='5'
          >
            <Text mt={{ lg: '3em' }}>
              Профессионально занимаюсь фотографией более 3-х лет.
            </Text>
            <Text>
              <u>Индивидуальный подход </u>к каждому - это не только отличные
              фотографии, но и полученные от встречи эмоции!
            </Text>
            <Text as='u' textAlign='left' pl={{ base: '6em', lg: '15em' }}>
              За что я люблю фотографии?{' '}
            </Text>
            <Text
            // pb={{ base: '2em' }}
            >
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
        minH='100vh' // устанавливает минимальную высоту элемента
        maxW='100vw' // Устанавливает ширину содержимого элемента
        px={{ base: '1em', lg: '5em' }} // заполнение встроенного начала + заполнение встроенного конца
        backgroundColor='rgb(48,42,38)'
        align='center'
      >
        <Heading
          paddingLeft='0.5em'
          // marginTop={{ base: '8em', lg: '12.9em' }} // поля сверху
          fontWeight='700'
          size={{ base: 'xl', lg: '4xl' }}
          // textAlign='top' // как линейное содержимое, наподобие текста, выравнивается в блоке его родительского элемента
          color='rgba(202, 200, 185, 1)'
          mr={{ lg: '1em' }}
        >
          Моё портфолио
        </Heading>
        <Box
          // paddingX='2em'
          // align='center'
          outline='thick double rgba(202, 200, 185, 1);' /* Чёрная рамка */
          // border='1px' /* Белая рамка */
        >
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
        </Box>
      </Stack>
    </div>
  )
}

export default App
