import Image from "./Image"
import Button from "./button/Button"

import {getArticleIdByName} from '../api'

const SuggestionItem = ({link, image, title}) => {
  return (
    <>
      <Image
        image={"image-category-page-preview.jpg"}
        link={`product-${link}`}
      />
      <h6>{title}</h6>
      <Button className="button-orange"/>
    </>
  );
}

export default SuggestionItem