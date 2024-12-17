import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React from 'react'

export interface GalleryPreviewData {
	id: number
	text: string
	image: any
}

interface GuidedAffirmationsGalleryProps {
	title: string
	previews: GalleryPreviewData[]
}

export default function GuidedAffirmationsGallery({ title, previews }: GuidedAffirmationsGalleryProps) {
	return (
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>{title}</Text>
			</View>

			<View style={styles.listContainer}>
				<FlatList
					data={previews}
					showsHorizontalScrollIndicator={false}
					keyExtractor={(item) => item.id.toString()}
					horizontal
					renderItem={({ item }) => (
						<View style={styles.imageContainer}>
							<Image
								source={item.image}
								resizeMode='cover'
								style={styles.image}
							/>
						</View>
					)}
				/>
			</View>
		</View>
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
		marginVertical: 8,
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