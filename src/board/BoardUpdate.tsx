import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./BoardUpdate.css";

interface BoardData {
    bno: number;
    title: string;
    content: string;
    writer: string;
    regdate: string;
}

const BoardUpdate: React.FC = () => {
    const { bno } = useParams<{ bno: string }>();
    const [board, setBoard] = useState<BoardData>({
        bno: 0,
        title: "",
        content: "",
        writer: "",
        regdate: ""
    });
    const navigate = useNavigate();

    useEffect(() => {
        // 게시글 정보를 가져오는 API 호출 및 데이터 설정
        const fetchBoardData = async () => {
            try {
                const response = await axios.get(`/boards/${bno}`);
                setBoard(response.data);
            } catch (error) {
                console.error("Error fetching board data:", error);
            }
        };

        fetchBoardData();
    }, [bno]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setBoard({ ...board, [name]: value });
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            await axios.put(`/boards/${board.bno}`, board);
            console.log("Board updated successfully!");
            navigate(`/boards/${board.bno}`); // 해당 글의 BoardDetail 페이지로 이동
        } catch (error) {
            console.error("Error updating board:", error);
        }
    };

    return (
        <div>
            <h2 className="updatetitle">글 수정</h2>
            <form onSubmit={handleSubmit}>
                <table className="updatetable">
                    <thead>
                    <tr>
                        <th>
                            글 제목 : &nbsp;
                            <input
                                type="text"
                                name="title"
                                placeholder="글 제목"
                                value={board.title}
                                onChange={handleInputChange}
                            />
                        </th>
                        <th>
                            작성자 : &nbsp;
                            <input
                                type="text"
                                name="writer"
                                placeholder="글쓴이"
                                value={board.writer}
                                readOnly
                            />
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <td colSpan={2}>
                        <textarea
                            className="textareacontents"
                            name="content"
                            placeholder="글 내용"
                            value={board.content}
                            onChange={handleInputChange}
                        ></textarea>
                    </td>
                    </tbody>
                </table>
                <button type="submit" className="updatebutton">수정</button>
            </form>
        </div>
    );
};

export default BoardUpdate;
