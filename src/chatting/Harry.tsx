import React, { useState, useEffect, useRef } from "react";
import "./Harry.css";
import ChattingHeader from "../sidebar/ChattingHeader";

interface ChatLog {
    isUser: boolean;
    text: string;
}

const Harry = () => {
    const [chatLog, setChatLog] = useState<ChatLog[]>([]);
    const [inputText, setInputText] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [loadingDots, setLoadingDots] = useState<string>("");
    const [showReloadMessage, setShowReloadMessage] = useState<boolean>(false);

    const historyRef = useRef<HTMLDivElement>(null);
    const typingTimeoutRef = useRef<number | undefined>(undefined);
    const reloadTimeoutRef = useRef<number | undefined>(undefined);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    };

    const handleInputSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        setLoadingDots("");
        setShowReloadMessage(false);

        const result = await fetch(
            "apis",
            {
                headers: {
                    Authorization: "Bearer api",
                },
                method: "POST",
                body: JSON.stringify({
                    inputs: {
                        past_user_inputs: chatLog.filter((log) => log.isUser).map((log) => log.text),
                        generated_responses: chatLog.filter((log) => !log.isUser).map((log) => log.text),
                        text: inputText,
                    },
                }),
            }
        );

        const resultJSON = await result.json();
        const generatedText = resultJSON.generated_text;

        if (generatedText && generatedText.trim() !== "") {
            setChatLog((prevChatLog) => [
                ...prevChatLog,
                {
                    isUser: true,
                    text: inputText,
                },
                {
                    isUser: false,
                    text: generatedText,
                },
            ]);
        }

        setInputText("");
        setIsLoading(false);
    };

    const scrollToBottom = () => {
        if (historyRef.current) {
            historyRef.current.scrollTop = historyRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [chatLog]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setLoadingDots((prevDots) => {
                if (prevDots === "....") {
                    return "";
                } else {
                    return prevDots + ".";
                }
            });
        }, 500);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    useEffect(() => {
        if (isLoading) {
            typingTimeoutRef.current = window.setTimeout(() => {
                setShowReloadMessage(true);
            }, 30000);
        } else {
            clearTimeout(typingTimeoutRef.current);
        }
    }, [isLoading]);

    useEffect(() => {
        scrollToBottom();

        if (isLoading) {
            typingTimeoutRef.current = window.setTimeout(() => {
                setShowReloadMessage(true);
            }, 30000);
        } else {
            clearTimeout(typingTimeoutRef.current);
        }

        if (showReloadMessage) {
            reloadTimeoutRef.current = window.setTimeout(() => {
                setShowReloadMessage(true);
            }, 30000);
        } else {
            clearTimeout(reloadTimeoutRef.current);
        }

        return () => {
            clearTimeout(typingTimeoutRef.current);
            clearTimeout(reloadTimeoutRef.current);
        };
    }, [isLoading]);

    return (
        <div className="harry-container">
            <ChattingHeader/>
            <div className="harry-background-layer">
                <div className="harry-history" ref={historyRef}>
                    {chatLog.map((log, index) => (
                        <div
                            key={index}
                            className={`harry-chat-log ${log.isUser ? "harry-user-chat-log" : ""}`}
                        >
                            <div
                                className={`harry-chat-bubble ${
                                    log.isUser ? "harry-user-bubble" : "harry-harry-bubble"
                                }`}
                            >
                                {log.isUser ? (
                                    <>
                                        <img
                                            src="https://i.imgur.com/nuBXd5R.png"
                                            alt="You"
                                            className="harry-icon"
                                        />
                                        You:{" "}
                                    </>
                                ) : (
                                    <>
                                        <img
                                            src="https://i.imgur.com/flu8FQb.png"
                                            alt="Harry"
                                            className="harry-icon"
                                        />
                                        {log.text && log.text.trim() !== "" ? "Harry: " : ""}
                                    </>
                                )}
                                {log.text}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="harry-loading-message">
                            {showReloadMessage ? "페이지를 새로고침 하세요" : "Harry가 생각 중입니다"}
                            {loadingDots}
                        </div>
                    )}
                </div>
                <form onSubmit={handleInputSubmit} className="input-container">
                    <input
                        type="text"
                        value={inputText}
                        onChange={handleInputChange}
                        className="harry-input-text"
                        placeholder="메시지를 영어로 입력하세요..."
                    />
                    <button type="submit" className="harry-input-button">
                        전송
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Harry;
