import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { CardList } from '../components/card/cardlist'
import { List_Cart } from '../components/card_category/list_cat'
import { Delist } from '../components/delivery/delivelist'
import { Mission } from '../components/mission/mission'
import { SlidesShow } from '../components/slideshow/slideshow'
import { Test } from '../components/test/test'
import { Welcome } from '../components/welome/welcome'


const Home: NextPage = () => {
  return (
    <>
     <Welcome />
    <Mission />
    <Delist />
    <CardList />
    <SlidesShow />
    </>
  )
}

export default Home
