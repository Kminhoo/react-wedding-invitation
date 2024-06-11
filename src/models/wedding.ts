export interface Wedding {
  id: number
  date: string
  location: Location
  groom: Person & { parents: Person[] }
  bride: Person & { parents: Person[] }
  message: Message
  galleryImages: string[]
  comments: Comment[]
  accountMessage: string
  footerMessage: string
  attendCheck: {
    groom: AttendCheck[]
    bride: AttendCheck[]
  }
}

export interface AttendCheck {
  name: string
  phoneNumber: string
  attend: boolean
  count: number
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

export interface Comment {
  name: string
  comment: string
  password: string
  createdAt: string
}
