export interface ICategory {
  id?: number
  label: string
  link: string
  name?: string
}

export interface ICategories {
  all: ICategory[]
}
