class ShoppingListController < ApplicationController
    # to do before action authentication logic for current_user

    def index
        @shoppinglist = ShoppingList.where("user_id = ? AND archived_at IS ?", current_user.id, nil)
        render json: @shoppinglist, status: :ok
    end
    
    def show
        @shoppinglist = ShoppingList.where("id = ? AND archived_at IS ?", params[:id], nil ).first
        if @shoppinglist.present? && @shoppinglist.user_id == current_user.id
            render json: @shoppinglist, status: :ok
        else
            render json: {"message": "Shopping List Does Not Exist"}, status: :unprocessable_entity
        end
    end

    
    def create
        @shoppinglist = ShoppingList.create(list_params)
        @shoppinglist.user_id = current_user.id
        if @shoppinglist.save
            render json: @shoppinglist, status: :created
        else
            render json: {errors: @shoppinglist.errors}, status: :unprocessable_entity 
        end
    end
    
    def update
        @shoppinglist = ShoppingList.find(params[:id])
        if @shoppinglist.user_id == current_user.id
            if @shoppinglist.archived_at.nil? && @shoppinglist.update(list_params)
                render json: @shoppinglist, status: :created
            else
                render json: {errors: @shoppinglist.errors}, status: :unprocessable_entity  
            end
        else
            render json: {errors: "Unauthorized"}, status: :unprocessable_entity
        end
    end
    
    
    def destroy
        @shoppinglist = ShoppingList.find(params[:id])
        if @shoppinglist.user_id == current_user.id
            @shoppinglist.update(archived_at: Time.current.to_s)
            head :no_content
        else
            render json: {errors: "Unauthorized"}, status: :unprocessable_entity
        end
    end


    def list_params
        params.require(:shopping_list).permit(:name, :color, :archived_at, :user_id)
    end

end
