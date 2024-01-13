import { Col, Container, Row } from "@autrm/common/components/grid";
import { Copyright } from "./components/Copyright/Copyright";
import { FooterMenu } from "./components/FooterMenu";
import { FooterWidget } from "./components/FooterWidget";
import { SocialLinks } from "./components/SocialLinks/SocialLinks";
import { FooterBottomStyled, FooterContainerStyled, FooterStyled, FooterTopStyled } from "./styled";

export function Footer() {

    const company_links = [
        {'title': "About us", 'url': '#'},
        {'title': "Return & exchange", 'url': '#'},
        {'title': "Refuund Plicy", 'url': '#'},
        {'title': "Reviews", 'url': '#'},
        {'title': "FAQ's", 'url': '#'},
        {'title': "Contact Us", 'url': '#'}
    ];

    return (
        <FooterStyled>
            {/* Footer top */}
            <FooterContainerStyled>
                <FooterTopStyled>
                    <Row >
                        <Col lg={3}>
                            <FooterWidget title="About company">
                                <FooterMenu links={ company_links }/>
                            </FooterWidget>
                        </Col>
                        <Col lg={3}>
                            <FooterWidget title="Search & Explore">
                                <FooterMenu links={ company_links }/>
                            </FooterWidget>
                        </Col>
                        <Col lg={3}>
                            <FooterWidget title="Car By Brands">
                                <FooterMenu links={ company_links }/>
                            </FooterWidget>
                        </Col>
                        <Col lg={3}>
                            <FooterWidget title="Car By Location">
                                <FooterMenu links={ company_links }/>
                            </FooterWidget>
                        </Col>
                    </Row>
                </FooterTopStyled>
                {/* Footer center */}
                <div>
                </div>
                {/* Footer bottom */}
                <FooterBottomStyled>
                    <Copyright />
                    <SocialLinks />
                </FooterBottomStyled>
            </FooterContainerStyled>
        </FooterStyled>
    );
}