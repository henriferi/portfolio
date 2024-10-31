// Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.footerText};
  font-size: 0.9rem;
  border-top: 1px solid ${({ theme }) => theme.primary};

    @media (max-width: 480px) {
    padding: 1rem;
    font-size: 0.8rem;
  }
`;

const FooterText = styled.p`
  color: ${({ theme }) => theme.text};
  margin: 0.5rem 0;

    @media (max-width: 480px) {
    margin: 0.3rem 0;
  }
`;

const EmailLink = styled.a`
  color: ${({ theme }) => theme.text};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterText>2024 © Henrique Fernandes. Todos os direitos reservados.</FooterText>
            <FooterText>
                Contato:{" "}
                <EmailLink href="mailto:henriquefernandes.gouveia@gmail.com">
                    henriquefernandes.gouveia@gmail.com
                </EmailLink>
            </FooterText>
        </FooterContainer>
    );
};

export default Footer;
