import styled from "styled-components";
import useEmblaCarousel from "embla-carousel-react";
import "../styles/HomeStyles.css";

function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  const phones = [
    {
      name: "iPhone 15 Pro",
      price: "$999",
      image:
        "https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-color-lineup-230912_big.jpg.large_2x.jpg",
    },
    {
      name: "Samsung Galaxy S24 Ultra",
      price: "$1199",
      image:
        "https://images.samsung.com/is/image/samsung/assets/ae/smartphones/galaxy-s24-ultra/buy/03_S24Ultra-GalaxyAI-KV_PC.jpg?imbypass=true",
    },
    {
      name: "Xiaomi 14 Pro",
      price: "$899",
      image:
        "https://i02.appmifile.com/475_operatorx_operatorx_uploadTiptapImage/25/12/2025/7034e9aba97713b6b4626d280bbe4708.png",
    },
  ];

  return (
    <Container>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,wght@6..144,1..1000&display=swap');
        `}
      </style>

      <Form>
        <Title>Home</Title>

        {/* Carousel */}
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {phones.map((phone, index) => (
                <div className="embla__slide" key={index}>
                  <PhoneSlide src={phone.image} alt={phone.name} />
                </div>
              ))}
            </div>
          </div>

          <button className="butn_prev" onClick={scrollPrev}>
            Prev
          </button>
          <button className="butn_next" onClick={scrollNext}>
            Next
          </button>
        </div>

        {/* Phone Cards */}
        <CardsWrapper>
          {phones.map((phone, index) => (
            <Card key={index}>
              <CardImage src={phone.image} alt={phone.name} />
              <CardTitle>{phone.name}</CardTitle>
              <CardPrice>{phone.price}</CardPrice>
            </Card>
          ))}
        </CardsWrapper>
      </Form>
    </Container>
  );
}

export default Home;

/* Styled Components */

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Google Sans Flex", sans-serif;
`;

const Form = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const PhoneSlide = styled.img`
  max-width: 75%;
  min-height: 20%;
`;

const CardsWrapper = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  width: 100%;
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 15px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
`;

const CardTitle = styled.h3`
  margin: 10px 0 5px;
`;

const CardPrice = styled.p`
  font-weight: bold;
  color: #0071e3;
`;
