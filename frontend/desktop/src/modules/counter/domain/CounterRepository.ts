export interface CounterRepository {
  getCount(): Promise<number>
  incrementCount(): Promise<number>
  resetCount(): Promise<number>
}
