import React from "react";
import { Link } from "react-router-dom";

const Rules = () => {
    return (
        <div className="flex justify-center items-center bg-[#7945FF] h-[100vh] p-[20px]">
            <div className="bg-[#FFFFFF] border-[black] border-[2px] rounded-[40px] p-[20px] w-[100%] flex flex-col gap-[20px]">
                <div className="text-center"><h1 className="text-[56px] font-bold">RULES</h1></div>

                <div>
                    <div className="text-[#7945FF] font-bold mb-[5px]">OBJECTIVE</div>

                    <div className="text-[16px]">Be the first player to connect 4 of the same colored discs in a row (either vertically, horizontally, or diagonally).</div>
                </div>

                <div>
                    <div className="text-[#7945FF] font-bold mb-[5px]">HOW TO PLAY</div>

                    <div className="flex flex-col gap-[5px]">
                        <div class="flex gap-[15px]">
                            <div className="font-bold">1</div>
                            <div>Red goes first in the first game.</div>
                        </div>

                        <div class="flex gap-[15px]">
                            <div className="font-bold">2</div>
                            <div>Players must alternate turns, and only one disc can be dropped in each turn. </div>
                        </div>

                        <div class="flex gap-[15px]">
                            <div className="font-bold">3</div>
                            <div>The game ends when there is a 4-in-a-row or a stalemate.</div>
                        </div>

                        <div class="flex gap-[15px]">
                            <div className="font-bold">4</div>
                            <div>The starter of the previous game goes second on the next game.</div>
                        </div>
                    </div>
                </div>

                <Link to={'/'} className="flex justify-center mb-[-50px]">a
                    <img src="/assets/images/icon-check.svg" alt="checkmark" clssName="h-[64px] w-[64px]" />
                </Link>
            </div>
        </div>
    )
}

export default Rules;