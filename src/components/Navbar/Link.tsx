import { SelectedPage } from "../../shared/types" 
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: SelectedPage,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({ 
    page,
    selectedPage,
    setSelectedPage,
 }: Props ) => {
    const lowerCasePage = page.replace(/ /g, "") as SelectedPage;
  return (
    <div>
        <AnchorLink
        className={`${selectedPage === page ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300`}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(page)}
        >
            {page}
        </AnchorLink>
    </div>
  )
}

export default Link