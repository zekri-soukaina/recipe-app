import { Center, Stack } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeCard } from "../components/RecipeCard";
import { TextInput } from "../components/ui/TextInput";
import { useState } from "react";

export const RecipeListPage = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const matchedData = data.hits.filter((recipe) => {
    // Filter based on recipe name
    const nameMatch = recipe.recipe.label
      .toLowerCase()
      .includes(searchField.toLowerCase());
    // Filter based on health labels
    const healthLabelMatch = recipe.recipe.healthLabels.some((label) => {
      return label.toLowerCase().includes(searchField.toLowerCase());
    });
    // Return true if iether name or health labels match the search field
    return nameMatch || healthLabelMatch;
  });

  console.log("matchedData:", matchedData); //this line for debugging

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };
  return (
    <Stack>
      <TextInput
        onChange={handleChange}
        placeholder="Search recepies"
        variant="outline"
        pr="4.5rem"
        backgroundColor="white"
        size="lg"
        w={400}
        m={8}
      />
      <Center
        bgColor="blue.100"
        gap={4}
        w={{ base: "full", sm: "85%" }}
        flexWrap="wrap"
        flexDir={{ base: "column", sm: "row" }}
        justify={"center"}
        // alignContent={"center"}
        // alignItems={"center"}
        alignSelf={"center"}>
        {matchedData.length > 0 ? (
          matchedData.map((recipe) => (
            <RecipeCard
              key={recipe.recipe.label}
              recipe={recipe}
              clickFn={clickFn}
            />
          ))
        ) : (
          <p>No recipe found.</p>
        )}
      </Center>
    </Stack>
  );
};
