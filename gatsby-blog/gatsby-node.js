const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  // Query for nodes to use in creating pages.
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }
      
      return result;
    })
  )
});

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  
  const getArticles = makeRequest(graphql, `
    {
      allStrapiTest {
        edges {
          node {
            title
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each article.
    result.data.allStrapiTest.edges.forEach(({ node }) => {
      let tit = node.title
      string = tit.replace(/\s+/g, '-')
      createPage({
        path: `/posts/${string}`,
        component: path.resolve(`src/templates/article.js`),
        context: {
          title: node.title,
        },
      })
    })
  });
  
  // Query for articles nodes to use in creating pages.
  return getArticles;
};