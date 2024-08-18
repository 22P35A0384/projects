import Img from '../panther.jpg'

function Home(){
    let name = 'Gangadhar'
    let roll = 384
    return(
        <>
            <h1>This Is Home Page</h1>
            <h2>My Name Is {name}</h2>
            <h2>My Roll No Is {roll}</h2>
            <img src={Img} alt='Panther' style={{height:'200px',width:'350px',boxShadow:''}}/>
        </>
    )
}

export default Home;