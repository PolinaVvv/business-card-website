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

import Menu from './/Menu'

export default function MenuDrawer({ btnRef, isDrawerOpen, onDrawerClose }) {
  const textMenu = [
    { text: 'В начало', link: 'start' },
    { text: 'О фотографе', link: 'aboutMe' },
    { text: 'Портфолио', link: 'portfolio' },
    { text: 'Отзывы', link: 'aboutMe' },
    { text: 'Цены', link: 'aboutMe' },
    { text: 'Контакты', link: 'aboutMe' },
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
        <DrawerCloseButton />
        <DrawerHeader>Меню</DrawerHeader>

        <DrawerBody>
          <Stack
            direction={{ base: 'column', lg: 'row' }}
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
