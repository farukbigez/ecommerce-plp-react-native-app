import { View, Text, ImageBackground, ImageSourcePropType, Pressable, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'

import PRODUCT_DATA from '@/constants/product_data'
import { AppGradient } from '@/components/AppGradient'
import { ProductData } from '@/types/global'
import { ScrollView } from 'react-native-gesture-handler'

export default function Product() {
	const { id } = useLocalSearchParams()

	const [product, setProduct] = useState<ProductData | undefined>()

	// Fetch product data from the server
	useEffect(() => {
		const product = PRODUCT_DATA.find((product) => product.id === (id))

		setProduct(product)
	}, [id, product])

	if (!product)
		return <Text style={{ flex: 1, alignItems: 'center' }}>Product not found</Text>

	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<ImageBackground
				source={product.images as ImageSourcePropType}
				resizeMode="cover"
				style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
			>
				<AppGradient colors={["transparent", "rgba(0,0,0,0.8)"]}>
					<Pressable
						onPress={() => router.back()}
						style={{
							position: 'absolute',
							top: 64,
							left: 24,
							zIndex: 10
						}}
					>
						<AntDesign name="arrowleft" size={24} color="white" />
					</Pressable>

					<View
						style={{
							alignItems: 'center',
							padding: 16,
							width: '100%',
						}}
					>
						<Text
							style={{
								marginTop: 120, // Adjusted margin to avoid overlap
								fontSize: 32,
								fontWeight: 'bold',
								color: '#F3F4F6',
								textAlign: 'center'
							}}
						>
							{product.names.en}
						</Text>

						<Text
							style={{
								fontSize: 24,
								color: '#F3F4F6',
								textAlign: 'left',
								marginTop: 8
							}}
						>
							<Text style={{ fontWeight: 'bold' }}>Brand: </Text>{product.vendor.name}
						</Text>

						<Text
							style={{
								fontSize: 24,
								color: '#F3F4F6',
								marginTop: 8
							}}
						>
							<Text style={{ fontWeight: 'bold' }}>Product code: </Text>{product.product_code}
						</Text>

						<Text style={{ fontSize: 24, color: '#F3F4F6', textAlign: 'center', marginTop: 8 }}>
							<Text style={{ fontWeight: 'bold' }}>Price: </Text>${product.price}
						</Text>

						<Text style={{ fontSize: 24, color: '#F3F4F6', marginTop: 8 }}>
							<Text style={{ fontWeight: 'bold' }}>Series: </Text>{product.series.name}
						</Text>

						<Text style={{ fontSize: 24, color: '#F3F4F6', textAlign: 'center', marginTop: 8 }}>
							<Text style={{ fontWeight: 'bold' }}>SKU: </Text>{product.series.item_quantity}
						</Text>

						{
							product.description_details && (
								<View style={{ marginBottom: 16 }}>
									{
										product.description_details.en.fabric && (
											<Text style={{ fontSize: 16, color: '#F3F4F6', textAlign: 'center', marginTop: 8 }}>
												Details: {product.description_details.en.fabric}
											</Text>
										)
									}

									{
										product.description_details.en.model_measurements && (
											<Text style={{ fontSize: 16, color: '#F3F4F6', textAlign: 'center', marginTop: 8 }}>
												Details: {product.description_details.en.model_measurements}
											</Text>
										)
									}

									{
										product.description_details.en.product_measurements && (
											<Text style={{ fontSize: 16, color: '#F3F4F6', textAlign: 'center', marginTop: 8 }}>
												Details: {product.description_details.en.product_measurements}
											</Text>
										)
									}

									{
										product.description_details.en.sample_size && (
											<Text style={{ fontSize: 16, color: '#F3F4F6', textAlign: 'center', marginTop: 8, marginBottom: 16 }}>
												Details: {product.description_details.en.sample_size}
											</Text>
										)
									}
								</View>
							)
						}

						<ScrollView
							horizontal={true}
							showsHorizontalScrollIndicator={false}
						>
							<View style={styles.listContainer}>
								{
									product.images.map((gallery, idx) => (
										<View key={idx} style={styles.imageContainer}>
											<Image source={{ uri: gallery }} style={styles.image} />
										</View>
									))
								}
							</View>
						</ScrollView>
					</View>
				</AppGradient>
			</ImageBackground>
		</View >
	)
}


const styles = StyleSheet.create({
	container: {
		marginVertical: 20,
		paddingHorizontal: 16,
	},
	titleContainer: {
		marginBottom: 8,
	},
	title: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 20,
	},
	listContainer: {
		flexDirection: 'row',
	},
	imageContainer: {
		height: 144,
		width: 128,
		borderRadius: 8,
		marginRight: 16,
		overflow: 'hidden',
	},
	image: {
		width: '100%',
		height: '100%',
	},
})
