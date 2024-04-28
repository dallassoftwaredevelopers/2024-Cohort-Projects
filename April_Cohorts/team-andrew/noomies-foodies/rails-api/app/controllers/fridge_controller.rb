class FridgeController < ApplicationController

    def index
        user_fridges = current_user.fridges.where(archived_at: nil)
        render json: user_fridges, status: :ok
    end

    def show
        fridge = find_fridge(params[:id])

        if fridge.archived_at.present?
            render json: { message: 'There is not a fridge with that name'}, status: :unprocessable_entity
        else
            render json: fridge, status: :ok
        end
    end

    def create
        new_fridge = current_user.fridges.create(fridge_params)

        if new_fridge.valid?
            render json: new_fridge, status: :created
        else
            render json: { errors: new_fridge.errors.full_messages.to_sentence}
        end

    end

    def update
        fridge = find_fridge(params[:id])

        if fridge.archived_at.present?
            render json: { message: 'Fridge Archived'}, status: :unprocessable_entity
        elsif fridge.update(fridge_params)
            render json: fridge, status: :created
        else
            render json: { errors: fridge.errors.full_messages.to_sentence}
        end
    end

    def destroy
        fridge = find_fridge(params[:id])
        if fridge
            fridge.update(archived_at: Time.current.to_s)
            head :no_content
        else
            render json: {message: 'Could not find fridge'}, status: :unprocessable_entity
        end
    end

    protected

    def fridge_params
        params.permit(:name)
    end

    def find_fridge(id)
        current_user.fridges.find_by(id: id)
    end

end
