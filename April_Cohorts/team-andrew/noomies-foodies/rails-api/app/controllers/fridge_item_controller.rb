class FridgeItemController < ApplicationController

    def create
        fridge = find_fridge(params[:fridge_id])

        if fridge
            new_fridge_item = fridge.fridge_items.create(fridge_item_params)
    
            if new_fridge_item.valid?
                render json: new_fridge_item, status: :created
            else
                render json: { errors: new_fridge_item.errors.full_messages.to_sentence }, status: :unprocessable_entity
            end
        else
            render json: { message: 'Fridge not found'}, status: :unprocessable_entity
        end
    end

    def update
        fridge_item = find_fridge_item(params[:fridge_item_id])

        if fridge_item.archived_at.present?
            render json: { message: 'Fridge item not found'}, status: :unprocessable_entity
        else
            if fridge_item.update(fridge_item_params)
                render json: fridge_item, status: :ok
            else
                render json: { errors: fridge_item.errors.full_messages.to_sentence}, status: :unprocessable_entity
            end
        end

    end

    def destroy
        fridge_item = find_fridge_item(params[:fridge_item_id])
        if fridge_item && fridge_item.archived_at = nil
            fridge_item.update(archived_at: Time.current.to_s)
            head :no_content
        else
            render json: { message: 'Fridge item not found'}, status: :unprocessable_entity
        end
    end

    protected

    def fridge_item_params
        params.permit(:grocery_id, :quantity)
    end

    def find_fridge(fridge_id)
        fridge = current_user.fridges.find_by(id: fridge_id)
        if fridge.archived_at.present?
            return nil
        else
            return fridge
        end
    end

    def find_fridge_item(fridge_item_id)
        fridge = find_fridge(params[:fridge_id])
        if fridge
            fridge_item = fridge.fridge_items.find_by(id: fridge_item_id)
            return fridge_item
        else
            return nil
        end
    end

end
