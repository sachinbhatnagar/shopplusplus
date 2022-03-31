import React from 'react'
import './Home.css'
import Product from '../Product/Product'

function Home() {
    return (
        <div className='home'>
            <div className='home-container'>
            <img className='home-image' src='https://media.istockphoto.com/videos/loopable-color-gradient-background-animation-video-id1182636162?s=640x640' alt='' />
            <h1>ShopPlusPLUS!</h1>
                <div className='home-row'>
//         This data needs to be pulled from a database. Since you're using Firebase, you can setup a database there and use it to pull this in dynamically on app-load
                    <Product id='12345' title='SAMSUNG 43" Class 4K Crystal UHD 2160P LED Smart TV with HDR' price={399.99} 
                        image='https://i5.walmartimages.com/asr/a3a2646f-bb5c-4a81-9cc5-99d50f5bdb52.03d49a2a3f4fb25f04d4c2250be7ddc2.jpeg' />
                    
                    <Product id='12345' title='SAMSUNG 43" Class 4K Crystal UHD 2160P LED Smart TV with HDR' price={399.99} 
                        image='https://i5.walmartimages.com/asr/a3a2646f-bb5c-4a81-9cc5-99d50f5bdb52.03d49a2a3f4fb25f04d4c2250be7ddc2.jpeg' />
                        
                    <Product id='23456' title='Apple iPhone 12 64GB Black + Carrier Subscription' price={439.99}
                        image='https://m.media-amazon.com/images/I/71fVoqRC0wL.jpg' />

                    <Product id='23456' title='Apple iPhone 12 64GB Black + Carrier Subscription' price={439.99}
                        image='https://m.media-amazon.com/images/I/71fVoqRC0wL.jpg' />
                </div>
                <div className='home-row'>
                    <Product id='34567' title='ThinkPad L14 Gen 2 AMD Laptop' price={1395.99}
                        image='https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8MjUyMzEzfGltYWdlL3BuZ3xoNWQvaDlmLzExNjI0NzA3OTQ4NTc0LnBuZ3wyMzhhMTA1YTE2MTQzMjgxZGY5ZTA1MjU4ZTAxOGFiMmFmNDVmYmE5MDgwYjU5NzViNWJkMjYyMWRiNTZkMGY1/lenovo-laptop-thinkpad-l14-gen-2-14-amd-subseries-hero.png' />
                    
                    <Product id='45678' title='Acer V6 Series V246HQL bd 23.6inch 16:9 Full HD VA Monitor' price={175.99} 
                        image='https://static.bhphoto.com/images/multiple_images/images500x500/1596186934_IMG_1395813.jpg' />

                    <Product id='45678' title='Acer V6 Series V246HQL bd 23.6inch 16:9 Full HD VA Monitor' price={175.99} 
                        image='https://static.bhphoto.com/images/multiple_images/images500x500/1596186934_IMG_1395813.jpg' />

                    <Product id='56789' title='Sony PlayStation 5 Disc Edition Accessories Bundle' price={859.00}
                        image='https://i5.walmartimages.com/asr/d1e0d988-d0f4-4100-a4ab-52f7b2f64c0a.9d9dbebf8c87007480c18d13b5a72a8f.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF' />
                </div>
                <div className='home-row'>
                    <Product id='67890' title='Microsoft Xbox Series S Digital Edition' price={349.99}
                        image='https://media.gamestop.com/i/gamestop/11108372/Microsoft-Xbox-Series-S-Digital-Edition?$pdp2x$' />

                    <Product id='12121' title='HP 24-dd1036 All-in-One Desktop Computer Intel i3 8GB Memory 256GB SSD' price={609.99}
                        image='https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSTXjxwIJs_TASHs9IWqDQFT4DROf0R7ovJ07drx5i0YDj1Vq3YvdNZdSQbMHmo8GypiZ72uX568S0&usqp=CAc' />

                    <Product id='12121' title='HP 24-dd1036 All-in-One Desktop Computer Intel i3 8GB Memory 256GB SSD' price={609.99}
                        image='https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSTXjxwIJs_TASHs9IWqDQFT4DROf0R7ovJ07drx5i0YDj1Vq3YvdNZdSQbMHmo8GypiZ72uX568S0&usqp=CAc' />
                </div>
            </div>
        </div>
    )
}

export default Home
