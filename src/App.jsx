import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";
import { Center, Heading, Stack } from "@chakra-ui/react";

export const App = () => {
  const [selectRecipe, setSelectRecipe] = useState();
  const greeting = "winc Recipe Checker";

  return (
    <Center bgColor="blue.100" m={0} flexDir="column">
      {selectRecipe ? (
        <RecipePage recipe={selectRecipe} clickFn={setSelectRecipe} />
      ) : (
        <Stack bgColor="blue.100" p={10}>
          <Heading size="xl" color="blue.500" alignSelf={"center"}>
            {greeting}
          </Heading>
          <RecipeListPage clickFn={setSelectRecipe} />
        </Stack>
      )}
    </Center>
  );
};
