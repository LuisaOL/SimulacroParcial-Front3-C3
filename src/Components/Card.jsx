import React from 'react'

const Card = ({nombre, medico}) => {

    const date = new Date()
    const dia = date.getDate()
    const mes = date.getMonth()
    console.log(date)

  return (
    <div>
       <h3>{nombre} tienes cita con el {medico}</h3>
       <h3>para el día {dia+7}/{mes+1}</h3>
    </div>
  )
}

export default Card