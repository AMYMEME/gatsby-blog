/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { rhythm } from "../utils/typography"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../utils/fontawesome'

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            linkedIn
            gmail
            github
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >

      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <div>

        <p style={{margin: 0}}>
          Written by <strong>{author.name}</strong> {author.summary}
        </p>
        <div style={{display: `inline-flex`}}>
          <a className={"social-icon-button"} href={`http://github.com/${social.github}`}
             target={"_blank"} rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'github']} size={'lg'} style={{marginLeft: "0.3em", marginRight: "0.3em"}}/>
            Github
          </a>
          <a className={"social-icon-button"} href={`https://www.linkedin.com/in/${social.linkedIn}`}
             target={"_blank"} rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'linkedin-in']} size={'lg'} style={{marginLeft: "0.3em", marginRight: "0.3em"}}/>
            LinkedIn
          </a>
          <a className={"social-icon-button"} href={`mailto:${social.gmail}?subject=Hello from website`}>
            <FontAwesomeIcon icon={['fas', 'envelope']} size={'lg'} style={{marginLeft: "0.3em", marginRight: "0.3em"}}/>
            Gmail
          </a>
        </div>

      </div>

    </div>
  )
}

export default Bio
