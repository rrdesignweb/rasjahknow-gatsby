import React from "react"
import { graphql, StaticQuery } from "gatsby"
import "./index.scss"

export default () => (
  <StaticQuery
    query={graphql`
      query EventsQuery {
        allBandsInTownEvent(
          limit: 8
          sort: { fields: [datetime], order: DESC }
        ) {
          nodes {
            id
            venue {
              city
              country
              name
            }
            artist {
              id
              facebook_page_url
              image_url
              name
            }
            datetime(formatString: "ddd, MMM DD YYYY")
            url
          }
        }
      }
    `}
    render={data => (
      <div className="Events">
        <div className="event-header">Tour Dates</div>
        <div className="event-content">
          {data.allBandsInTownEvent.nodes.map(node => {
            return (
              node.id !== "0b9a79d6-f963-552f-a38f-48e3d562ebec" && (
                <div className="event-item" key={node.id}>
                  <div className="event-details">
                    <div className="event-datetime">{node.datetime}</div>
                    <div className="event-name">{node.venue.name}</div>
                    <div className="event-venue">
                      <div className="city">{node.venue.city}</div>
                      <div className="region">{node.venue.region}</div>
                      <div className="country">{node.venue.country}</div>
                    </div>
                  </div>
                  <div className="event-cta">
                    <a
                      href={node.url}
                      rel="noreferrer"
                      target="_blank"
                      title={node.title}
                    >
                      Tickets
                    </a>
                  </div>
                </div>
              )
            )
          })}
          {/* {data.allBandsInTownEvent.nodes.map(node => {
            return (
              node.id === "0b9a79d6-f963-552f-a38f-48e3d562ebec" && (
                <div className="event-loading">No upcoming shows available</div>
              )
            )
          })} */}
        </div>
      </div>
    )}
  />
)
