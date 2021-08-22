# Jbuilder Key Formatting / Converting
# camel_case => camelCase
json.key_format! camelize: :lower
json.deep_format_keys!

json.extract! user, :id, :username, :email
json.numVideos user.videos.count

json.likedVideos({})
json.likedComments({})
user.likes_dislikes.each do |like|
  if like.likeable_type == "Video"
    json.set! :likedVideos do
      json.set! like.likeable_id do
        json.extract! like, :id, :liker_id, :likeable_id, :likeable_type, :version
      end
    end
  end
  if like.likeable_type == "Comment"
    json.set! :likedComments do
      json.set! like.likeable_id do
        json.extract! like, :id, :liker_id, :likeable_id, :likeable_type, :version
      end
    end      
  end
end