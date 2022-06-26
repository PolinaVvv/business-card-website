import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  Stack,
} from '@chakra-ui/react'

import Menu from './/Menu2'

// const idMenu = document.getElementById('iconMenu')

// function magic() {
//   if (window.innerWidth > 991) {
//     if (window.pageYOffset > 75) {
//       idMenu.style.opacity = '1'
//     } else {
//       idMenu.style.opacity = '0'
//     }
//   } else idMenu.style.opacity = '1'
// }

// window.onscroll = magic

export default function MenuDrawer({ btnRef, isDrawerOpen, onDrawerClose }) {
  const textMenu = [
    { text: 'В начало', link: 'start' },
    { text: 'О фотографе', link: 'aboutMe' },
    { text: 'Портфолио', link: 'portfolio' },
    { text: 'Отзывы', link: 'reviews' },
    { text: 'Прайс', link: 'price' },
    { text: 'Контакты', link: 'contacts' },
  ]
  return (
    // положение ящика
    <Drawer
      isOpen={isDrawerOpen}
      placement='right'
      onClose={onDrawerClose}
      finalFocusRef={btnRef} //возврящаем фокус
    >
      <DrawerOverlay />
      <DrawerContent bg='rgba(202, 200, 185, 0.9)'>
        <DrawerCloseButton mt='0.5em' />
        <DrawerHeader>Меню</DrawerHeader>

        <DrawerBody>
          <Stack
            direction='column'
            fontWeight='300'
            spacing={{ base: '0.1em', lg: '0em' }}
            fontSize={{ base: 'xl', lg: '2xl' }}
          >
            {textMenu.map((e) => (
              <Menu link={e.link} key={e} text={e.text} />
            ))}
          </Stack>
        </DrawerBody>

        {/* Нижний колонтитул */}
        <DrawerFooter>
          <Button
            variant='outline'
            colorScheme='rgb(48 42 38)'
            mr={3}
            color='rgb(48 42 38)'
            onClick={onDrawerClose}
          >
            Закрыть меню
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
