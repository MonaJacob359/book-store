import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-48'>
            {/* left site     */}
            <div className='md:w-1/2 space-y-8 h-full'>
                <h2 className='text-5xl font-bold leading-snug text-black'>Buy and Sell Your Books  <span className='text-teal-700'>
                For the Best Prices
                  </span></h2>
                <p className='md:w-4/5'>A bookseller is someone who deals with the 
                sale of books, whether in a physical
                 bookstore or through online platforms. Their role 
                 extends beyond simply exchanging books for money; they are custodians of knowledge and culture, helping to curate collections of stories, ideas, and information for a wide range of readers. Booksellers may operate independently, within large chains, or in specialty stores .</p>
                    <div>
                        <input type="search" name='search' id='search' placeholder='Search a book'
                        className='py-2 px-2 rounded-s-sm outline-none focus:border-teal-400' />
                        <button className='bg-teal-700 px-6 py-2 text-white font-medium
                        hover:bg-teal-900 active:bg-teal-500 duration-200'>Search</button>
                    </div>
            </div>
            {/* right site    */}
            <div>
              <BannerCard></BannerCard>
            </div>
        </div>
    </div>
    
  )
}

export default Banner