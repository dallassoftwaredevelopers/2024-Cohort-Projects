class FoodController < ApplicationController

    def index
        foods = Food.all.where(archived_at: nil)
        render json: foods, status: :ok
    end

    def index_by_recipe
        recipe = Recipe.find_by(params[:recipe_id])

        if recipe
            foods = recipe.foods.distinct
            render json: foods, status: :ok
        else
            rendse json: {message: 'Could not find recipe'}, status: :unprocessable_entity
        end
    end

    def create
        food = current_user.foods.create(food_params)

        if food.valid?
            render json: food, status: :created
        else
            render json: { errors: food.errors.full_messages.to_sentence}, status: :unprocessable_entity
        end
    end

    def update
        food = find_food(params[:id])

        if food && food.update(food_params)
            render json: food, status: :created
        elsif food = nil
            render json: { message: 'Food not found'}, status: :unprocessable_entity
        else
            render json: { errors: food.errors.full_messages.to_sentence}, status: :unprocessable_entity
        end
    end

    def destroy
        food = find_food(params[:id])

        if food
            food.update(archived_at: Time.current.to_s)
            head :no_content
        else
            render json: {message: 'You do not have access to delete this food item'}, status: :unprocessable_entity
        end
    end

    protected

    def food_params
        params.permit(:name, :description)
    end

    def find_food(id)
        food = current_user.foods.find_by(id: id)

        if food && food.archived_at = nil
            return food
        else
            return nil
        end
    end

end
