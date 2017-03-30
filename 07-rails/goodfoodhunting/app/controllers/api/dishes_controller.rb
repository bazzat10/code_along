class Api::DishesController < ApplicationController

  def index
    @dishes = Dish.all
    render json: @dishes #passes back as JSON ## it will in a hash in the form of JSON
  end

end
