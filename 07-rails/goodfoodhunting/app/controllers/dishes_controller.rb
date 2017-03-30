class DishesController <  ApplicationController
  def index
    @dishes = Dish.all
  end

  def new

  end

  def show
    @dish = params['dish.id']
  end

  def create
    dish = Dish.new # gets from database
    dish.name = params[:name]
    dish.image_url = params[:image_url]
    if dish.save
      redirect_to '/dishes'
    else
      render :new # calls the approriate view
    end
  end

  def destroy
    dish = Dish.find(params[:dish_id])
    if dish.destroy
      redirect_to '/dishes'
    else
      redirect_to '/dishes'
    end
  end
end
