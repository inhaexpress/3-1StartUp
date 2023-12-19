import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./BoardDetail.css"
import Header from "../components/Header";

interface BoardData {
    bno: number;
    title: string;
    content: string;
    writer: string;
    regdate: string;
}

const BoardDetail: React.FC = () => {
    const { bno } = useParams<{ bno: string }>();
    const [board, setBoard] = useState<BoardData | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchBoard();
    }, []);

    const fetchBoard = async () => {
        try {
            const response = await axios.get(`/boards/${bno}`);
            setBoard(response.data);
        } catch (error) {
            console.error("Error fetching board:", error);
        }
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`/boards/${bno}`);
            console.log("Board deleted successfully!");
            navigate("/boards"); // BoardList 페이지로 이동
        } catch (error) {
            console.error("Error deleting board:", error);
        }
    };

    if (!board) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Header/>
            <h2 className="detailtitle">{board.title}</h2>
            <table className="detailtable">
                <thead>
                    <tr>
                        <td>{board.writer}</td>
                        <td>{board.regdate}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={2}><textarea className="detailarea" readOnly>{board.content}</textarea></td>
                    </tr>
                </tbody>
            </table>

            <button className="detailbutton" onClick={() => navigate(`/boards/update/${bno}`)}>수정</button>
            <button className="detailbutton" onClick={handleDelete}>삭제</button>
            <button className="detailbutton" onClick={() => navigate(`/boards`)}>전체 글 보기</button>
        </div>
    );
};

export default BoardDetail;
