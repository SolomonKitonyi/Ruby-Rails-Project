class StocksController < ApplicationController
    def index
        stocks = Stock.all
        render json: stocks
    end

    def show
        stock = Stock.find_by(id: params[:id])
        if stock
            render json: stock
        else 
            render json: {error: "Stock not found"}, status: :not_found
        end
    end
    def create
        stock = Stock.create(stock_params)
        render json: stock, status: :created
    end

    def update
        stock = Stock.find_by(id: params[:id])
        if stock
            stock.update(stock_params)
            render json: stock
        else
            render json: {error: "Stock not found"}, status: :not_found
        end
    end

    def destroy
        stock = Stock.find_by(id: params[:id])
        if stock
            stock.destroy
            head :no_content
        else 
            render json: {error: "Stock not found"}, status: :not_found 
        end 
    end

    private
    def stock_params
        params.permit(:name, :quantity, :description)
    end
end
