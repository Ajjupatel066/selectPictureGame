import './index.css'

const ImageItem = props => {
  const {imageDetails, clickedImage} = props
  const {id, thumbnailUrl} = imageDetails

  const onClickImage = () => {
    clickedImage(id)
  }

  return (
    <li className="image-item">
      <button className="img-btn" type="button" onClick={onClickImage}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      </button>
    </li>
  )
}

export default ImageItem
