export interface Wedding {
  id: number
  date: string
  location: Location
  groom: Person & { parents: Person[] }
  bride: Person & { parents: Person[] }
  message: Message
  galleryImages: string[]
}

export interface Location {
  lat: number
  lng: number
  name: string
  address: string
  link: string[]
  waytocome: {
    train: string[]
    bus: string[]
    car: string[]
  }
}

export interface Person {
  name: string
  account: Account
  phoneNumber: string
}

export interface Account {
  bankName: string
  accountNumber: string
  kakaopayLink?: string
}

export interface Message {
  intro: string
  invitation: string
}
