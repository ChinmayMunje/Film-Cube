import React, { useState } from 'react'

const SwitchTab = ({ data, onTabChange }) => {

    const [selectTab, setSelectTab] = useState(0);
    const [left, setLeft] = useState(0);

    const activeTab = (tab, index) => {
        setLeft(index * 100);
        setTimeout(() => {
            setSelectTab(index)
        }, 300);
        onTabChange(tab, index);
    }
    return (
        <div>
            <div>

                        {/* // <span className='bg-green-500 rounded-lg p-1' key={index} onClick={() => activeTab(tab, index)}>{tab}</span> */}
                <div className='rounded-full bg-white shadow-md'>
                    {data.map((tab, index) => {
                        return (
                                <span className='text-gray-800'>{tab}</span>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SwitchTab