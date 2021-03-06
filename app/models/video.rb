# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :text
#  creator_id  :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Video < ApplicationRecord

  validates :title, :creator_id, presence: true

  belongs_to :creator,
    foreign_key: :creator_id,
    class_name: :User

  has_many :comments,
    foreign_key: :video_id,
    class_name: :Comment,
    dependent: :destroy

  has_many :likes, as: :likeable, dependent: :destroy
  
  has_one_attached :video_file

  def num_likes
    self.likes.where(version: "like").length
  end

  def num_dislikes
    self.likes.where(version: "dislike").length
  end
end
