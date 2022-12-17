import React, { useEffect, useState } from 'react'
import { addTutorial } from '../api/ApiFunctions';
import Button from '../components/Button'
import {useNavigate} from 'react-router-dom';
import { IModel } from '../models/Model';

const AddItem = () => {
    const [input, setInput] = useState({
        title: '',
        author: ''
    })

    const navigate = useNavigate();

    const add = () => {
        const currentDate = new Date().toJSON().slice(0, 10);
        const currentHour = new Date().toLocaleTimeString();
        const tutorial: IModel["tutorial"] = {
            id: Math.floor(Math.random()*100+1),
            title: input.title,
            author: input.author,
            created_at: currentDate + " " + currentHour
        };
        addTutorial(tutorial);
        setInput({
            title:'',
            author: ''
        })
        navigate(-1)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const goBack = () => {
        navigate(-1)
    }

  return (
    <div className='app-margin'>
        <h1>Dodaj</h1>
        <form>
            <div className='form-control'>
                <label>Tytuł</label>
                <input type="text" name='title' value={input.title} onChange={handleChange}/>
            </div>
            <div className='form-control'>
                <label>Autor</label>
                <input type="text" name='author' value={input.author} onChange={handleChange}/>
            </div>
        </form>
            <Button onClick={add} text={'Zapisz'} color={'#7bb140'} />
            <Button onClick={goBack} text={'Wróć'} color={'#a80932'} />
    </div>
  )
}

export default AddItem
