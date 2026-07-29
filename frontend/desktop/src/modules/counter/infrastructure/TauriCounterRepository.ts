import { invoke } from "@tauri-apps/api/core"
import type { CounterRepository } from "../domain/CounterRepository"

export class TauriCounterRepository implements CounterRepository {
  async getCount(): Promise<number> {
    return invoke<number>("get_count")
  }

  async incrementCount(): Promise<number> {
    return invoke<number>("increment_count")
  }

  async resetCount(): Promise<number> {
    return invoke<number>("reset_count")
  }
}
