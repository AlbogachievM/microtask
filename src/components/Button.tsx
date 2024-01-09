import React, { FC } from 'react';

type ButtonPropsType = {
    title: string
    callBack: () => void
}

export const Button: FC<ButtonPropsType> = ({ title, callBack }) => {

    let onClickButtonHandler = () => {
        callBack()
        
    }

    return (

        <button onClick={onClickButtonHandler}>{title}</button>

    );
};