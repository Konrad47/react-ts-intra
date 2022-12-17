import React, { MouseEventHandler } from 'react'
import { IModel as Props } from '../models/Model'
import { BsEye } from 'react-icons/bs'
import { BsPen } from 'react-icons/bs'
import { BsTrash } from 'react-icons/bs'
import { Link } from "react-router-dom";

interface IModel {
    tutorials: Props["tutorials"],
    onDelete(id: number): MouseEventHandler<HTMLButtonElement> | void
}

const Table: React.FC<IModel> = ({tutorials, onDelete}) => {
    const renderBody = (): JSX.Element[] => {
        return tutorials.map((tut, index) => {
            return (
                <tr key={index}>
                    <td>{tut.id}</td>
                    <td>{tut.title}</td>
                    <td>{tut.author}</td>
                    <td>{tut.created_at}</td>
                    <td>
                    <Link to={`/${tut.id}`} className='details-icon'><BsEye/></Link>
                    <Link to={`/edit/${tut.id}`} className='details-icon'><BsPen /></Link>
                    <BsTrash onClick={() => onDelete(tut.id)} className='details-icon'/>
                    </td>
                </tr>
            )
        })
    }

  return (
    <table>
      <thead>
        <tr>
        <th>Id</th>
        <th>Tytuł</th>
        <th>Autor</th>
        <th>Data utworzenia</th>
        <th className='icons'>
        </th>
        </tr>
      </thead>
      <tbody>
        {renderBody()}
      </tbody>
    </table>
  )
}

export default Table
