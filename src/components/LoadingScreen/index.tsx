import { Container, SpinnerContainer } from './styles';

function LoadingScreen() {
  return (
    <Container>
      <SpinnerContainer>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </SpinnerContainer>
    </Container>
  );
};

export default LoadingScreen;
