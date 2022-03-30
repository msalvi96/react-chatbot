import styledComponents from "styled-components";
import React, { Component } from 'react';

export function Header() {
    const Button = styledComponents.button`
        z-index: 1000;
        font-size: 14px;
        max-height: 650px;
        position: fixed;
        width: 320px;
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
    return (
        <Button>Virtual Assistant</Button>
    );
}