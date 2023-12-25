import React from 'react'

const Contact = () => {
    return (
        <div id='contact' className='max-w-[1140px] m-auto w-full p-4'>
            <h2 className='text-center text-gray-700'>Send us a message</h2>
            <p className='text-center text-gray-700 py-2'>We're standing by!</p>
            <div className='grid md:grid-cols-2 w-full gap-4'>
                <img
                    src='https://images.unsplash.com/photo-1538964173425-93884d739596?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80'
                    alt='/'
                    className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]'
                />
                <form action="" >
                    <div className='grid grid-cols-2' >
                        <input type="text" placeholder='First' className='p-2 border m-2' />
                        <input type="text" placeholder='Last' className='p-2 border m-2' />
                        <input type="email" placeholder='Email' className='p-2 border m-2' />
                        <input type="tel" placeholder='Phone' className='p-2 border m-2' />
                        <input type="text" placeholder='Address' className='col-span-2 p-2 border m-2' />
                        <textarea placeholder='Type your message here' name="" id="" cols="30" rows="10" className='col-span-2 m-2 p-2 border'></textarea>
                        <button className='col-span-2 m-2 p-2'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact