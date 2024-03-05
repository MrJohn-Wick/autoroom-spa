import { Button } from '@autrm/common/components/button';
import { Col, Container, Row } from '@autrm/common/components/grid';
import { Modal } from 'antd';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { privacyStatement } from './privacyStatement';
import { OverlayStyled, WrapperStyled } from './styled';
import { userAgreement } from './userAgreement';

export function CookieBanner() {
  const key = 'autoroom_cookie';
  const [cookies, setCookies] = useCookies([key]);
  const [isUserAgreement, setUserAgreement] = useState(false);
  const [isPrivacyStatement, setPrivacyStatement] = useState(false);

  const onClick = () => {
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);
    setCookies(key, 'true', {
      path: '/',
      expires,
    });
  };

  const banner = (
    <>
      <OverlayStyled>
        <Container>
          <Row>
            <Col lg={12}>
              <WrapperStyled>
                <div>
                  Мы обрабатываем данные посетителей и используем Cookies для аналитики
                  <br />
                  согласно{' '}
                  <a
                    href="#"
                    onClick={() => setPrivacyStatement(true)}
                  >
                    положению о конфиденциальности
                  </a>{' '}
                  и{' '}
                  <a
                    href="#"
                    onClick={() => setUserAgreement(true)}
                  >
                    пользовательскому соглашению.
                  </a>
                </div>
                <Button
                  data-bs-toggle="modal"
                  data-bs-target="#signUpModal01"
                  onClick={onClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4.5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                    <path d="M8 0a7.96 7.96 0 0 0-4.075 1.114q-.245.102-.437.28A8 8 0 1 0 8 0m3.25 14.201a1.5 1.5 0 0 0-2.13.71A7 7 0 0 1 8 15a6.97 6.97 0 0 1-3.845-1.15 1.5 1.5 0 1 0-2.005-2.005A6.97 6.97 0 0 1 1 8c0-1.953.8-3.719 2.09-4.989a1.5 1.5 0 1 0 2.469-1.574A7 7 0 0 1 8 1c1.42 0 2.742.423 3.845 1.15a1.5 1.5 0 1 0 2.005 2.005A6.97 6.97 0 0 1 15 8c0 .596-.074 1.174-.214 1.727a1.5 1.5 0 1 0-1.025 2.25 7 7 0 0 1-2.51 2.224Z" />
                  </svg>
                  ПРИНЯТЬ
                </Button>
              </WrapperStyled>
            </Col>
          </Row>
        </Container>
      </OverlayStyled>
      <Modal
        title="Пользовательское соглашение"
        open={isUserAgreement}
        centered
        width={700}
        onCancel={() => setUserAgreement(false)}
        cancelButtonProps={{
          style: {
            display: 'none',
          },
        }}
        okButtonProps={{
          style: {
            display: 'none',
          },
        }}
        bodyStyle={{
          overflowY: 'auto',
          maxHeight: 'calc(100vh - 200px)',
        }}
      >
        {userAgreement}
      </Modal>
      <Modal
        title="Положение о конфиденциальности"
        open={isPrivacyStatement}
        centered
        width={700}
        onCancel={() => setPrivacyStatement(false)}
        cancelButtonProps={{
          style: {
            display: 'none',
          },
        }}
        okButtonProps={{
          style: {
            display: 'none',
          },
        }}
        bodyStyle={{
          overflowY: 'auto',
          maxHeight: 'calc(100vh - 200px)',
        }}
      >
        {privacyStatement}
      </Modal>
    </>
  );

  return cookies[key] ? null : banner;
}
