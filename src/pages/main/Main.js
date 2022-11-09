import './main.css'
import Header from '../../components/header/Header';
import DropFilter from '../../components/dropdownFilter/DropFilter';


/*replace with real data*/
const items = [

    {
        link: '/home',
        name: 'All games'
    },
    {
        link: '/home',
        name: 'Some games'
    },
    {
        link: '/home',
        name: 'My games'
    },


]

const Main = () => {

    return(

        <div className="main-holder mx-5">

            
            <Header text={'All games'} />
                

            <div className='d-flex'>

                <DropFilter text={'Order by:'} item={items} />

            </div>

            {/* <div className='container-fluid'>

                <div className='row'>

                    <div className='col-3'>Card1</div>
                    <div className='col-3'>Card2</div>
                    <div className='col-3'>Card3</div>
                    <div className='col-3'>Card4</div>

                </div>

            </div> */}




        </div>

    );

}

export default Main;