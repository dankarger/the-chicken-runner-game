import React, {useEffect, useRef, useState} from "react";
import './DropDownMenu.css'
import {Link} from "react-router-dom";
import {useSpring, animated, config} from "react-spring";
import Button from "../Button/Button";



const DropDownMenu = ({ list, callback, isOpenAnimation,callbackEdit })=>{
    const[isAnimation,setIAnimation]=useState(true)
    // const[chosenPlayer, setChosenPlayer ]=useState({})
    const[isEditPlayer, setIsEditPlayer] = useState(false)
    const editWindow= useRef()
    const fade = useSpring({
        from:{x:-300,scale:0,opacity:0},
        to:{x:20, scale:1,opacity:1},
        config:{duration:500,config:config.slow}
    })

    useEffect(()=>{
        setIAnimation(isOpenAnimation)
    },[list,isOpenAnimation])

    const handleEditPlayer=(player)=>{
        // setChosenPlayer(player)
        setIsEditPlayer(true);
        // if(isEditPlayer){
        //     editWindow.current.scrollIntoView({behavior: "smooth", inline: "center"})
        // }


        console.log(player)
    }

    const showList=()=>{
       return list.map(player=>{
           return (
               <>
                <div key={player.id+ Date.now()+Math.random()} className={isAnimation?'player-link show':'hide'}>
                    <Link to='/game'>
                   <div onClick={()=>{
                            // setChosenPlayer(player)
                            callback(player)}
                   }
                        className='drop-down-player' >
                           <div className='drop-down-item'>
                                   <img className='thumbnail' src={player.avatar} alt="thumbnail"/>
                                   <p> {player.name} </p>
                                   <p>{player.score}</p>
                           </div>
                   </div>
                </Link>
                    <Button name='Edit' callback={()=>callbackEdit(player)} />
            </div>
               </>
           )
       })
    }
    return(
        (
            <div>

            <animated.div style={fade} className='drop-down-menu' >
              <div className='drop-heading'>
                  <p>Characters ({list.length})</p>       <p>Score:</p>
              </div>
                { showList() }
            </animated.div>
            </div>
        )
    )
}

export default DropDownMenu