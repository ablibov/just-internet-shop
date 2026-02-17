import styled from "styled-components";
import useEmblaCarousel from "embla-carousel-react";
import '../styles/HomeStyles.css'

function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  return (

    <Container>    
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,wght@6..144,1..1000&family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Unbounded:wght@200..900&display=swap');
</style>
<Form>
  <Title>Home</Title>

      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide"><PhoneSlide src="https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-color-lineup-230912_big.jpg.large_2x.jpg" /></div>
            <div className="embla__slide"><PhoneSlide src="https://images.samsung.com/is/image/samsung/assets/ae/smartphones/galaxy-s24-ultra/buy/03_S24Ultra-GalaxyAI-KV_PC.jpg?imbypass=true"/></div>
            <div className="embla__slide"><PhoneSlide src="https://i02.appmifile.com/475_operatorx_operatorx_uploadTiptapImage/25/12/2025/7034e9aba97713b6b4626d280bbe4708.png" /></div>
          </div>
        </div>

        <button className="butn_prev" onClick={scrollPrev}>Prev</button>
        <button className="butn_next" onClick={scrollNext}>Next</button>
      </div>
      </Form>
      
    </Container>
  );
}

const PhoneSlide = styled.img`    
max-width: 75%;
min-height: 20%;
`;

const Container = styled.div`
  height: 100vh;              
  display: flex;
  justify-content: center;    
  align-items: center;        
    font-family: 'Google Sans Flex', sans-serif;

`;

const Form = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
`;

export default Home;
