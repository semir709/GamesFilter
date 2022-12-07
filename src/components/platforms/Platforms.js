import svg from "../../utils/svg";

const Platforms = ({ platforms }) => {

    return (

        <div className='d-flex'>

            {platforms.map(({ platform }, index) => {


                {

                    switch (platform.slug) {
                        case 'pc':
                            return <img key={index} className='mx-1' src={svg.windows} alt={platform.slug} />
                        case 'playstation4':
                            return <img key={index} className='mx-1' src={svg.playstation} alt={platform.slug} />
                        case 'xbox-series-x':
                            return <img key={index} className='mx-1' src={svg.xbox} alt={platform.slug} />
                        default:
                            return ''


                    }

                }

            })}


        </div>

    );
}

export default Platforms;