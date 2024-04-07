
{showLoadey && <div class="loadey">
<span class="loadery-text">loading</span>
<span class="loady"></span>
</div>}
{ShowResCarousel &&
<Carousel activeIndex={index} onSelect={handleSelect} className='TheImages'>
    <Carousel.Item interval={1000}>
        <img src={Image2} alt='Restaurant' id='ImagesRest'/>
    </Carousel.Item>
    <Carousel.Item interval={500}>
        <img src={Image3} alt='Restaurant' id='ImagesRest'/>
    </Carousel.Item>
    <Carousel.Item>
        <img src={Image4} alt='Restaurant' id='ImagesRest'/>
    </Carousel.Item>
    <Carousel.Item>
        <img src={Image5} alt='Restaurant' id='ImagesRest'/>
    </Carousel.Item>
    <Carousel.Item>
        <img src={Image6} alt='Restaurant' id='ImagesRest'/>
    </Carousel.Item>
</Carousel>}
<VisibilitySensor partialVisibility={true} onChange={(visible)=>{
    if(visible){
        setTimeout(()=>{
            setShowLoadey(false);
            setShowResCarousel(true);
        },3000)                    
    }
    }} >
    <div style={{height: '100px'}}></div>
</VisibilitySensor>