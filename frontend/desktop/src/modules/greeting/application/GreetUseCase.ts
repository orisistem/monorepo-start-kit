import type { GreetingRepository } from "../domain/GreetingRepository"

export class GreetUseCase {
  constructor(private repository: GreetingRepository) {}

  async execute(name: string): Promise<string> {
    return this.repository.greet(name)
  }
}
