/**
 *
 * Footer
 *
 */
import React, { useEffect } from 'react';
import { Trans } from 'react-i18next';
import { translations } from 'locales/i18n';
import { LanguageToggle } from '../../components/LanguageToggle';
import tokenineLogoSvg from 'assets/images/tokenine_logo_white.svg';
import styled from 'styled-components';
import { media } from '../../../styles/media';

export function Footer() {
  //const [setHasMatomo] = useState(false);

  useEffect(() => {
    //setHasMatomo(window.hasOwnProperty('Matomo'));
  }, []);

  return (
    <footer className="mt-3">
      <div className="container py-3">
        {/* <div className="d-flex flex-row justify-content-between align-items-center text-white">
          <div>
            <h6>
              <Trans
                i18nKey={translations.footer.title}
                components={[<strong></strong>]}
              />
            </h6>
            <CreditText>
              <StyledLogo src={tokenineLogoSvg} />
            </CreditText>
          </div>
          <div>
            <LanguageToggle />
          </div>
        </div> */}
      </div>
    </footer>
  );
}

const StyledLogo = styled.img.attrs(_ => ({
  alt: 'by Tokenine',
}))`
  width: 80px;
  height: 22px;
  margin: 0 15px 0 0;
  position: relative !important;
  ${media.xl`
  width: 100px;
  height: 26px;
  margin: 0 15px 0 0;
  `}
`;

const CreditText = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: flex-end;
`;
