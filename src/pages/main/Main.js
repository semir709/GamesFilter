import './main.css'
import Header from '../../components/header/Header';
import DropFilter from '../../components/dropdownFilter/DropFilter';
import Card from '../../components/card/Card';

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

const games = [
    {name: 'Gta 5'},
    {name: 'Super Monsters’n Girls'},
    {name: 'Civilization VI'},
    {name: 'Cinco Noches Donde Alfredo (FNAF Hecho en 24 Horas)'},
    {name: 'Gta 5'},
    {name: 'Gta 5'},
    {name: 'Super Monsters’n Girls'},
    {name: 'Civilization VI'},
    {name: 'Cinco Noches Donde Alfredo (FNAF Hecho en 24 Horas)'},
    {name: 'Gta 5'}
                
]

const Main = () => {

    return(

        <div className="main-holder mx-5">

            
            <Header text={'All games'} />
                

            <div className='d-flex'>

                <DropFilter text={'Order by:'} item={items} />

            </div>

            <div className=' mt-5 card-holder'>

                <div className='col1'>
                    <Card text={'Gta 5'} />
                    <Card text={'Super Monsters’n Girls'} />
                    <Card text={'Civilization VI'} />
                    <Card text={'Cinco Noches Donde Alfredo (FNAF Hecho en 24 Horas)'} />
                </div>

                <div className='col1'>

                    <Card text={'Super Monsters’n Girls'} />
                    <Card text={'Super Monsters’n Girls'} />
                    <Card text={'Civilization VI'} />
                    <Card text={'Cinco Noches Donde Alfredo (FNAF Hecho en 24 Horas)'} />
                    
                </div>

                <div className='col1'>

                    <Card text={'Civilization VI'} />
                    <Card text={'Super Monsters’n Girls'} />
                    <Card text={'Civilization VI'} />
                    <Card text={'Cinco Noches Donde Alfredo (FNAF Hecho en 24 Horas)'} />
                    
                </div>

                <div className='col1'>

                    <Card text={'Cinco Noches Donde Alfredo (FNAF Hecho en 24 Horas)'} />
                    <Card text={'Super Monsters’n Girls'} />
                    <Card text={'Civilization VI'} />
                    <Card text={'Cinco Noches Donde Alfredo (FNAF Hecho en 24 Horas)'} />
                    
                </div>
                
            </div>




        </div>

    );

}

export default Main;