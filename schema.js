// Imports: GraphQL
import { gql } from 'apollo-server-express';
// GraphQL: TypeDefs
const typeDefs = gql`
type Car {
  id: ID!
  supplier: String
  supplierImage: String
  make: String
  model: String
  doors: Int
  seats: Int
  luggage: Int
  total: Float
  daily: Int
  fuelType: String
  image: String
  isAirConditioning: Boolean
  transmission: String
}
type Query {
  cars: [Car]
}
`;
// Exports
export default typeDefs;