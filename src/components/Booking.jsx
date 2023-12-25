import React from 'react'

const Booking = () => {
    return (
        <div id="deals" className='max-w-[1140px] m-auto w-full p-4'>
            <form action="" className='lg:flex lg:justify-between w-full items-center'>
                <div className='flex flex-col my-2 py-2'>
                    <label htmlFor="">Destination</label>
                    <select name="" id="" className='lg:w-[300px] md:w-full border rounded-md p-2'>
                        <option value="">Grande Antiqua</option>
                        <option value="">Key West</option>
                        <option value="">Maldives</option>
                        <option value="">Cozumel</option>
                    </select>
                </div>
                <div className='flex w-full '>
                    <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
                        <label htmlFor="">Check-In</label>
                        <input type="date" />
                    </div>
                    <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
                        <label htmlFor="">Check-Out</label>
                        <input type="date" />
                    </div>
                </div>
                <div className='flex flex-col w-full my-2 p-2'>
                    <label htmlFor="">Search</label>
                    <button>Rates & Availabilities</button>
                </div>
            </form>
        </div>
    )
}

export default Booking