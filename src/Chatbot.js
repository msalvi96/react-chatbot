import React, { Component } from 'react';
import styledComponents from 'styled-components';

const ChatWidget = styledComponents.div`
    right: 0;
    height: 85%;
    max-height: 700px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    position: fixed;
    width: 320px;
    bottom: 0;
    overflow: hidden;
    font-size: 16px;
    border-radius: 3px 3px 0 0;
    box-shadow: 0px 0px 3px 0px rgb(0 0 0 / 75%);
    transition: all 1s ease-in-out;
    z-index: 1000;
`;

export function ChatbotWidget () {

    return (
        <ChatWidget>
            <BotHeader></BotHeader>
            <ChatView></ChatView>
        </ChatWidget>
    )
}

const Header = styledComponents.div`
    justify-content: space-between;
    position: relative;
    height: 6%;
    min-height: 34px;
    background: #243745;
    color: white;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    border-bottom: 1px solid #666;
`;
export function BotHeader () {


    const logo = {
        display: "inline-block",
        height: "34px",
        margin: "2px 0px 0px 8px"
    }

    const close = {
        float: "right",
        height: "100%",
        color: "white"
    }

    return (
        <Header>
            <div style={logo}>
                Virtual Assistant
            </div>
            <button style={close}>
                <span>Close</span>
            </button>
        </Header>
    );
}

const BotView = styledComponents.div`
    background-color: #243745;
    overflow: hidden;
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
`;
export function ChatView () {


    return (
        <BotView>
            <MessageGroups></MessageGroups>
            <BotConsole></BotConsole>
        </BotView>
    );
}

const Groups = styledComponents.div`
    top: 0;
    bottom: 50px;
    left: 0;
    transform: translateY(0);
    outline: 0;
    overflow-x: hidden;
    overflow-y: scroll;
    padding: 10px;
    position: absolute;
    right: 0;
    transition: transform 0.2s cubic-bezier(0, 0, 0.5, 1);
`;

export function MessageGroups () {

    return (
        <Groups></Groups>
    );
}

const Console = styledComponents.div`
    border-color: #243745;
    background-color: #243745;
    margin-bottom: 5px;
    border: 5px solid #dbdee1;
    bottom: 0;
    box-sizing: border-box;
    height: 50px;
    left: 0;
    position: absolute;
    right: 0;
`;
export function BotConsole () {

    return (
        <Console>
            <BotTextInput></BotTextInput>
            <SendButton></SendButton>
        </Console>
        
    );
}

const Textbox = styledComponents.div`
    padding: 0px;
    background-color: rgb(221, 221, 221);
    color: black;
    border-radius: 3px;
    width: 77%;
    margin-left: -34px;
    bottom: 0;
    right: 49px;
`;
export function BotTextInput () {


    return (
        <Textbox>
            <input type='text'></input>
        </Textbox>
    );
}

const Button = styledComponents.button`
    background-color: #243745;
    border: 0;
    padding: 0;
    right: 0;
`;
export function SendButton () {


    return (
        <Button></Button>
    );
}