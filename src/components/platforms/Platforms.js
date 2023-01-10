import svg from "../../utils/svg";
import './platforms.css';

const Platforms = ({ platforms }) => {

    return (

        <div className='d-flex'>

            {platforms.map(({ platform }, index) => {


                {

                    switch (platform.slug) {
                        case 'pc':
                            return <div className="img-platform-wrapper mx-1" key={index}>
                                <img src={svg.windows} alt={platform.slug} />
                            </div>
                        case 'playstation4':
                            return <div className="img-platform-wrapper  mx-1" key={index}><img src={svg.playstation} alt={platform.slug} /></div>
                        case 'xbox-series-x':
                            return <div className="img-platform-wrapper  mx-1" key={index}><img src={svg.xbox} alt={platform.slug} /></div>
                        default:
                            return ''


                    }

                }

            })}


        </div>

    );
}

export default Platforms;