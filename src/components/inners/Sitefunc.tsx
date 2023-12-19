import React, {useState} from "react";
import "./Sitefunc.css";
import exp from "constants";
import chatting from "../../img/chatting.gif"
import useScrollFadeIn from "../../hooks/useScrollFadeIn";
const Sitefunc = () => {
        const animatedItem1 = useScrollFadeIn();
        const animatedItem2 = useScrollFadeIn();
        const animatedItem3 = useScrollFadeIn();


        return (
            <div className="sitefunc bg-3">
                <div className="site1"{...animatedItem1}>
                        ⚙︎기능 구현 방법
                </div>
                <div className="site2" {...animatedItem2}>
                        MAF의 챗 봇들을 구글 Colab을 사용하여 <br/>
                        각 봇들의 데이터를 학습시켜 데이터 모델들을 생성합니다.     <br/>
                        그 후, Hugging Face 플랫폼을 통해      <br/>
                        데이터 모델들을 api로 만듭니다.  <br/>
                        그렇게 챗 봇들을 MAF 사이트로 불러와 <br/>
                        이용자 여러분들과 대화할 수 있도록 만들었습니다. <br/>
                </div>
                <div className="sitepic" {...animatedItem3}>
                        <img src={chatting} className="chatpic"/>
                </div>
            </div>
        );
}

export default Sitefunc
