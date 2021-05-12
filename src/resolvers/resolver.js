const Survey = require('../models/Survey');

const resolvers = {
  surveys: async () => {
    const surveysFound = await Survey.find();
    return surveysFound;
  },
  createSurvey: async (args) => {
    const local_time = new Date(Date.now()).toLocaleString();

    const newSurvey = new Survey({
      name: args.name,
      picURL: args.picURL,
      created: local_time,
      description: args.description,
      target: args.target,
      responses: 0,
      status: args.status,
    });
    const surveyCreated = await Survey.create(newSurvey);

    return surveyCreated;
  },
  deleteSurvey: async (args) => {
    const deletedSurvey = await Survey.findByIdAndDelete(args.id);
    return deletedSurvey;
  },
};

module.exports = resolvers;
