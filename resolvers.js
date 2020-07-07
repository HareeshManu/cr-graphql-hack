// GraphQL: Resolvers
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json', {encoding:'utf8', flag:'r'}));
//console.log('da',data);
  const resolvers = {
    Query: {
      products: (_, { pageNumber = 1, perPage}) => {
        if(perPage) {
          return data.products.slice((pageNumber - 1) * perPage, pageNumber * perPage)
        } else {
          return data.products;
        }
      },
      cars: () => data.cars,
      suppliers: () => data.suppliers,
      stations: () => data.stations,
      policyItems: () => data.policyItems,
      productGroups: () => data.productGroups,
      bundles: () => data.bundles,
      extras: () => data.extras,
      meta: () => data.meta,
      locations: () => data.locations,
      locationDistance:() => data.locationDistance
    }
};
// Exports
export default resolvers;


