import React, {useEffect, useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AddTodoWrapper from "../components/layout/AddTodoWrapper";
import Resizer from "react-image-file-resizer";
import {v4 as uuidv4} from 'uuid';

const AddTodo = () => {
    const [titleInput, setTitleInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [attachmentList, setAttachmentList] = useState([]);

    const [counter, setCounter] = useState(1);


    useEffect(() => {
        console.log(attachmentList);
    }, [attachmentList])

    return (
        <AddTodoWrapper>
            <h1 className={'text-4xl font-bold text-red-500 text-center'}>Add Todo</h1>
            <div className={'py-6 grid grid-cols-1 lg:grid-cols-3'}>
                <div className={'lg:col-start-2 lg:col-end-3 grid grid-rows-8 gap-6'}>
                    <div className={'row-span-1 grid grid-cols-3 lg:grid-cols-4 gap-2 items-center'}>
                        <label htmlFor="title" className={'col-span-1 font-semibold'}>Title</label>
                        <input onChange={(e) => {
                            setTitleInput(e.target.value)
                        }} type="text" value={titleInput}
                               className={'col-span-2 lg:col-span-3 text-sm rounded-md shadow-sm'} required={true}/>
                    </div>
                    <div className={'row-span-2 grid grid-cols-3 lg:grid-cols-4 gap-2 items-center'}>
                        <label htmlFor="description" className={'col-span-1 font-semibold'}>Description</label>
                        <textarea onChange={(e) => {
                            setDescriptionInput(e.target.value)
                        }} value={descriptionInput} maxLength={240}
                                  className={'col-span-2 lg:col-span-3 text-sm rounded-md shadow-sm'}
                                  required={true}></textarea>
                    </div>
                    <div className={'row-span-1 grid grid-cols-3 lg:grid-cols-4 gap-2 items-center'}>
                        <label htmlFor="date" className={'col-span-1 font-semibold'}>Date</label>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}
                                    className={'text-sm row-span-1 rounded-md shadow-sm'} required={true}/>
                    </div>
                    <div className={'row-span-1 grid grid-cols-3 lg:grid-cols-4 gap-2 items-center'}>
                        <label htmlFor="attachments" className={'col-span-1 font-semibold'}>Attachment(s)</label>
                        <input type="file" className={'col-span-2 lg:col-span-3'} onChange={(event) => {
                            let file = event.target.files[0];
                            let fileName = file.name;

                            return new Promise((resolve, reject) => {
                                Resizer.imageFileResizer(
                                    file,
                                    1200,
                                    1200,
                                    "jpeg",
                                    100,
                                    0,
                                    uri => {
                                        let formData = new FormData();
                                        formData.append("file", uri);

                                        setAttachmentList((prev) => {
                                            return (
                                                [...prev, {counter, uri, fileName}]
                                            )
                                        })

                                        setCounter(counter + 1)
                                    })
                            })
                        }}
                        />
                        <div>
                            {attachmentList.map((singleAttachment) => {
                                return (
                                    <div key={singleAttachment.counter}>
                                        {singleAttachment.fileName}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <button
                        onClick={() => {
                            //document
                            if (titleInput.length === 0 || descriptionInput.length === 0) {
                                return;
                            }
                            let id = uuidv4();
                            let status = false;

                            console.log({
                                id,
                                titleInput,
                                descriptionInput,
                                startDate,
                                attachmentList,
                                status,
                            });
                        }}
                        className={'my-5 px-2 py-1.5 text-white font-semibold bg-indigo-600 hover:bg-indigo-500 rounded-lg'}>Save
                    </button>
                </div>
            </div>
        </AddTodoWrapper>
    );
};

export default AddTodo;