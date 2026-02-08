
function CounterIncreaseButton({ handleIncrease }: { handleIncrease: () => void }) {
    return (
        <button onClick={handleIncrease}>Increase</button>
    )
}

export default CounterIncreaseButton
