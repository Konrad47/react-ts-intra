import React, {useState, useEffect} from 'react';
import {useParams,useNavigate} from "react-router-dom";
import { fetchTutorial } from '../api/ApiFunctions';
import { IModel } from '../models/Model';
import Button from '../components/Button';
const SingleItem = () => {
    const {id} = useParams() as {id: string }
    const navigate = useNavigate();
    const [tutorial, setTutorial] = useState<IModel["tutorial"]>();

    useEffect(() => {
        const getTutorial = async () => {
                const apiTutorial = await fetchTutorial(parseInt(id));
                setTutorial(apiTutorial);
        }
        getTutorial();
    }, [id])

    const goBack = () => {
      navigate(-1)
    }

  return (
    <div className='app-margin'>
      <h1>{tutorial?.title}</h1>
      <h2>Autor: {tutorial?.author}</h2>
      <h2>Data utworzenia: {tutorial?.created_at}</h2>
      <Button onClick={goBack} text={'Wróć'} color={'#a80932'} />
    </div>
  )
}

export default SingleItem
