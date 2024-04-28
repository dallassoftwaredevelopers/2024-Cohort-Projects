class MealController < ApplicationController

  def index
    meals = current_user.meals.where(archived_at: nil).includes(:foods)
    if meals.empty?
        render json: { message: "You have no meals yet!" }, status: :ok
    else
        render json: meals, include: {foods: { only: [:id, :name, :description]}}, status: :ok
    end
  end

  def show
    meal = find_meal(params[:id])
    if meal.archived_at.present?
        render json: { message: "Whoops, that meal doesn't exist!" }, status: :unprocessable_entity
    else
        render json: meal, status: :ok
    end
  end

  def create
    new_meal = current_user.meals.create(meal_params)

    if new_meal.valid?
        render json: new_meal, status: :created
    else
        render json: { errors: new_meal.errors.full_messages }
    end
  end

  def update
    meal = find_meal(params[:id])

    if meal.archived_at.present?
        render json: { message: "Whoops, that meal doesn't exist!" }, status: :unprocessable_entity
    elsif meal.update(meal_params)
        render json: meal, status: :created
    else
        render json: { errors: meal.errors.full_messages }
    end
  end

  def destroy
    meal = find_meal(params[:id])
    if meal.archived_at.present?
        render json: { message: "Whoops, that meal doesn't exist!" }, status: :unprocessable_entity
    else
        meal.update(archived_at: Time.current.to_s)
        head :no_content
    end
  end
  
private

  def meal_params
    params.permit(:category, :description)
  end

  def find_meal(id)
    current_user.meals.find_by(id: id)
  end
  
end
