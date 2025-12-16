import React from 'react'
import './StylesExample.css'
import styles from './StylesExample.module.css'

const StylesExamples = () => {

  //inline
  const inlineStyle={
    color:"blue",
    fontSize:"20px",
  }

  return (
    <div>
      <h2 style={inlineStyle}>Estilos inline</h2>

      {/**Arquivos de Estilos*/}
      <p className='text'>Meu css</p>

      {/**Css Module */}
      <p className={styles.textPurple}>Meu CSS modules</p>
    </div>
      )
}

export default StylesExamples