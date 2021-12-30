import React, {useEffect, useState} from "react";
import MapPage from "../../pages/MapPage/MapPage";
import Room from "../../pages/Room/Room";
import './GameLogic.css'
import {EnemyData, RoomsData} from "../../Data/Data";

const GameLogic = ({player})=> {
   const[isMap,setIsMap]=useState(true);
    const[currentRoomData,setCurrentRoomData]=useState(RoomsData['room1'])
    const[currentPlayer,setCurrentPlayer] = useState(player)
    const[currentEnemy,setCurrentEnemy] = useState( EnemyData['deer'])
    // const[enemy,setEnemy] = useState()

    const currentEnemyVariable = currentRoomData.enemy

   const handleMapButton=(room)=>{
        console.log(room)
       setCurrentRoomData(room);
        setIsMap(!setIsMap);
    }
    useEffect(()=>{
        console.log('efx')
        setCurrentRoomData(RoomsData['room1'])
        setCurrentPlayer(player)
        setCurrentEnemy(currentEnemyVariable)
        return ()=>{
            console.log('p-gamelogic',player)
        }
    },[currentRoomData,currentPlayer,currentPlayer,currentEnemyVariable,player])

    return (
        <div>
            <div className={ isMap ? 'show' : 'hide' }>
                <MapPage currentRoom={currentRoomData} callback={handleMapButton} />
            </div>
            <div className={ !isMap ? 'show' : 'hide' }>
                <Room enemy={currentEnemy} player={currentPlayer} roomData={currentRoomData}/>
            </div>

        </div>
    )
}
export default GameLogic