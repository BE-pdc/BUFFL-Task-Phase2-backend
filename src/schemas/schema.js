const { buildSchema } = require('graphql');

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

    type User {
        _id: ID!
        email: String!
        password: String!
        favoriteSurveys: [Survey]
    }

    type Query {
        surveys: [Survey]
        users: [User]
    }

    type Mutation {
        createSurvey(name: String!, picURL: String!, description: String, target: Int!, status: Boolean!): Survey
        updateSurvey(id: ID!, input: SurveyInput): Survey
        deleteSurvey(id: ID!): Survey
        createUser(email: String!, password: String!, favoriteSurveys: SurveyInput): User
    }
`);
