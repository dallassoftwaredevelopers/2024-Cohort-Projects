class ListItemsController < ApplicationController

    before_action :authenticate_user
    before_action :get_shopping_list
    before_action :get_item, only: [:show, :update, :destroy]

    def index
        if @pass
            if @shopping_list.nil?
                render json: {error: "Shopping list not found"}, status: :unprocessable_entity
            else
                @items = @shopping_list.list_items
                render json: @items
            end
        else 
            render json: {error: "unauthorized"}, status: :unprocessable_entity
        end
    end
    
    # def show
    #     render json: @item
    # end

    def create

        if @pass
            @item = @shopping_list.list_items.build(item_param)
            if @item.save
                render json: @item, status: :created
            else
                render json: @item.errors, status: :unprocessable_entity
            end           
        else
            render json: {error: "unauthorized"}, status: :unprocessable_entity
        end

    end

    def update
        if @pass
            if @item.update(item_param)
                render json: @item
            else
                render json: @item.errors, status: :unprocessable_entity
            end
        else
            render json: {error: "unauthorized"}, status: :unprocessable_entity
        end
    end

    def destroy
        if @pass
            @item.destroy
            head :no_content
        else
            render json: {error: "unauthorized"}, status: :unprocessable_entity
        end
    end
    
    def get_shopping_list
        @shopping_list = ShoppingList.where("user_id = ? AND id = ? AND archived_at IS ?", 
                                            current_user.id, params[:shopping_list_id], nil)
                                            .first
        
    end

    def get_item
        @item = ListItem.find(params[:id])
    end

    def authenticate_user
        shopping_list = ShoppingList.where("id = ?", params[:shopping_list_id]).first 
        @pass = false
        if shopping_list.user_id == current_user.id
            @pass= true
        end
    end

    def item_param
        params.require(:list_item).permit(:name, :quantity, :shopping_list_id, :archived_at)
    end 

end
   
