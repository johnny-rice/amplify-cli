import { showAllHelp } from '../extensions/amplify-helpers/show-all-help';

export const run = async context => {
  await showAllHelp(context);
};
