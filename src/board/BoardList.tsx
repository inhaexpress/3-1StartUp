import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import "./BoardList.css"
import Header from "../components/Header";
import {useNavigate} from "react-router-dom";

const BoardList: React.FC = () => {
    const navigate = useNavigate();
    const [boards, setBoards] = useState([]);

    useEffect(() => {
        fetchBoards();
    }, []);

    const fetchBoards = async () => {
        try {
            const response = await axios.get("/boards");
            setBoards(response.data);
        } catch (error) {
            console.error("Error fetching boards:", error);
        }
    };

    return (
        <div>
            <Header/>
            <h1 className="boardtitle">문의 게시판</h1>
            <p className="boardcontent">여러분이 보고싶은 캐릭터를 게시판을 통해 추천해주세요!</p>
            <button onClick={() => navigate(`/boards/create/`)} className="listbutton">글 작성</button>
            <table className="listtable">
                <thead>
                    <tr>
                        <th>글 번호</th>
                        <td>제목</td>
                        <td>작성자</td>
                        <td>작성 시간</td>
                    </tr>
                </thead>
                {boards.map((board: any) => (
                <tbody>
                    <tr>
                        <th>{board.bno}</th>
                        <td><Link to={`/boards/${board.bno}`}>{board.title}</Link></td>
                        <td>{board.writer}</td>
                        <td>{board.regdate}</td>
                    </tr>
                </tbody>
            ))}
            </table>
        </div>
    );
};

export default BoardList;
