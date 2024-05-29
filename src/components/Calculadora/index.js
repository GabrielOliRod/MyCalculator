import { Box } from '@mui/material';
import styles from './Calculadora.module.css';
import Container from '@mui/material/Container';
import { useState } from 'react';

function Calculadora() {
    const [num, setNum] = useState(0);
    const [oldNum, setOldNum] = useState(0);
    const [cont, setCont] = useState(0);
    const [operator, setOperator] = useState();
    const [isNewInput, setIsNewInput] = useState(false); //boolean to check the input

    function inputNum(e) {
        var input = e.target.value;

        if (num.toString().length >= 9 && !isNewInput) { //checking the lenght of input to limit it
            return;
        }

        if (isNewInput) { //checking if it is a new input to don't write over it
            setNum(input);
            setIsNewInput(false);
        } else {
            if (num === 0) {
                setNum(input);
            } else {
                setNum(num + input);
            }
        }
    }

    function clear() { //clear function
        setNum(0);
        setOldNum(0);
        setCont(0);
        setIsNewInput(false);
    }

    function percentage() { //percentage function
        setNum(num / 100);
    }

    function handler() { //a function to change the signal
        setNum(num * -1);
    }

    function operatorHandler(e) { //the function who makes the operators entrance
        var operatorInput = e.target.value;
        setOperator(operatorInput);
        setOldNum(num);
        setNum(0);
        setIsNewInput(false);
    }

    function calculate() { //this function makes the counts and bring the results
        let result;

        switch (operator) {
            case "/":
                result = oldNum / num;
                break;
            case "X":
                result = oldNum * num;
                break;
            case "-":
                result = oldNum - num;
                break;
            case "+":
                result = parseFloat(oldNum) + parseFloat(num);
                break;
            default:
                result = num;
        }

        setNum(result);
        setCont(cont + 1);
        setIsNewInput(true);

        console.log(result);
        console.log(oldNum);
        console.log(cont);
    }

    function formatNumber(number) { // adjusting the result to don't exceed 9 digits
        const strNum = number.toString();
        if (strNum.length > 9) {
            const exponential = number.toExponential();
            const parts = exponential.split('e');
            const base = parseFloat(parts[0]).toFixed(4);
            const exponent = parseInt(parts[1], 10);
            return `${base}e${exponent}`;
        }
        return strNum;
    }

    return (
        <>
            <Box m={5} />
            <Container maxWidth="xs">
                <div className={styles.calculadora}>

                    <h1 className={styles.result}>{formatNumber(num)}</h1>

                    <button
                        className={styles.lggray}
                        onClick={clear}>AC</button>

                    <button
                        className={styles.lggray}
                        onClick={handler}>+/-</button>

                    <button
                        className={styles.lggray}
                        onClick={percentage}>%</button>

                    <button
                        className={styles.orange}
                        onClick={operatorHandler}
                        value={"/"}>/</button>

                    <button
                        className={styles.gray}
                        onClick={inputNum}
                        value={7}>7</button>

                    <button
                        className={styles.gray}
                        onClick={inputNum}
                        value={8}>8</button>

                    <button
                        className={styles.gray}
                        onClick={inputNum}
                        value={9}>9</button>

                    <button
                        className={styles.orange}
                        onClick={operatorHandler}
                        value={"X"}>X</button>

                    <button
                        className={styles.gray}
                        onClick={inputNum}
                        value={4}>4</button>

                    <button
                        className={styles.gray}
                        onClick={inputNum}
                        value={5}>5</button>

                    <button
                        className={styles.gray}
                        onClick={inputNum}
                        value={6}>6</button>

                    <button
                        className={styles.orange}
                        onClick={operatorHandler}
                        value={"-"}>-</button>

                    <button
                        className={styles.gray}
                        onClick={inputNum}
                        value={1}>1</button>

                    <button
                        className={styles.gray}
                        onClick={inputNum}
                        value={2}>2</button>

                    <button
                        className={styles.gray}
                        onClick={inputNum}
                        value={3}>3</button>

                    <button
                        className={styles.orange}
                        onClick={operatorHandler}
                        value={"+"}>+</button>

                    <button
                        style={{
                            minWidth: '6.6em',
                            textAlign: 'left',
                            paddingLeft: '26px'
                        }}
                        className={styles.gray}
                        onClick={inputNum}
                        value={0}>0</button>

                    <button className={styles.gray}
                        onClick={inputNum}
                        value={"."}>,</button>

                    <button className={styles.orange}
                        onClick={calculate}>=</button>
                </div>
            </Container>
            <Box m={5} />
        </>
    );
}

export default Calculadora;
