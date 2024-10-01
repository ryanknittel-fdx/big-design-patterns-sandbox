import React from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@bigcommerce/big-design-icons";
import { theme as defaultTheme } from "@bigcommerce/big-design-theme";
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
  gap: 1rem;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -webkit-tap-highlight-color: transparent;
`;

const EmblaSlide = styled.div`
  position: relative;
  min-width: calc(50% - 0.5rem);
`;

const EmblaSlideInner = styled.div`
  position: relative;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.secondary30};
`;

// Provides default theme props to ensure consistent styling if not provided externally
EmblaSlideInner.defaultProps = { theme: defaultTheme };

const EmblaSlideImg = styled.img`
  display: block;
  height: auto;
  width: 100%;
  object-fit: cover;
  aspect-ratio: 4/3; // Maintain a 16:9 aspect ratio for all images
`;

const EmblaButton = styled.button<{ side: "left" | "right" }>`
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  border: 0;
  width: 2rem;
  height: 2rem;
  justify-content: center;
  align-items: center;
  padding: 0;
  ${({ side }) => side}: 0.7rem;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primary10};
  border-radius: 50%;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary20};
  }

  &:disabled {
  opacity: 0.75;
    cursor: default;
    pointer-events: none;
  }
`;

EmblaButton.defaultProps = { theme: defaultTheme };

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
        <ChevronLeftIcon />
      </EmblaButton>
      <EmblaButton
        side="right"
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
      >
        <ChevronRightIcon />
      </EmblaButton>
    </EmblaWrapper>
  );
};

export default EmblaCarousel;
