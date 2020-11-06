const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
 
  await graphql(`
     {
       allDatoCmsWork {
         edges {
           node {
             slug
           }
         }
       }
     }
   `)
 }
