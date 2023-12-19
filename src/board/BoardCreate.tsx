import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import "./BoardCreate.css"
import Header from "../components/Header";

const BoardCreate: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        writer: "",
        regdate: new Date().toISOString()
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            await axios.post("/boards", formData);
            setFormData({ title: "", content: "", writer: "", regdate: new Date().toISOString() });
            console.log("Board created successfully!");
            navigate("/boards");
        } catch (error) {
            console.error("Error creating board:", error);
        }
    };

    return (
        <div>
            <Header/>
            <h1 className="createtitle">글 작성</h1>
            <form onSubmit={handleSubmit}>
            <table className="createtable">
                <thead>
                    <tr>
                        <th>
                            글 제목 : &nbsp;
                            <input
                                type="text"
                                name="title"
                                placeholder="글 제목"
                                value={formData.title}
                                onChange={handleInputChange}
                            />
                        </th>
                        <th>
                            작성자 : &nbsp;
                            <input
                                type="text"
                                name="writer"
                                placeholder="글쓴이"
                                value={formData.writer}
                                onChange={handleInputChange}
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
                            value={formData.content}
                            onChange={handleInputChange}
                        ></textarea>
                    </td>
                </tbody>
            </table>
                <button type="submit" className="createbutton">작성</button>
            </form>
        </div>
    );
};

export default BoardCreate;
