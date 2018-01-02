class DishSerializer < ActiveModel::Serializer
  attributes \
    :name,
    :source_name,
    :source_type

  def source_name
    object.source.try(:name)
  end

  def source_type
    klass = object.source.try(:class)
    klass.to_s if klass
  end
end
