import styled from "styled-components";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { usePrevNextButtons } from "./ArrowButtons";

type SlideType = {
  imageUrl: string;
  alt: string;
};

type PropType = {
  slides: SlideType[];
  options?: EmblaOptionsType;
};

const EmblaWrapper = styled.section`
  position: relative;
  max-width: 100%;
  margin: auto;
`;

const EmblaViewport = styled.div`
  overflow: hidden;
`;

const EmblaContainer = styled.div`
  display: flex;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -webkit-tap-highlight-color: transparent;
  margin-left: -10px; // Negative margin to offset the slide padding
`;

const EmblaSlide = styled.div`
  position: relative;
  min-width: 50%;
  padding-left: 10px; // Add some space between slides
`;

const EmblaSlideInner = styled.div`
  position: relative;
  overflow: hidden;
`;

const EmblaSlideImg = styled.img`
  display: block;
  height: auto;
  width: 100%;
  object-fit: cover;
  aspect-ratio: 16 / 9; // Maintain a 16:9 aspect ratio for all images
`;

const EmblaButton = styled.button<{ side: "left" | "right" }>`
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  border: 0;
  width: 4rem;
  height: 4rem;
  justify-content: center;
  align-items: center;
  padding: 0;
  ${({ side }) => side}: 0.7rem;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }

  &:disabled {
    opacity: 0.3;
    cursor: default;
  }
`;

const ButtonSvg = styled.svg`
  width: 65%;
  height: 65%;
`;

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...options,
    slidesToScroll: 1,
    align: "start",
  });
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <EmblaWrapper>
      <EmblaViewport ref={emblaRef}>
        <EmblaContainer>
          {slides.map((slide, index) => (
            <EmblaSlide key={index}>
              <EmblaSlideInner>
                <EmblaSlideImg src={slide.imageUrl} alt={slide.alt} />
              </EmblaSlideInner>
            </EmblaSlide>
          ))}
        </EmblaContainer>
      </EmblaViewport>
      <EmblaButton
        side="left"
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
      >
        <ButtonSvg viewBox="0 0 532 532">
          <path
            fill="currentColor"
            d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
          />
        </ButtonSvg>
      </EmblaButton>
      <EmblaButton
        side="right"
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
      >
        <ButtonSvg viewBox="0 0 532 532">
          <path
            fill="currentColor"
            d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
          />
        </ButtonSvg>
      </EmblaButton>
    </EmblaWrapper>
  );
};

export default EmblaCarousel;
