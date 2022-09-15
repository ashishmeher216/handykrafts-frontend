import React from 'react'
import Card from '../components/Card'
import Carousel from '../components/Carousel'

function Home() {

    const categories = [
        {
            id: 111,
            name: "Wooden crafts",
            description: "Lorem Ipssum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
        },
        {
            id: 222,
            name: "Bamboo crafts",
            description: "Lorem Ipssum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
        },
        {
            id: 333,
            name: "Clay crafts",
            description: "Lorem Ipssum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
        },
        {
            id: 444,
            name: "Fabric crafts",
            description: "Lorem Ipssum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
        },
    ]
    return (
<>
        <Carousel/>
        
            <div>
            <h3 className="text-center">Our Collections</h3>
            <div className="flexColRow">
                {
                    categories.map(item => <Card key={item.id} name={item.name} description={item.description}/>)
                }
            </div>
        </div>
</>
    )
}

export default Home