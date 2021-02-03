import React, {useState} from 'react';


// const TenLittleMonkeys = () => {

//     const [count, setCount] = useState(10);
//     const [msg, setMsg] = useState("10 little monkeys jumping on the bed");


//     function decount() {
//         if(count != 0){
//             setCount(count - 1);
//             setMsg(`${count} little monkeys jumping on the bed!`);
//         } else {
//             setMsg(`No more monkeys jumping on the bed..`);
//         }
//     }

//     return(
//         <>
//             <button onClick={decount}>Monkey Jump</button>
//             <br/>
//             <p>{msg}</p>
//         </>
//     );


// };


// with ternary
const TenLittleMonkeys = () => {

    const [count, setCount] = useState(10);

    function decount() {
        if(count != 0){
            setCount(count - 1);
        }
    }

    return(
        <>
            <button onClick={decount}>Monkey Jump</button>
            <br/>
            <p>{count == 0?  `No more monkeys jumping on the bed..` : `${count} little monkeys jumping on the bed!`} </p>
        </>
    );
};


export default TenLittleMonkeys;