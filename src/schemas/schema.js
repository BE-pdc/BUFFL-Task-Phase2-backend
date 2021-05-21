const { buildSchema, GraphQLSchema } = require('graphql');

module.exports = new buildSchema(`
    input SurveyInput {
        name: String
        picURL: String
        created: String
        description: String
        target: Int
        responses: Int
        status: Boolean
    }

    type Survey {
        _id: ID!
        name: String!
        picURL: String!
        created: String!
        description: String
        target: Int!
        responses: Int!
        status: Boolean!
    }

    type Query {
        surveys: [Survey]
    }

    type Mutation {
        createSurvey(name: String!, picURL: String!, description: String, target: Int!, status: Boolean!): Survey
        updateSurvey(id: ID!, input: SurveyInput): Survey
        deleteSurvey(id: ID!): Survey
    }
`);
