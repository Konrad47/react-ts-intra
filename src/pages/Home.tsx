import React, { useEffect, useState } from 'react'
import { deleteTutorial, fetchTutorials } from '../api/ApiFunctions'
import Table from '../components/Table'
import { IModel } from '../models/Model'
import Button from '../components/Button'
import {useNavigate} from 'react-router-dom';

const Home = () => {
    const [tutorials, setTutorials] = useState<IModel["tutorials"]>([])
    useEffect(() => {
        const getTutorials = async () => {
            const apiTutorials = await fetchTutorials();
            setTutorials(apiTutorials);
        };
        getTutorials();
    },[tutorials.length])

    const navigate = useNavigate();

    const goToAdd = () => {
        navigate('/add')
    }

    const onDelete = (id: number) => {
        deleteTutorial(id);
        setTutorials(tutorials.filter((tut) => tut.id !== id))
    }

  return (
    <div className="app-margin">
        <h1>Poradniki</h1>
      <Button text='Dodaj' color='#7bb140' onClick={goToAdd}/>
      <Table tutorials={tutorials} onDelete={onDelete}/>
    </div>
  )
}

export default Home
