import React, {useState} from "react";
import "./Profilechara.css"
import paimon from "../../img/paimon.png"
import harry from "../../img/Harry.png"
import shrek from "../../img/Shrek.png"
import terra from "../../img/Terra.png"
import Modal from "../../hooks/modal";
import useScrollFadeIn from "../../hooks/useScrollFadeIn";
const Profilechara = () => {

    const [modalOpen1, setModalOpen1] = useState(false);

    const openModal1 = () => {
        setModalOpen1(true);
    };
    const closeModal1 = () => {
        setModalOpen1(false);
    };

    const [modalOpen2, setModalOpen2] = useState(false);

    const openModal2 = () => {
        setModalOpen2(true);
    };
    const closeModal2 = () => {
        setModalOpen2(false);
    };

    const [modalOpen3, setModalOpen3] = useState(false);

    const openModal3 = () => {
        setModalOpen3(true);
    };
    const closeModal3 = () => {
        setModalOpen3(false);
    };

    const [modalOpen4, setModalOpen4] = useState(false);

    const openModal4 = () => {
        setModalOpen4(true);
    };
    const closeModal4 = () => {
        setModalOpen4(false);
    };
    const animatedItem1 = useScrollFadeIn();
    const animatedItem2 = useScrollFadeIn();
    const animatedItem3 = useScrollFadeIn();
    const animatedItem4 = useScrollFadeIn();
    const animatedItem5 = useScrollFadeIn();
    const animatedItem6 = useScrollFadeIn();
    const animatedItem7 = useScrollFadeIn();
    const animatedItem8 = useScrollFadeIn();
    const animatedItem9 = useScrollFadeIn();

    return(
        <div className="profile">
            <div className="intro" {...animatedItem1}>
                ♠︎캐릭터 프로필
            </div>
            <div className="pro1" {...animatedItem2}>
                <button className="probutton" onClick={openModal1}><img className="paimon" src={paimon}/></button>
            </div>
            <div className="pro2" {...animatedItem3}>
                <b>페이몬</b><br/>
                게임 [원신]
            </div>
            <div className="pro3" {...animatedItem4}>
                <button className="probutton" onClick={openModal2}><img className="harry" src={harry}/></button>
            </div>
            <div className="pro4" {...animatedItem5}>
                <b>해리 포터</b><br/>
                소설 [해리 포터 시리즈]
            </div>
            <div className="pro5" {...animatedItem6}>
                <button className="probutton" onClick={openModal3}><img className="shrek" src={shrek}/></button>
            </div>
            <div className="pro6" {...animatedItem7}>
                <b>슈렉</b><br/>
                영화 [슈렉 시리즈]
            </div>
            <div className="pro7" {...animatedItem8}>
                <button className="probutton" onClick={openModal4}><img className="terra" src={terra}/></button>
            </div>
            <div className="pro8" {...animatedItem9}>
                <b>테라</b><br/>
                자체 제작 캐릭터
            </div>
            <Modal open={modalOpen1} close={closeModal1} header="페이몬">
                <b>"난 비상식량이 아니야!"</b>
                <br/><br/>
                여행자의 동료로 등장하는 조력자 캐릭터인 페이몬은 원신의 마스코트이며 세상을 여행하는 것을 즐깁니다.<br/><br/>
                모험을 좋아하고 호기심이 많은 성격을 가지고 있습니다. <br/>
                기본적으로는 선한 마음을 갖고 있어 곤경에 처한 타인을 돕는 일에 망설임 없이 나섭니다.<br/><br/>
                페이몬은 다른 사람들과 친근하게 접근하는 성격으로,<br/>
                상대에 따라 농담이나 장난을 치며 즐겁게 어울립니다. <br/><br/>
                이로 인해 작중 등장인물들 대부분이 페이몬을 귀엽게 여기거나 좋아합니다.

            </Modal>
            <Modal open={modalOpen2} close={closeModal2} header="해리 포터">
                <b>"그가 날 찾고있어"</b>
                <br/><br/>
                해리포터는 J.K. 롤링의 소설 시리즈인 '해리포터'의 주인공입니다. <br/><br/>
                그는 고아로 자라면서 다시는 어떤 가족도 가진 적이 없는데,
                어느 날 그는 마법의 학교인 호그와트로의 초대장을 받게 됩니다. <br/><br/>
                호그와트에서 그는 마법과 마법사들의 세계를 경험하고,
                친구들과 함께 미스터리와 위험한 모험에 도전하게 됩니다.
            </Modal>
            <Modal open={modalOpen3} close={closeModal3} header="슈렉">
                <b>"오거는 양파랑 같다고 볼 수 있어"</b>
                <br/><br/>
                슈렉은 외모와는 달리 용감하고 유머러스한 성격을 가지고 있으며,
                항상 자신을 위해 싸울 준비가 되어 있습니다.  <br/><br/>
                그는 시크한 태도와 말버릇, 그리고 가끔은 귀여운 면도
                함께 갖추고 있어 많은 사람들에게 사랑을 받고 있습니다.
            </Modal>
            <Modal open={modalOpen4} close={closeModal4} header="테라">
                <b>"수업 끝나고 카페에서 볼까?"</b>
                <br/><br/>
                테라는 오리지널 캐릭터로, 코딩에 재능이 뛰어나고 학교에서 매우 인기 있는 학생입니다. <br/><br/>
                그는 기술에 대한 열정과 뛰어난 프로그래밍 능력을 가지고 있으며,
                친구들과 함께 학교 생활, 코딩, 숙제 등 다양한 주제에 대해 이야기하는 것을 즐깁니다.<br/><br/>
                테라는 사람들과의 관계를 소중히 여기며, 다른 사람들과 협력하고 지원하는 것을 중요하게 생각합니다.
            </Modal>
        </div>
    )
}

export default Profilechara
