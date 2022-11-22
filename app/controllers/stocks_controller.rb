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
        stock = Stock.create(name: params[:name], quantity: params[:quantity], description: params[:description])
        render json: stock, status: :created
    end
end
