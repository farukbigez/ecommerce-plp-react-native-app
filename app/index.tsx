import { FlatList, ImageBackground, ImageSourcePropType, Pressable, Text, View, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'

import { AppGradient } from '@/components/AppGradient'
import PRODUCT_DATA from '@/constants/product_data'

export default function App() {
	const router = useRouter()

	return (
		<View style={{ flex: 1 }}>
			<AppGradient colors={['rgb(255, 255, 255)', 'rgb(255, 255, 255)']}>
				<View style={styles.header}>
					<Text style={styles.headerTitle}>
						E-commerce PLP App
					</Text>

					<Text style={styles.headerSubtitle}>
						Start your shopping journey
					</Text>
				</View>

				<View>
					<FlatList
						data={PRODUCT_DATA}
						style={styles.flatList}
						keyExtractor={(item) => item.id.toString()}
						showsVerticalScrollIndicator={false}
						renderItem={({ item }) => (
							<Pressable
								onPress={() => router.push(`/product/${item.id}`)}
								style={styles.pressable}
							>
								<ImageBackground
									source={item.images as ImageSourcePropType}
									resizeMode='cover'
									style={styles.imageBackground}
								>
									<LinearGradient
										colors={['transparent', 'rgba(0,0,0,0.8)']}
										style={styles.linearGradient}
									>
										<Text style={styles.itemBrand}>
											{item.vendor.name}
										</Text>

										<Text style={styles.itemTitle}>
											{item.names.en}
										</Text>

										<Text style={styles.itemPrice}>
											${item.price}
										</Text>
									</LinearGradient>
								</ImageBackground>
							</Pressable>
						)}
					/>
				</View>
			</AppGradient>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		marginBottom: 24,
	},
	headerTitle: {
		color: '#000',
		marginBottom: 12,
		fontWeight: 'bold',
		fontSize: 32,
		textAlign: 'left',
		paddingLeft: 16,
	},
	headerSubtitle: {
		color: '#313131',
		fontSize: 20,
		fontWeight: '500',
		paddingLeft: 16,
	},
	flatList: {
		marginBottom: 190,
		paddingHorizontal: 16,
	},
	pressable: {
		height: 300,
		borderRadius: 6,
		marginVertical: 12,
		overflow: 'hidden',
	},
	imageBackground: {
		flex: 1,
		borderRadius: 8,
		justifyContent: 'center',
	},
	linearGradient: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	itemBrand: {
		color: '#F3F4F6',
		fontSize: 18,
		fontWeight: '500',
		textAlign: 'center',
	},
	itemTitle: {
		color: '#F3F4F6',
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	itemPrice: {
		color: '#F3F4F6',
		fontSize: 20,
		fontWeight: '500',
		textAlign: 'center',
		marginTop: 8,
	},
})
