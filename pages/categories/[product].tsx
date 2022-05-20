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
      <My_link>
        <Link href="/">Home </Link>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>
 <Link href="/products_list">Clothes</Link> 
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>
 <Link href="#" className='mai'>{product}</Link>
    </My_link>
  </div>
  )
}

export default Unique_category
