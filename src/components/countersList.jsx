import React, {useState} from "react";
import Counter from "./counter";

const CountersList = () => {
    const initialState = [
        {id: 0, value: 0, name: "Ненужная вещь", price: "200"}, 
        {id: 1, value: 0, name: "Ложка"}, 
        {id: 2, value: 2, name: "Тарелка"},
        {id: 3, value: 2, name: "Вилка"},
        {id: 4, value: 2, name: "Набор минималиста"}
    ];

    const [counters, setCounters] = useState(initialState);
    
    const handleIncrement = (id) => {
        const newCounters = counters.map((counter) => {
            if (counter.id === id) {
                counter.value += 1
            }
            return counter;
        })
        setCounters(newCounters)
    }

    const handleDecrement = (id) => {
        const newCounters = counters.map((counter) => {
            if (counter.id === id) {
                counter.value -= 1
            }
            return counter;
        })
        setCounters(newCounters)
    }
    
    const handleDelete = (id) => {
        const newCounters = counters.filter((counter => counter.id !== id));
            setCounters(newCounters)
    }

    const handleReset = () => {
        setCounters(initialState)
    }


    return (
        <>
            {counters.map((count) => (
                <Counter 
                    key={count.id} 
                    onDelete = {handleDelete}
                    onIncrement = {handleIncrement}
                    onDecrement = {handleDecrement}
                    {...count}
                    />
            ))}

            <button 
                className="btn btn-primary btm-sm m-2" 
                onClick = {handleReset}
            >
                Сброс
            </button>
        </>
    )
};

export default CountersList