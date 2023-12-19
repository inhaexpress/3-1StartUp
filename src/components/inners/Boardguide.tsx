import React from "react";
import "./Boardguide.css";
import boardimg from "../../img/board.png"
import useScrollFadeIn from "../../hooks/useScrollFadeIn";
const Boardguide = () => {
    const animatedItem1 = useScrollFadeIn();
    const animatedItem2 = useScrollFadeIn();
    const animatedItem3 = useScrollFadeIn();

    return(
        <div className="guidemain">
            <div className="boardpic" {...animatedItem2}>
                <img className="boardimg" src={boardimg}/>
            </div>
            <div className="guidetitle" {...animatedItem1}>
                ☺︎ 문의 게시판 안내
            </div>
            <div className="guidecontent" {...animatedItem3}>
                MAF에서 제공하는 기본 캐릭터들 말고도 보고싶은 캐릭터가 있다면, <br/>
                문의 게시판을 통해 여러분들이 대화하고 싶은 캐릭터를 알려주세요! <br/>
                문의 게시판에 보고 싶은 캐릭터를 남겨주시면 검토 후 추후에 <br/>
                추가할 수 있도록 하겠습니다! <br/>
            </div>
        </div>
    )
}

export default Boardguide
