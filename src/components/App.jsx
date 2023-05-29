import { EventBoard } from './EventBoard/EventBoard';
import { PageTitle } from './PageTitle/PageTitle';
import recipes from 'recipes.json';

export const App = () => {
  return (
    <>
      <PageTitle text="Recipes" />
      <EventBoard events={recipes} />
    </>
  );
};
