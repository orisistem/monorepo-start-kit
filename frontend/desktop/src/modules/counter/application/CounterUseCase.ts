import type { CounterRepository } from "../domain/CounterRepository"

export class CounterUseCase {
  constructor(private repository: CounterRepository) {}

  async getCount(): Promise<number> {
    return this.repository.getCount()
  }

  async increment(): Promise<number> {
    return this.repository.incrementCount()
  }

  async reset(): Promise<number> {
    return this.repository.resetCount()
  }
}
