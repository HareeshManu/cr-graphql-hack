// GraphQL: Resolvers
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json', {encoding:'utf8', flag:'r'}));
//console.log('da',data);
  const resolvers = {
    Query: {
      cars: () => data.cars
    }
};
// Exports
export default resolvers;


