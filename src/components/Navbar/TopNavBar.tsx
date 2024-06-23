import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import whatupImage from "/public/images/whatsapp.svg";
import facebookImage from "/public/images/facebook.svg";
import instagramImage from "/public/images/instagram.svg";
import telephone from "/public/images/telephone-fill.svg";
import { useTranslation } from "react-i18next";

export default function TopNavBar() {
  const { i18n } = useTranslation();
  const languages = [
    { code: "fr", Lang: "FR" },
    { code: "en", Lang: "En" },
  ];
  console.log(i18n.language)
  function changeLanguage(lng:string) {
    i18n.changeLanguage(lng);
  }
  return (
    <Container fluid className="pb-1" style={{ backgroundColor: "#F6F5F2" }}>
      <Row className="position-relative">
        <Col md={4}>
          <div className="mt-2 d-flex w-100 justify-content-start">
            <img src={telephone} alt="telephone" className="mx-3 text-dark" />
            <p className="m-1">+2126636737</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="d-flex w-100 gap-2 justify-content-around p-2">
            <a href="https://api.whatsapp.com/send?phone=+212632001896&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202.">
              <img src={whatupImage} alt="whatupImage" className="mx-1" />
            </a>
            <a href="https://www.facebook.com/LilianaDev">
              <img src={facebookImage} alt="facebookImage" className="mx-1" />
            </a>
            <a href="https://www.instagram.com/online_institut9?igsh=MWRvMHk2b3lmMTUzbA==">
              <img src={instagramImage} alt="instagramImage" className="mx-1" />
            </a>
          </div>
        </Col>
        <Col md={4}>
          <div className="mt-2 d-flex w-100  justify-content-md-end justify-content-center">
            <ButtonGroup size="sm" aria-label="First group">
              <Button
                className={
                  languages[1].code === i18n.language
                    ? "mx-1 active"
                    : "mx-1"
                }
                variant="secondary"
                key={languages[1].code}
                onClick={() => changeLanguage(languages[1].code)}
              >
                {languages[1].Lang}
              </Button>
              <Button
                className={
                  languages[0].code === i18n.language
                    ? "mx-1 active"
                    : "mx-1"
                }
                variant="secondary"
                key={languages[0].code}
                onClick={() => changeLanguage(languages[0].code)}
              >
                {languages[0].Lang}
              </Button>
            </ButtonGroup>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
