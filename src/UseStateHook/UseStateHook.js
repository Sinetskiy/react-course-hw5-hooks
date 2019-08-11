import React, {useState} from "react";

/*
    Напишите компонент с двуми инпутами и кнопкой

    Если инпуты заполнены - при нажатии на кнопку показывается сообщение об успехе

    У сообщения об успехе должно быть поле data-testid='success'
    Сообжение должно содержать текст "Вы вошли"

    Email инпут должен иметь поле data-testid='input-email'
    Password инпут должен иметь поле data-testid='input-password'
    Кнопка логина должна иметь поле data-testid='submit'

    ##  Дополнительное задание:

    У вас получится несколько useState.
    В качестве дополнительной тренировки попробуйте использовать useReducer
    вместо нескольких useState

    Прочитайте документацию:
    https://reactjs.org/docs/hooks-reference.html#usereducer
*/

export const Form = () => {

    const [isAuth, setAuth] = useState(false);
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();

    const loginForm = () => {
        if (email === 'test@email.com' && pass === 'supersafepassword')
            setAuth(true);
    };

    const handleEmailChange = event => {
        setEmail(event.target.value);
    };

    const handlePassChange = event => {
        setPass(event.target.value);
    };

    return <>
        {'isAuth: ' + isAuth }
        {!isAuth ?
            <div>
                <input data-testid='email-input' value={email} onChange={handleEmailChange}/>
                <input data-testid='password-input' value={pass} onChange={handlePassChange}/>
                <button data-testid='submit' onClick={loginForm} />
            </div>
            :
            <p data-testid='success-message'>Вы вошли</p>}
    </>;
};
