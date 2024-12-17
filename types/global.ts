// Root Object
export interface ProductData {
	id: string
	idx: number
	vendor: Vendor
	series: Series
	description_details: DescriptionDetails
	main_image: string
	price: number
	names: Names
	images: string[]
	product_code: string
}

// Vendor Information
interface Vendor {
	name: string
}

// Series Details
interface Series {
	name: string
	item_quantity: number
}

// Description Details
interface DescriptionDetails {
	en: DescriptionLanguageDetails
}

// Description Specifics for a Language
interface DescriptionLanguageDetails {
	fabric: string
	model_measurements: string
	sample_size: string
	product_measurements: string
}

// Product Names in Different Languages
interface Names {
	en: string
}
