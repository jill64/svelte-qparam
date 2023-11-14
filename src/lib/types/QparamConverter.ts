export type QparamConverter<T> = {
  stringify: (val: T) => string
  parse: (str: string | null) => T
}
