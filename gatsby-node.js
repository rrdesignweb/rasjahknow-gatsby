/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// You can delete this file if you're not using it

/**
 * You can uncomment the following line to verify that
 * your plugin is being loaded in your site.
 *
 * See: https://www.gatsbyjs.org/docs/creating-a-local-plugin/#developing-a-local-plugin-that-is-outside-your-project
 */
const fetch = require("node-fetch")
const queryString = require("query-string")

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions
  delete configOptions.plugins

  const processEvent = event => {
    const nodeId = createNodeId(`bandsintown-event-${event.id}`)
    const nodeContent = JSON.stringify(event)
    const nodeData = Object.assign({}, event, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `BandsInTownEvent`,
        content: nodeContent,
        contentDigest: createContentDigest(event),
      },
    })
    return nodeData
  }

  const artist = "Ras Jahknow Band"
  //const timePeriod = "past"
  const apiUrl = `https://rest.bandsintown.com/artists/${artist}/events?app_id=squarespace-todd-wright-gxya&date=all`

//   const blankObj = {
//     id: "123456",
//     datetime: "3000",
//     artist_id: "3084975",
//     description: "blankNode",
//     title: "blankNode",
//     offers: [],
//     venue: {
//       name: "",
//       country: "",
//       region: "",
//       city: "",
//       latitude: "",
//       longitude: "",
//     },
//     artist: {
//       thumb_url: "",
//       mbid: "",
//       support_url: "",
//       facebook_page_url: "",
//       image_url: "",
//       name: "",
//       options: {
//         display_listen_unit: false,
//       },
//       id: "3084975",
//       tracker_count: 0,
//       upcoming_event_count: 0,
//       url: "",
//     },
//     on_sale_datetime: "",
//     lineup: [],

//     url: "",
//   }
//   const blankNodeId = createNodeId(`bandsintown-event-${blankObj.id}`)
//   const blankNodeContent = JSON.stringify(blankObj)
//   const blankNode = Object.assign({}, blankObj, {
//     id: blankNodeId,
//     parent: null,
//     children: [],
//     internal: {
//       type: `BandsInTownEvent`,
//       content: blankNodeContent,
//       contentDigest: createContentDigest(blankObj),
//     },
//   })
//   createNode(blankNode)

  return fetch(apiUrl).then(response => 
    response.json().then(data => {
      data.forEach(event => {
        if (event.id !== "0b9a79d6-f963-552f-a38f-48e3d562ebec") {
          const nodeData = processEvent(event)
          createNode(nodeData)
        } 
      })
    })
  )
}
