class Api::DishesController < ApplicationController
  def index
    dishes = Dish.named(params[:named])
    render json: dishes
  end
end
