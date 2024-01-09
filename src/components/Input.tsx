import React, { ChangeEvent, FC } from 'react';

type InputPropsType = {
    setTitle: (title: string)=> void
    title: string
}

export const Input: FC<InputPropsType> = ({setTitle, title}) => {

    function onChangeInputHandler(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.currentTarget.value)
    }
    return (
       <input value={title} onChange={onChangeInputHandler} />
    );
};
