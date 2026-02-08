function CounterDecreaseButton({ handleDecrease }: {handleDecrease: () => void}) {
    return (
        <button onClick={handleDecrease}>Decrease</button>
    )
}

export default CounterDecreaseButton
