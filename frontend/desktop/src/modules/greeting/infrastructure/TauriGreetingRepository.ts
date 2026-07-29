import { invoke } from "@tauri-apps/api/core"
import type { GreetingRepository } from "../domain/GreetingRepository"

export class TauriGreetingRepository implements GreetingRepository {
  async greet(name: string): Promise<string> {
    return invoke<string>("greet", { name })
  }
}
