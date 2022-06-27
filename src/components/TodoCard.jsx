import React, {useState} from 'react';
import {FcTodoList} from 'react-icons/fc'
import {Switch} from '@headlessui/react'

const TodoCard = ({title, description, date, attachments, status, todoDeleting, id}) => {
    const [enabled, setEnabled] = useState(status)

    return (
        <>
            <div className={'my-10 px-3 py-2.5 bg-gray-100 shadow-md rounded-md'}>
                <div className={'grid grid-cols-5 gap-2 justify-center items-center'}>
                    <FcTodoList className={'col-span-1 w-14 h-14'}/>
                    <h1 className={'col-span-3 mx-auto text-4xl lg:text-5xl font-bold text-red-600'}>{title}</h1>
                    <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className={`${
                            enabled ? 'bg-blue-600' : 'bg-gray-200'
                        } relative inline-flex col-span-1 ml-auto h-8 w-14 items-center rounded-full`}
                    >
                        <span className="sr-only">Enable notifications</span>
                        <span
                            className={`${
                                enabled ? 'translate-x-7' : 'translate-x-1'
                            } inline-block h-6 w-6 transform rounded-full bg-white`}
                        />
                    </Switch>
                </div>
                <div className={'py-8 px-10'}>
                    <p className={'text-sm text-justify font-semibold leading-relaxed content-center italic'}>{description}</p>
                </div>
                <div className={'grid grid-cols-4 lg:grid-cols-6 gap-3'}>
                    <div className={'col-span-2 lg:col-span-4 flex flex-row gap-2 lg:gap-4 items-center pl-6'}>
                        <p className={'text-base lg:text-lg font-semibold'}>Date & Time:</p>
                        <div className={'text-sm text-gray-500 font-semibold'}>{date}</div>
                    </div>
                    <button
                        className={'col-span-1 text-white font-semibold px-2 py-1.5 bg-amber-500 hover:bg-amber-400 rounded-sm hover:rounded-lg shadow-sm'}>Edit
                    </button>
                    <button
                        onClick={() => {
                            todoDeleting(id)
                        }}
                        className={'col-span-1 text-white font-semibold px-2 py-1.5 bg-red-700 hover:bg-red-600 rounded-sm hover:rounded-lg shadow-sm'}>Delete
                    </button>
                </div>
            </div>
        </>
    );
};

export default TodoCard;