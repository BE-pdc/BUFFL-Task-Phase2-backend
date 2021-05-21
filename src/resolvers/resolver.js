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
  updateSurvey: async (args) => {
    const updatedSurvey = await Survey.findByIdAndUpdate(
      args.id,
      {
        name: args.input.name,
        created: args.input.created,
        picURL: args.input.picURL,
        description: args.input.description,
        target: args.input.target,
        responses: args.input.responses,
        status: args.input.status,
      },
      { new: true }
    );
    return updatedSurvey;
  },
};

module.exports = resolvers;
