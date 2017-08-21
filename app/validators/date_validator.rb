class DateValidator < ActiveModel::EachValidator
  def validate_each(record, attribute, value)
    return if value.is_a?(Date)
    error_array = record.errors[attribute]
    error_array << (options[:message] || 'is an invalid date')
    error_array.delete_at(error_array.index("can't be blank"))
  end
end
