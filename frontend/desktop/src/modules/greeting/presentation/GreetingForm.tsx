import { useState } from "react"
import { GreetUseCase } from "../application/GreetUseCase"
import { TauriGreetingRepository } from "../infrastructure/TauriGreetingRepository"

const useCase = new GreetUseCase(new TauriGreetingRepository())

export function GreetingForm() {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const msg = await useCase.execute(name)
    setMessage(msg)
  }

  return (
    <section>
      <h2>Greeting</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <button type="submit">Greet</button>
      </form>
      <p>{message}</p>
    </section>
  )
}
