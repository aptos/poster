class Post < ActiveRecord::Base
  attr_accessible :body, :title, :date
end
