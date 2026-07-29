import { useEffect, useState } from "react"
import { CounterUseCase } from "../application/CounterUseCase"
import { TauriCounterRepository } from "../infrastructure/TauriCounterRepository"

const useCase = new CounterUseCase(new TauriCounterRepository())

export function CounterPage() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    useCase.getCount().then((c) => {
      setCount(c)
      setLoading(false)
    })
  }, [])

  const handleIncrement = async () => {
    const newCount = await useCase.increment()
    setCount(newCount)
  }

  const handleReset = async () => {
    const newCount = await useCase.reset()
    setCount(newCount)
  }

  if (loading) return <p>Loading counter...</p>

  return (
    <section>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset}>Reset</button>
    </section>
  )
}
