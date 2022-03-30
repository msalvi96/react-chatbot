import styledComponents from "styled-components";
import React, { Component } from 'react';

const Button = styledComponents.button`
z-index: 1000;
font-size: 14px;
max-height: 650px;
position: fixed;
width: 400px;
bottom: -1px;
right: 20px;
padding: 0.5em 0.5em 0.5em 0.7em;
justify-content: center;
height: 3.5em;
background: #243745;
color: white;
border-top-right-radius: 15px;
border-top-left-radius: 15px;
border-bottom: 1px solid #666;
cursor: pointer;
outline: none;
`;

export function Header() {
    return (
        <Button>Virtual Assistant</Button>
    );
}

export function Chatbox () {
    const chatboxStyle = {
        background: "#243745",
    }

    const chatHistoryStyle = {
        height: "350px",
        padding: "8px 24px",
        overflowY: "scroll"
    }

    return (
        <div style={chatboxStyle}>
            <div style={chatHistoryStyle}>
                Hello from chatbot
            </div>
        </div>
    );
}

export function Chatbot () {
    const styles = {
        bottom: 0,
        fontSize: "12px",
        right: "24px",
        position: "fixed",
        width: "400px",
    }

    return (
        <div style={styles}>
            <Header></Header>
            <Chatbox></Chatbox>
        </div>
    );
}