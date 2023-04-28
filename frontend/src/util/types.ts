import { RecipePopulated } from './../../../backend/src/util/types';

/**
 * Users
 */
export interface CreateUsernameData {
    createUsername: {
        success: boolean;
        error: string;
    };
}

export interface CreateUsernameVariables {
    username: string;
}

/**
 * Recipes
 */
export interface RecipeData {
    recipe: RecipePopulated;
}

export interface RecipesData {
    recipes: Array<RecipePopulated>;
}

export interface RecipeCreatedSubscriptionData {
    subscriptionData: {
        data: {
            recipeCreated: RecipePopulated;
        };
    };
}

export interface CreateRecipeData {
    createRecipe: {
        recipeId: string;
    };
}

export interface CreateRecipeInput {
    title: string;
    instructions: string;
    userId: string;
}

export interface RecipeDeletedData {
    recipeDeleted: {
        id: string;
    };
}
