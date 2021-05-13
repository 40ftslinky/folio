import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"
import { Link } from "react-scroll"
import { StaticQuery, graphql } from "gatsby"

const TitleArea = styled.div`
    width: 90%;
    max-width: 90vw;
    margin: 2rem auto;
    clear: both;
    // 
    @media (min-width: 80em) {
        max-width: 1200px;
    }
    //
    grid-column: 1 / 4;
    @media (min-width: 768px) {
        grid-column: 1 / 2;
    }
`

const Title = styled.h1`
    margin-top: 0;
    margin-bottom: 2.125rem;
`

const ContentArea = styled.div`
    grid-column: 1/4;
    @media (min-width: 768px) {
        grid-column: 2 / 3;
        p {
            margin-top: 0;
        }
    }
`

const ContentFront = ({ largePadding, id, data  }) => {
    return (
      <StaticQuery
        query={graphql`{
            contentfulFront {
                title
                heading
                description {
                    description
                    }
                }
            }
        `}
        render={data =>
            <section
                id={id}
                className={largePadding ? "section-padding--large" : "section-padding"}
            >
            {/* <Grid> */}
                <TitleArea className={"_inner"}>
                    <div className={"_info"}>

                        <Title className={"_title"}>
                            {/* Get your business to where you need it to be */}
                            {data.contentfulFront.heading}
                        </Title>

                        <ContentArea className={"_content"}>
                            {/* 40ft Slinky is a boutique creative agency delivering imaginative and effective brand & strategy with digital, print & motion solutions. */}
                            {data.contentfulFront.description.description}
                        </ContentArea>

                        <Link 
                            className={"btn"}
                            to="projects" 
                            smooth={true} 
                            duration={500}
                        >
                            View Projects
                        </Link>

                    </div>
                </TitleArea>
            {/* </Grid> */}
            </section>
        }
    />
  )
}
export default ContentFront;