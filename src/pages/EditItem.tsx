import React, { useEffect, useState } from 'react'
import {useParams,useNavigate} from "react-router-dom";
import { editTutorial, fetchTutorial } from '../api/ApiFunctions';
import Button from '../components/Button';
import { IModel } from '../models/Model';

const EditItem = () => {
    const {id} = useParams() as {id: string}
    const navigate = useNavigate();
    const [tutorial, setTutorial] = useState<IModel["tutorial"]>({
      id: 1,
      title: '',
      author: '',
      created_at: ''
    });
    const goBack = () => {
        navigate(-1)
    }

    useEffect(() => {
      const getTutorial = async () => {
          const apiTutorial = await fetchTutorial(parseInt(id))
          setTutorial(apiTutorial);
      }
      getTutorial();
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setTutorial({
          ...tutorial,
          [e.target.name]: e.target.value
      })
    }

    const edit = async () => {
      const edtTutorial: IModel["tutorial"] = {
        ...tutorial,
        title: tutorial.title,
        author: tutorial.author
      }
      await editTutorial(tutorial.id, edtTutorial);
      navigate(-1);
    }

  return (
    <div className='app-margin'>
      <h1>Edytuj: {id}</h1>
      <form>
            <div className='form-control'>
                <label>Tytuł</label>
                <input type="text" name='title' value={tutorial.title} onChange={handleChange}/>
            </div>
            <div className='form-control'>
                <label>Autor</label>
                <input type="text" name='author' value={tutorial.author} onChange={handleChange}/>
            </div>
        </form>
      <Button onClick={edit} text={'Zapisz'} color={'#7bb140'} />
      <Button onClick={goBack} text={'Wróć'} color={'#a80932'} />
    </div>
  )
}

export default EditItem
