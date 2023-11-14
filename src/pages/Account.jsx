import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
        <div className='w-full text-white'>
            <img className='w-full h-[400px] object-cover'
                alt="/" 
                src="https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/c85624c9-f1ce-47c1-ac83-88788d38be0a/US-en-20231106-popsignuptwoweeks-perspective_alpha_website_medium.jpg"></img>
            <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'>
            <div className='absolute top-[20%] p-4 md:p-8'>
                <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
            </div>
            </div>
        </div>
        <SavedShows/>
    </>

  )
}

export default Account