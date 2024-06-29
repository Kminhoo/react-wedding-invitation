export interface NavigationLink {
  url: string
  imgSrc: string
  alt: string
  name: string
}

const NavigationLinkBtn = ({ link }: { link: NavigationLink }) => {
  return (
    <a href={link.url}>
      <img src={link.imgSrc} alt={link.alt} />
      <span>{link.name}</span>
    </a>
  )
}

export default NavigationLinkBtn
