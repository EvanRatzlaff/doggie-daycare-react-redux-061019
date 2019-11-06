class PetsController < ApplicationController
    before_action :set_pet
    
    def index
        @pets = Pet.all
        render json: @pets
    end 

    def show
        render json: @pet
    end 

    def create
        @pet = Pet.new(pet_params)

        if @pet.save
            render json: @pet
        end 
    end 

    def delete
        @pet.destroy
    end 

    private
    def set_pet
        @pet = Pet.find_by_id(params[:id])
    end
    
    def pet_params
        params.require(:pet).permit(:name, :breed, :section_number)
    end 
end 