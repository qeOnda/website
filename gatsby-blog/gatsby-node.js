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


exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  
  const getProjects = makeRequest(graphql, `
    {
      allStrapiProject {
        edges {
          node {
            slug
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each article.
    result.data.allStrapiProject.edges.forEach(({ node }) => {      
      createPage({
        path: `/projects/${node.slug}`,
        component: path.resolve(`src/templates/project-single.js`),
        context: {
          slug: node.slug,
        },
      })
    })
  });

  const getArticles = makeRequest(graphql, `
    {
      allStrapiBlog {
        edges {
          node {
            slug
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each article.
    result.data.allStrapiBlog.edges.forEach(({ node }) => {      
      createPage({
        path: `/posts/${node.slug}`,
        component: path.resolve(`src/templates/article.js`),
        context: {
          slug: node.slug,
        },
      })
    })
  });
  
  return Promise.all([
    getArticles,
    getProjects,
  ])
  
};