import React from 'react'
import JsonData from '../../src/json/data.json';
import styles from './JsonDataDisplay.module.css'

function JsonDataDisplay(){
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.Monster}</td>
                    <td>{info.Área}</td>
                    <td>{info.Level}</td>
                    <td>{info.HP}</td>
                    <td>{info.EXP}</td>
                </tr>
            )
        }
    )
  
    return(
        <div>
            <table className={styles.table}>
                <thead>
                    <tr>
                    <th>Monstro</th>
                    <th>Local</th>
                    <th>Nível</th>
                    <th>HP</th>
                    <th>XP</th>

                    </tr>
                </thead>
                <tbody>
                  
                     
                    {DisplayData}
                     
                </tbody>
            </table>
              
        </div>
    )
 }
  
 export default JsonDataDisplay;