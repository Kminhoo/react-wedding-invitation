interface generateImgUrlProps {
  fileName: string
  type: 'jpg' | 'webp'
  option: string
}

const generateImgUrl = ({ fileName, type, option }: generateImgUrlProps) => {
  return `https://res.cloudinary.com/dgl08y6j1/image/upload/${option}/v1719937037/${type}/${fileName}.${type}`
}

export default generateImgUrl
