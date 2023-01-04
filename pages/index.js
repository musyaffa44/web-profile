import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Musyaffa Profile</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <section className='min-h-screen bg-white px-10'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>musyaffa</h1>
            <ul className='flex items-center'>
              <li className='cursor-pointer'> <BsFillMoonStarsFill /> </li>
              <li><a  className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 ml-8 rounded-md' href="#">Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>Musyaffa Choirun Man</h2>
            <h3 className='text-2xl py-2'>Front End Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti molestiae corporis officia, expedita, inventore illum quibusdam tenetur, consectetur optio eveniet commodi maiores asperiores unde delectus. Similique, officia veritatis rem delectus, aliquid veniam nobis, fugit quis quaerat rerum animi consequuntur eaque.</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillTwitterCircle/>
            <AiFillLinkedin/>
            <AiFillYoutube/>
          </div>
          <div className=''>

          </div>
        </section>
      </main>
    </>
  )
}