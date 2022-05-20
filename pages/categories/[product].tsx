import { database } from '../../components/card/database';
import { useRouter } from 'next/router'
import { LargeCard } from '../../components/larCard/largecard';
import { Sieve, Filter, Cate } from '../../styles/pr_list';
import { Card } from '../../components/card/card';
import { useState } from 'react';
import { My_link } from '../../styles/user_p';
import Link from "next/link"

const Unique_category= (numberkey: number) => {
  const router = useRouter()
  let par : string;
  const { product } = router.query;

  const [showFilter, setShowFilter ] = useState(true)
  const result = database.filter( word => word.category.includes("Blouse"))
  const rndInt = Math.floor(Math.random() * 6) + 1;
  const image1 = result[rndInt].image_link
  const rndInt2 = Math.floor(Math.random() * 6) + 1;
  const image2 = result[rndInt2].image_link
  console.log( "the result is ", typeof(product))
  return (<div>
hu 
  </div>
  )
}

export default Unique_category
