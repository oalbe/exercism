def transform(legacy_data):
	new_format = {}
	for key in legacy_data:
		for i in legacy_data[key]:
			new_format[i.lower()] = key

	return new_format