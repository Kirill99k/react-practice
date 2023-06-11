import { useMedia } from 'react-use';
import { Box } from './Box';
import { EventBoard } from './EventBoard/EventBoard';
import { PageTitle } from './PageTitle/PageTitle';
import recipes from 'recipes.json';
import { Recipe } from './Recipe/Recipe';

export const App = () => {
  const isDesktop = useMedia('(min-width: 768px)');

  return (
    <>
      <Box
        as="header"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <h1>Logo</h1>
        {isDesktop ? <h1>Desktop nav</h1> : <h1>Mobile nav</h1>}
      </Box>
      <PageTitle text="Recipes" />
      {recipes.map(recipe => (
        <Recipe key={recipe.name} recipe={recipe} />
      ))}
      <EventBoard events={recipes} />
    </>
  );
};
