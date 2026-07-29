export interface GreetingRepository {
  greet(name: string): Promise<string>
}
