import React, { ChangeEvent, FC, useState } from 'react';

type FullInputPropsType = {
    addMessage: (value: string) => void
}

export const FullInput: FC<FullInputPropsType> = ({ addMessage }) => {
    let [title, setTitle] = useState('')


    function onChangeInputHandler(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.currentTarget.value)
    }
    const onClickButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }
    return (
        <div>
            <input value={title} onChange={onChangeInputHandler} />
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};