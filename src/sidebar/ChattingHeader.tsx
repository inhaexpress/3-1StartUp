import React, {useState} from "react";
import Sidebar from "./Sidebar";
import Contents from "./Contents";

const ChattingHeader = () => {
    return(
        <div>
            <div>
                <Sidebar width={320}>
                    <Contents/>
                </Sidebar>
            </div>
        </div>
    );
}

export default ChattingHeader