import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

// Reset CSS //
import "../../styles/reset.css"
// Footer Styles //
import "../../styles/footer.css"

// Components //
import SocialBar from "../SocialBar/index"

// Sub Components //
const FooterTitle = ({ content }) => (
        <h6 className='footer-block-title'>{content}</h6>
);
const FooterBody = ({ tag, content, children }) => (
        <>
            {tag === 'p' ? <p className='footer-block-body'>{content}</p> : 
            tag === 'ul' ? <ul className='footer-block-body'>{children}</ul> : ''}
        </>
);
const FooterBlock = ({children}) => (
    <div className='footer-block'>{children}</div>
);
const VerticalBreak = () => (
    <div className="line-break-vertical"></div>
);

const Footer = ({data}) => (
        <>
            <footer>
                <FooterBlock >
                        <FooterTitle content={data.titleOne}></FooterTitle>
                        <FooterBody tag={'p'} content={data.bodyOne}></FooterBody>
                </FooterBlock>

                <VerticalBreak></VerticalBreak>

                <FooterBlock >
                        <FooterTitle content={data.titleTwo}></FooterTitle>
                        <FooterBody tag={'ul'}>
                            <li>{data.listItemOne}</li>
                            <li>{data.listItemTwo}</li>
                            <li>{data.listItemThree}</li>
                            <li>{data.listItemFour}</li>
                            <li>{data.listItemFive}</li>
                        </FooterBody>
                </FooterBlock>
                <FooterBlock >
                        <FooterTitle content={"STAY CONNECTED"}></FooterTitle>
                        <SocialBar />
                </FooterBlock>

                <VerticalBreak></VerticalBreak>

                <FooterBlock >
                        <FooterTitle content={data.titleThree}></FooterTitle>
                        <FooterBody tag={'p'} content={data.bodyThree}></FooterBody>
                </FooterBlock>
            </footer>
            <section className="footer-banner">
                 <h4>© 2020 OccuMedX™</h4>
            </section>
        </>
);

export default Footer;

