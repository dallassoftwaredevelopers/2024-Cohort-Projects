class GroceryController < ApplicationController

    def create
        grocery = current_user.groceries.create(grocery_params)
        if grocery.valid?
            render json: grocery, status: :created
        else
            render json: { errors: grocery.errors.full_messages.to_sentence}, status: :unprocessable_entity
        end
    end

    def index
        groceries = Grocery.where(user_id: current_user.id).or(Grocery.where(universal: true))
        render json: groceries, status: :ok
    end

    def show
        grocery = Grocery.where(user_id: current_user.id).or(Grocery.where(universal: true)).find_by(id: params[:id])
        if grocery
            render json: grocery, status: :ok
        else
            render json: { message: 'Could not find the grocery item you are looking for. Add it using the form below.'}, status: :unprocessable_entity
        end
    end

    def update
        grocery = current_user.groceries.find_by(id: params[:id])
        if grocery.archived_at.present?
            render json: { message: 'Grocery Archived'}, status: :unprocessable_entity
        elsif grocery.update(grocery_params)
            render json: grocery, status: :created
        else
            render json: { errors: grocery.errors.full_messages.to_sentence}, status: :unprocessable_entity
        end
    end

    def destroy
        grocery = current_user.groceries.find_by(id: params[:id])
        if grocery
            grocery.update(archived_at: Time.current.to_s)
            head :no_content
        else
            render json: { message: 'Some error message'}, status: :unprocessable_entity
        end
    end

    protected

    def grocery_params
        params.permit(:name)
    end
end
