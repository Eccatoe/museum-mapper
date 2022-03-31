class UserTour < ApplicationRecord
    belongs_to :tour
    belongs_to :user

    def parse_time
        DateTime.parse(self.time)
    end

    def self.order_time
        self.all.sort_by{|u| u.parse_time}
    end

end
