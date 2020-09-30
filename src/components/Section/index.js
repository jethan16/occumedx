import React from 'react';
import "../../styles/home.css"

import ContentBlock from "../ContentBlocks/index"



const Section = ({ componentTitle, componentOverviewBody, contentBlock, sectionStyle, cardStyle }) => (
    <main className={`section-wrapper ${sectionStyle === 'about' ? '' : 'services-section'}`} style={{backgroundColor: '#293132'}}>
        { sectionStyle === 'about' ? (
            <>
            <div className='about-overlay'></div>
            <div className='about-overlay-color'></div>
            </>
            ) : (
            ''
            )
        }
      <div className='about-inside-wrapper'>
        <div className="section-title">
          <div className='about-title-content'>
            <h3 className='mb-1 title'>{componentTitle}</h3>
            <p className="body-content p-0 mt-1">
                {componentOverviewBody}
            </p>
          </div>
        </div>
        <div className='line-break-full'></div>
          <section className="about-values">
            {contentBlock.map((block) => (
              <ContentBlock
              title={block.title}
              icon={block.icon}
              text={block.text}
              cardStyle={cardStyle}
              buttonText={block.buttonText}
              linkPath={block.linkPath}
            />))}
          </section>
        </div>
    </main>
)

export default Section;
