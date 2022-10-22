import React from 'react'
import { Link } from 'react-router-dom'

const MainMenu = () => {
    return (
        <div className="flex justify-center items-center bg-[#7945FF] h-[100vh] font-bold">
            <div className="mb-[60px]">
                <div className="flex justify-center mb-[60px]">
                    <img src="/assets/images/logo.svg" alt="Logo" />
                </div>

                <div className="flex flex-col gap-[15px]">
                    <Link to={'/in-game'} className="flex justify-between items-center gap-[10px] bg-[#FFCE67] py-[10px] px-[20px] rounded-[20px] border-[2px] border-[black]">
                        <div className="text-[20px]">PLAY VS PLAYER</div>

                        <img src="/assets/images/player-vs-player.svg" alt="Player vs. Player" />
                    </Link>

                    <Link to={'/rules'} className="flex justify-between items-center gap-[10px] bg-[#FFFFFF] py-[10px] px-[20px] rounded-[20px] border-[2px] border-[black]">
                        <div className="text-[20px]">GAME RULES</div>

                        <img src="/assets/images/player-vs-player.svg" alt="Player vs. Player" class="invisible" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MainMenu