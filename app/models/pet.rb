class Pet < ApplicationRecord
    validates :name, presence: true
    validates :breed, presence: true
    validates :section_number, presence: true
end
