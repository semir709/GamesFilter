import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import './lightBox.css';

const LightBox = ({ data }) => {

    return (

        <Gallery  >

            {
                data.map(({ image }) => {
                    return <Item
                        original={image}
                        thumbnail={image}
                        width="1024"
                        height="600"
                    >
                        {({ ref, open }) => (
                            <img className='img-item' ref={ref} onClick={open} src={image} />
                        )}
                    </Item>

                })
            }

        </Gallery >

    );


}

export default LightBox;