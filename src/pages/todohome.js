import React, {useState} from 'react';
import TodoCard from "../components/TodoCard";
import HomePageWrapper from "../components/layout/HomePageWrapper";
import {IoIosAddCircle} from 'react-icons/io'

let todoList = [{
    id: "10603b96-f31f-4747-a6d1-d5f01bc7cfd9",
    titleInput: "welee",
    descriptionInput: "ereanskkkkkkkkkkkk",
    startDate: "Wed Jun 01 2022 04:03:20",
    attachmentList: [{
        counter: 1,
        uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…MVANf5XaGIsD4dTkE44jfWzYYpygZEv658TdSoAEIJwcpwP/Z',
        fileName: 'rs261_157781379-low.jpg'
    }],
    status: false
}, {
    id: "61cc2421-9139-4f05-afcc-9dccba21b019",
    titleInput: "lllleee",
    descriptionInput: "opwwwreanllkkmmmmmm",
    startDate: "Fri Jun 03 2022 04:03:20",
    attachmentList: [{
        counter: 1,
        uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…MVANf5XaGIsD4dTkE44jfWzYYpygZEv658TdSoAEIJwcpwP/Z',
        fileName: 'rs261_157781379-low.jpg'
    }],
    status: true
}, {
    id: "e7c3eb08-428a-4967-acae-558d9d1efeeb",
    titleInput: "sorry",
    descriptionInput: "friN7reanllkkmmmmmm",
    startDate: "Sat Jun 04 2022 04:03:20",
    attachmentList: [{
        counter: 1,
        uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…MVANf5XaGIsD4dTkE44jfWzYYpygZEv658TdSoAEIJwcpwP/Z',
        fileName: 'rs261_157781379-low.jpg'
    }, {
        counter: 2,
        uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…MVANf5XaGIsD4dTkE44jfWzYYpygZEv658TdSoAEIJwcpwP/Z',
        fileName: 'rrrrrud_dn.jpg'
    }],
    status: false
}]
const TodoHome = () => {
    const [remainingTodoSet, setRemainingTodoSet] = useState(todoList);


    const deleteTodo = (id) => {
        const remainTodo = remainingTodoSet.filter((remain) => {
            if (remain.id !== id){
                return true;
            }
        })
        setRemainingTodoSet(remainTodo);
    }

    return (
        <div>
            <HomePageWrapper>
                <div className={'flex justify-end'}>
                    <IoIosAddCircle className={'w-16 h-16 text-indigo-800 hover:text-indigo-700'}/>
                </div>
                {remainingTodoSet.map((singleTodo) => {
                    return (
                        <div key={singleTodo.id}>
                            <TodoCard title={singleTodo.titleInput} description={singleTodo.descriptionInput}
                                      date={singleTodo.startDate} attachments={singleTodo.attachmentList}
                                      status={singleTodo.status} todoDeleting={deleteTodo} id={singleTodo.id}/>
                        </div>
                    )
                })}
            </HomePageWrapper>
        </div>
    );
};

export default TodoHome;